"use client";

import axios from "@/helpers/axios";
import { iUser } from "@/types/user";
import { iOrganizer } from "@/types/organizer";
import { useEffect, useState } from "react";

const useSession = () => {
  const [isAuth, setIsAuth] = useState<boolean>(false);
  const [user, setUser] = useState<iUser | null>(null);
  const [organizer, setOrganizer] = useState<iOrganizer | null>(null);

  const checkSession = async () => {
    try {
      // Check if the token exists
      const token = localStorage.getItem("token");
      if (!token) throw new Error("No token found");

      // Fetch user session
      const { data: userData } = await axios.get("/users/profile", {
        headers: { Authorization: `Bearer ${token}` },
      });

      if (userData?.result) {
        setUser(userData.result);
        setIsAuth(true);
        return;
      }

      // If no user, fetch organizer session
      const { data: organizerData } = await axios.get("/organizers/profile", {
        headers: { Authorization: `Bearer ${token}` },
      });

      if (organizerData?.result) {
        setOrganizer(organizerData.result);
        setIsAuth(true);
      }
    } catch (err) {
      console.error("Session check failed:", err);
      setIsAuth(false);
      setUser(null);
      setOrganizer(null);
    }
  };

  useEffect(() => {
    checkSession();
  }, []);

  return { user, organizer, isAuth };
};

export default useSession;

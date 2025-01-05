"use client";

import axios from "@/helpers/axios";
import { IOrganizer } from "@/types/organizer";
import { useEffect, useState } from "react";

const useSessionOrganizer = () => {
  const [isAuth, setIsAuth] = useState<boolean>(false);
  const [organizer, setOrganizer] = useState<IOrganizer | null>(null);

  const checkOrganizerSession = async () => {
    try {
      const token = localStorage.getItem("token");
      if (!token) throw new Error("No token found");

      const { data } = await axios.get("/organizers/profile", {
        headers: { Authorization: `Bearer ${token}` },
      });

      setOrganizer(data.result);
      setIsAuth(true);
    } catch (err) {
      console.error("Failed to fetch organizer session:", err);
      setIsAuth(false);
    }
  };

  useEffect(() => {
    checkOrganizerSession();
  }, []);

  return { organizer, isAuth };
};

export default useSessionOrganizer;

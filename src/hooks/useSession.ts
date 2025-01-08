"use client";

import axios, { isAxiosError } from "@/helpers/axios";
import { IUser } from "@/types/user";
import { useEffect, useState } from "react";

const useSession = () => {
  const [isAuth, setIsAuth] = useState<boolean>(false);
  const [user, setUser] = useState<IUser | null>(null);

  const checkSession = async () => {
    try {
      // Check if the token exists
      const token = localStorage.getItem("token");
      if (!token) throw new Error("No token found");

      // Fetch user session
      const { data } = await axios.get("/users/profile", {
        headers: { Authorization: `Bearer ${token}` },
      });

      if (data) {
        setUser(data.result);
        setIsAuth(true);
        return;
      }
    } catch (err) {
      console.error("Session check failed:", err);
      if (
        isAxiosError(err) &&
        err.response?.data.message.includes("jwt expired")
      ) {
        localStorage.removeItem("token");
        location.reload();
      }
      setIsAuth(false);
      setUser(null);
    }
  };

  useEffect(() => {
    checkSession();
  }, []);

  return { user, isAuth };
};

export default useSession;

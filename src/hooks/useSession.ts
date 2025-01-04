"use client";

import axios from "@/helpers/axios";
import { iUser } from "@/types/user";
import { useEffect, useState } from "react";

const useSession = () => {
  const [isAuth, setIsAuth] = useState<boolean>(false);
  const [user, setUser] = useState<iUser | null>(null);

  const checkSession = async () => {
    try {
      const { data } = await axios.get("/users/profile", {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      });
      setUser(data.result);
      setIsAuth(true);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    checkSession();
  }, []);

  return { user, isAuth };
};

export default useSession;

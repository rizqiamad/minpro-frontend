"use client"

import { jwtDecode } from "jwt-decode";
import { useRouter } from "next/navigation";
import React, { useState, useEffect } from "react";

const authProtect = (WrappedComponent: React.ComponentType) => {
  const AuthProtect: React.FC = (props) => {
    const router = useRouter();
    const [token, setToken] = useState<string | null>(null);

    useEffect(() => {
      const storedToken = localStorage.getItem("token");
      setToken(storedToken);
      if (storedToken) {
        const decodedUser = jwtDecode(storedToken) as { role: "organizer" | "user" };
        if (decodedUser.role !== 'user') {
          router.push("/organizer/dashboard")
        } else {
          router.push("/");
        }
      }
    }, [router]);

    if (token) {
      const decodedUser = jwtDecode(token) as { role: "organizer" | "user" };
      if (decodedUser.role !== 'user') {
        router.push("/organizer/dashboard")
      } else {
        router.push("/");
      }
      return null;
    }

    return <WrappedComponent {...props} />;
  };

  return AuthProtect;
};
export default authProtect;
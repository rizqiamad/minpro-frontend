"use client";

import { jwtDecode } from "jwt-decode";
import { useRouter } from "next/navigation";
import React, { useState, useEffect } from "react";

const organizerGuard = (WrappedComponent: React.ComponentType) => {
  const OrganizerGuard: React.FC = (props) => {
    const router = useRouter();
    const [token, setToken] = useState<string | null>(null);

    useEffect(() => {
      const storedToken = localStorage.getItem("token");
      setToken(storedToken);
      if (!storedToken) router.push("/auth")
    }, []);

    useEffect(() => {
      if (token === null) return;

      if (!token) {
        router.push("/auth");
      } else {
        const decodedUser = jwtDecode(token) as { role: "organizer" | "user" };
        if (decodedUser.role !== "organizer") {
          router.push("/organizer/login");
        }
      }
    }, [router, token]);

    if (token === null) {
      return null;
    }

    return <WrappedComponent {...props} />;
  };

  return OrganizerGuard;
};

export default organizerGuard;
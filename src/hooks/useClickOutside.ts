import { useEffect } from "react";

export default function UseClickOutside(
  open: boolean,
  menuHandler: () => void
) {
  const handleClickOutside = () => {
    if (open) {
      menuHandler();
    }
  };
  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [open]);
}

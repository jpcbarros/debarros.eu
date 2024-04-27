"use client";

import { useEffect } from "react";
import feather from "feather-icons";

export default function FeatherIcons() {
  useEffect(() => {
    feather.replace();
  }, []);

  return null;
}

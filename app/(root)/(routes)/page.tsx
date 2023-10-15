"use client";

import { useStoreModal } from "@/hooks/use-store-modal";
import { useEffect } from "react";

export default function SetupPage() {
  // const onOpen = useStoreModal((state) => state.onOpen);
  // const isOpen = useStoreModal((state) => state.isOpen);
  const { isOpen, onOpen } = useStoreModal();

  useEffect(() => {
    onOpen();
  }, [isOpen]);

  return null;
}

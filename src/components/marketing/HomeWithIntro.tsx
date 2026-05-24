"use client";

import { useState, useEffect } from "react";
import { LogoIntro } from "./LogoIntro";

const SESSION_KEY = "tensai-intro-played";

export function HomeWithIntro({ children }: { children: React.ReactNode }) {
  const [showIntro, setShowIntro] = useState(false);
  const [introPlayed, setIntroPlayed] = useState(false);

  useEffect(() => {
    if (!sessionStorage.getItem(SESSION_KEY)) {
      setShowIntro(true);
    } else {
      setIntroPlayed(true);
    }
  }, []);

  const handleComplete = () => {
    sessionStorage.setItem(SESSION_KEY, "1");
    setIntroPlayed(true);
  };

  return (
    <>
      {showIntro && !introPlayed && (
        <LogoIntro onComplete={handleComplete} />
      )}
      {children}
    </>
  );
}

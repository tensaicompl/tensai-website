"use client";

import { useState, useEffect, useCallback } from "react";
import { LogoIntro } from "./LogoIntro";
import styles from "./LogoIntro.module.css";

const SESSION_KEY = "tensai-intro-played";

export function HomeWithIntro({ children }: { children: React.ReactNode }) {
  const [showIntro, setShowIntro] = useState(false);
  const [pageVisible, setPageVisible] = useState(true);

  useEffect(() => {
    if (!sessionStorage.getItem(SESSION_KEY)) {
      setShowIntro(true);
      setPageVisible(false);
    }
  }, []);

  const handleComplete = useCallback(() => {
    sessionStorage.setItem(SESSION_KEY, "1");
    setPageVisible(true);
  }, []);

  return (
    <>
      {showIntro && <LogoIntro onComplete={handleComplete} />}
      <div className={`${styles.pageWrap} ${pageVisible ? styles.pageVisible : ""}`}>
        {children}
      </div>
    </>
  );
}

'use client';
import { use, useEffect, useState } from "react";
import LoginModal from "@/components/LoginModal";
import NavBar from "@/components/NavBar";

export default function Home() {

  const [showLogin, setShowLogin] = useState(false);

  // Login prompt visiblity
  useEffect(() => {
    if (showLogin) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [showLogin]);

  return (
    <div className="bg-neetbase text-neutral-50 h-screen">
      <NavBar />
      <main>
        <div className="text-6xl font-semibold text-left pt-72 pl-32 leading-snug">
          <p>NextWorld</p>
          <p>A better way to worldbuild.</p>
        </div>
      </main>
    </div>
  );
}

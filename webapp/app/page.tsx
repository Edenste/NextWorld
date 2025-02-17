'use client';
import { use, useEffect, useState } from "react";
import LoginModal from "@/components/LoginModal";

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
    <div className="bg-zinc-800 text-neutral-50 h-screen">
      <main>
        <div className="text-6xl font-semibold text-left pt-72 pl-32 leading-snug">
          <p>NextWorld</p>
          <p>A better way to worldbuild.</p>
        </div>
      </main>
      <div>
        <button
          className="bg-blue-500 text-neutral-50 rounded-lg px-4 py-2 mt-4 ml-32"
          onClick={()=> setShowLogin(true)}
        >
          Sign in
        </button>
        {showLogin && <LoginModal onClose={() => setShowLogin(false)}/>}
      </div>
    </div>
  );
}

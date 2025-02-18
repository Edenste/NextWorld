// This is a componennt for the login prompt that will be displayed when the user attempts to login.
'use client';
import { use, useEffect, useState } from "react";
import LoginModal from "@/components/LoginModal";

export default function NavBar() {
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
        <header className="flex flex-row justify-between max-w py-2 sm:px-6 border-y bg-neetheader text-white border-white">
            {/* Left side of navbar */}
            <div className="flex flex-row justify-evenly">
                <button className="bg-transparent hover:bg-neetbuttonhover text-white font-bold py-2 px-4 mx-1 rounded-full">Questions</button>
                <button className="bg-transparent hover:bg-neetbuttonhover text-white font-bold py-2 px-4 mx-1 rounded-full">Roadmap</button>
            </div>
            {/* Right side of navbar */}
            <div>
                <button
                    className="bg-neetsignin hover:bg-neetsigninhover text-white rounded-lg px-4 py-2 font-bold"
                    onClick={()=> setShowLogin(true)}
                >
                Sign in
                </button>
            </div>
            {showLogin && <LoginModal onClose={() => setShowLogin(false)}/>}
        </header>
    );
  }
  
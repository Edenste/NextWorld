// This is a componennt for the login prompt that will be displayed when the user attempts to login.

import { useRef } from "react";

export default function LoginModal({onClose}: Readonly<{onClose: () => void;}>) {
  const modalRef = useRef(null);

  const closeModal = (e: React.MouseEvent<HTMLDivElement>) => {
    if (modalRef.current === e.target) {
      onClose();
    }
  }

    return (
      <div ref={modalRef} onClick={closeModal} className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center">
        <div className="mt-10 flex flex-col gap-5 text-white bg-zinc-800 rounded-xl divide-y divide-black items-center">
            <div className="text-2xl font-extrabold pt-6 px-40">Sign in</div>
            <div className="flex flex-col pt-4 px-40 items-center" >
              <div className="pt-2"><button className="bg-white text-black font-bold py-2 px-6 border-2 border-neutral-400 hover:border-neutral-600 rounded">Google</button></div>
              <div className="py-3"><button className="bg-white text-black font-bold py-2 px-6 border-2 border-neutral-400 hover:border-neutral-600 rounded">Github</button></div>
              <div className="pt-5 text-xs pb-1">By signing in, you agree to NextWorld's terms of service and privacy policy.</div>
            </div>
            <div className="py-4 px-96">
              <button onClick={onClose} className="bg-transparent hover:bg-red-500 text-red-500 hover:text-white py px-3 border-4 border-red-500 hover:border-transparent rounded text-sm">Cancel</button>
            </div>
            
        </div>
      </div>
    );
  }
  
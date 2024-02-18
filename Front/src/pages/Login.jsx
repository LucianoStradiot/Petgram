import { React, useEffect } from 'react';
import LoginContent from '../components/login/LoginContent';
import { useNavigateContext } from '../context/navigationContext';

export default function Login() {
  const { setActive } = useNavigateContext();

  useEffect(() => {
    setActive('login');
  }, []);

  return (
    <main className="fixed bg-[#73360A] w-full h-full">
      <div className="fixed flex flex-col top-0 bottom-0 right-0 left-0 justify-center items-center m-2 rounded-[10px] bg-gradient-to-t from-white to-[#d9ae90]">
        <div className="flex flex-col h-[150px]">
          <p className="font-walter  text-[30px] text-[#000] text-center">Welcome to</p>
          <img src={`${import.meta.env.BASE_URL}assets/images/isologo.svg`} alt="isologo" />
        </div>
        <div className="flex items-center justify-center z-50">
          <LoginContent />
        </div>
        <div className="flex flex-col justify-end h-[100px] mb-[50px]">
          <h3 className="font-medium">By PetDevs</h3>
        </div>
      </div>
      <div className="absolute flex justify-center w-full bottom-0 z-10">
        <img
          src={`${import.meta.env.BASE_URL}assets/images/foots.png`}
          alt="foot-image"
          className=" mb-[-140px] animate-top opacity-30"
        />
      </div>
    </main>
  );
}

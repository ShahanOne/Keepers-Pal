'use client';

import { useRouter } from 'next/navigation';

const Navbar = ({ mode, changeTheme, theme }) => {
  const router = useRouter();
  return (
    <div className="flex flex-col md:flex-row justify-between bg-red-500 text-white px-6 py-8 ">
      <p className="text-lg md:text-xl font-bold">Keepers Pal</p>
      <div className="flex justify-between pt-2 md:pt-0 md:justify-center gap-4 md:gap-12">
        <button
          className={`shadow-lg rounded-2xl px-2 cursor-pointer text-red-500 ${
            theme === 'Light' ? 'bg-slate-300 ' : 'bg-zinc-800'
          }`}
          onClick={changeTheme}
        >
          {mode} Mode
        </button>{' '}
        <p
          className=" cursor-pointer"
          onClick={() => router.push('https://shahanone.vercel.app')}
        >
          Contact
        </p>
      </div>
    </div>
  );
};

export default Navbar;

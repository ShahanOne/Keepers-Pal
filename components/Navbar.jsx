'use client';

const Navbar = ({ mode, changeTheme, theme }) => {
  return (
    <div className="flex justify-between bg-red-500 text-white px-6 py-8 ">
      <p className="text-xl font-bold">Keepers Pal</p>
      <div className="flex justify-center gap-4 md:gap-12">
        <p className=" cursor-pointer">Home</p>
        <button
          className={`shadow-lg rounded-2xl px-2 cursor-pointer text-red-500 ${
            theme === 'Light' ? 'bg-slate-300 ' : 'bg-zinc-800'
          }`}
          onClick={changeTheme}
        >
          {mode} Mode
        </button>{' '}
        <p className=" cursor-pointer">Contact</p>
      </div>
    </div>
  );
};

export default Navbar;

'use client';

const Navbar = ({ mode, changeTheme }) => {
  return (
    <div className="flex justify-between bg-gradient-to-r from-cyan-500 to-indigo-400 text-white px-6 py-8 ">
      <p className="text-xl font-bold">Keepers Pal</p>
      <div className="flex justify-center gap-4 md:gap-12">
        <p className=" cursor-pointer">Home</p>
        <button
          className="shadow rounded-2xl px-2 cursor-pointer"
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

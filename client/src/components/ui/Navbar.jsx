const Navbar = () => {
  return (
    <nav className="bg-white py-5 px-12 text-purple-500 font-semibold flex items-center justify-between shadow-lg">
      <div>
        <h1 className="font-bold text-2xl">Techshots</h1>
      </div>

      <ul className="flex items-center space-x-5">
        <li>Home</li>
        <li>Blogs</li>
        <li>About</li>
      </ul>
    </nav>
  );
};

export default Navbar;

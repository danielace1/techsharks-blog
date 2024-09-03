const Navbar = () => {
  return (
    <nav className="container bg-purple-500 py-5 px-12 text-white font-semibold flex items-center justify-between">
      <div>
        {/* <img src="/logo.webp" className="" alt="techsharks" /> */}
        <h1 className="font-bold text-2xl">Techsharks</h1>
      </div>

      <ul className="flex items-center space-x-5">
        <li>Home</li>
        <li>Our Team</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </nav>
  );
};

export default Navbar;

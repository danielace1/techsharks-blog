const Navbar = () => {
  return (
    <nav className="bg-white-100 text-purple-800 py-4 px-8 lg:px-20">
      <div className="container mx-auto flex justify-between items-center">
        <a href="#" className=" text-base md:text-xl lg:text-2xl font-bold ">
          TechShots
        </a>
        <nav>
          <ul className="flex space-x-2 md:space-x-4 lg:space-x-6">
            <li className="hover:text-gray-950 text-base lg:text-xl">Home</li>
            <li className="hover:text-gray-950 text-base lg:text-xl">Posts</li>
            <li className="hover:text-gray-950 text-base lg:text-xl">About</li>
            <li className="hover:text-gray-950 text-base lg:text-xl">
              Contact
            </li>
          </ul>
        </nav>
        <div className="font-bold border-purple-800">
          <button className="bg-purple-200 text-purple-800 px-2 lg:px-4 py-2 rounded-full hover:bg-gray-200">
            Subscribe
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

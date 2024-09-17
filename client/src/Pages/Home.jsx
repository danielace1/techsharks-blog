const Home = () => {
  return (
    <div className="">
      <section className="relative bg-purple-100 py-16 my-5 mx-5 lg:mx-10 rounded-lg">
        <div className="container mx-auto flex flex-col items-center p-3 text-center">
          <img
            src="heropic.svg"
            alt="Hero Image"
            className="h-40 w-40 mb-6 rounded shadow-lg"
          />
          <h1 className="text-4xl font-bold mb-4 text-purple-600">
            Welcome to Our Blog
          </h1>
          <p className="text-lg mb-6 text-gray-700">
            Discover the latest articles and insights on various topics that
            interest you.
            <br /> Explore our content and stay updated with new posts.
          </p>
          <a
            href="#"
            className="bg-purple-600 text-white px-6 py-3 rounded-full hover:bg-purple-800"
          >
            Get Started
          </a>
        </div>
      </section>

      <section className="m-10 lg:px-20">
        <h1 className="text-center font-bold text-4xl my-10 text-purple-600 ">
          Discover the latest in...
        </h1>
        <div>
          <div className="flex justify-between items-center flex-col sm:flex-row ">
            <h2 className="text-3xl font-bold">Catageory title-1</h2>
            <p className="text-purple-500 font-semibold hover:text-purple-400 hover:cursor-pointer">
              View more posts&gt;
            </p>
          </div>
          <div className="flex flex-col items-center py-6 justify-between md:flex-row ">
            <div className="group px-5">
              <div>
                <img
                  src="/img-1.avif"
                  alt="Your_image"
                  className="w-96 h-56 rounded group-hover:border-2 group-hover:border-purple-600 transition duration-300 object-cover"
                />
              </div>
              <div>
                <p className="text-sm pt-5">Catageory-title</p>
                <p className="font-semibold text-2xl py-0.5">Card-title</p>
              </div>
            </div>
            <div className="group px-5">
              <div>
                <img
                  src="/img-2.avif"
                  alt="Your_image"
                  className="w-96 h-56 rounded group-hover:border-2 group-hover:border-purple-600 transition duration-300 object-cover"
                />
              </div>
              <div>
                <p className="text-sm pt-5 ">Catageory-title</p>
                <p className="font-semibold text-2xl py-0.5">Card-title</p>
              </div>
            </div>
            <div className="group px-5">
              <div>
                <img
                  src="/img-3.avif"
                  alt="Your_image"
                  className="w-96 h-56 rounded group-hover:border-2 group-hover:border-purple-600 transition duration-300 object-cover"
                />
              </div>
              <div>
                <p className="text-sm pt-5">Catageory-title</p>
                <p className="font-semibold text-2xl py-0.5">Card-title</p>
              </div>
            </div>
          </div>
        </div>
        <div />
        <div className="flex justify-between items-center flex-col sm:flex-row">
          <h2 className="text-3xl font-bold">Catageory title-2</h2>
          <p className="text-purple-500 font-semibold hover:text-purple-400 hover:cursor-pointer">
            View more posts&gt;
          </p>
        </div>
        <div className="flex items-center py-6 justify-between flex-col md:flex-row">
          <div className="group px-5">
            <div>
              <img
                src="/img-4.avif"
                alt="Your_image"
                className="w-96 h-56 rounded group-hover:border-2 group-hover:border-purple-600 transition duration-300 object-cover"
              />
            </div>
            <div>
              <p className="text-sm pt-5">Catageory-title</p>
              <p className="font-semibold text-2xl py-0.5">Card-title</p>
            </div>
          </div>
          <div className="group px-5">
            <div>
              <img
                src="/img-5.avif"
                alt="Your_image"
                className="w-96 h-56 rounded group-hover:border-2 group-hover:border-purple-600 transition duration-300 object-cover"
              />
            </div>
            <div>
              <p className=" text-sm pt-5 ">Catageory-title</p>
              <p className="font-semibold text-2xl py-0.5">Card-title</p>
            </div>
          </div>
          <div className="group p-5">
            <div>
              <img
                src="/img-6.avif"
                alt="Your_image"
                className="w-96 h-56 rounded group-hover:border-2 group-hover:border-purple-600 transition duration-300 object-cover"
              />
            </div>
            <div>
              <p className=" text-sm pt-5">Catageory-title</p>
              <p className="font-semibold text-2xl py-0.5">Card-title</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-purple-100 w-full">
        <div className="flex items-center justify-between p-4 flex-col md:flex-row">
          <div className="p-5 grow">
            <h1 className="font-bold text-3xl">
              Get our best content in your inbox
            </h1>
            <p>
              All the tips, stories, and resources you could ever need or want
              <br />— straight to your email!
            </p>
          </div>
          <div className="p-5 grow">
            <form action="#" className="max-w-md">
              <input
                type="email"
                placeholder="Email"
                className="w-full p-3 border border-purple-700 rounded-lg my-2"
              />
              <button className="p-3 bg-purple-600 rounded-lg my-2 w-full text-white hover:bg-purple-700">
                Subscribe
              </button>
              <p className="text-xs">
                Your privacy matters! Help Scout only uses this info to send
                content and updates. You may unsubscribe anytime. View our{" "}
                <a href="#" className="text-purple-600 ">
                  privacy policy
                </a>
                for more.
              </p>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;

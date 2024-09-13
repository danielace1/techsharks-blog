const Home = () => {
  return (
    <div className="bg-purple-100">
      <div className="container grid grid-cols-2 gap-x-14 items-center px-28 py-32">
        <div>
          <h1 className="text-gray-500 font-bold text-2xl mb-2">
            Featured Article
          </h1>
          <p className="text-purple-500 font-semibold text-3xl hover:cursor-pointer hover:underline hover:underline-offset-1">
            Announcing Programiz PRO: A Hands-on Approach to Learn Programming
          </p>
        </div>
        <div>
          <img src="/Blogging.png" alt="" className="mx-auto" />
        </div>
      </div>
    </div>
  );
};

export default Home;

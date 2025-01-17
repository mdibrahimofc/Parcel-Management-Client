const Banner = () => {
    return (
      <div>
        <section
          className="relative bg-cover mb-8 bg-center h-screen"
          style={{
            backgroundImage: "url('https://i.ibb.co.com/NtLXL5t/pexels-norma-mortenson-4393426.jpg')",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-blue-900/60 to-transparent"></div>
          <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Simplify Your Deliveries with Ease
            </h1>
            <p className="text-lg md:text-xl mb-6">
              Book, Assign, and Deliver - All in One Place
            </p>
            <div className="flex items-center w-full max-w-lg">
              <input
                type="text"
                placeholder="Search for parcels, users, or deliveries"
                className="w-full px-4 py-3 rounded-l-lg text-gray-800 focus:outline-none"
              />
              <button className="px-6 py-3 bg-orange-500 hover:bg-orange-600 rounded-r-lg text-white font-semibold">
                Search
              </button>
            </div>
            <button className="mt-6 px-8 py-3 bg-teal-500 hover:bg-teal-600 text-white font-semibold rounded-lg shadow-lg transition-transform transform hover:scale-105">
              Get Started
            </button>
          </div>
          <div className="absolute bottom-4 inset-x-0 text-center text-gray-200">
            <span className="animate-bounce text-lg">⬇️</span>
          </div>
        </section>
      </div>
    );
  };
  
  export default Banner;
  
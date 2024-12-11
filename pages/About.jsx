import React from 'react';

const About = () => {
  return (
    <>
      {/* Latest Deals Section */}
      <section
        className="overflow-hidden bg-cover bg-center"
        style={{ backgroundImage: 'url(/Deal.jpeg)' }}
      >
        <div className="bg-black/50 p-8 md:p-12 lg:px-16 lg:py-24">
          <div className="text-center sm:text-left">
            <h2 className="text-2xl font-bold text-white sm:text-3xl md:text-5xl">Latest Deals</h2>

            <p className="hidden max-w-lg text-white/90 md:mt-6 md:block md:text-lg md:leading-relaxed">
              Special Deal Alert! For a limited time, Kanxi.co is offering an exclusive deal on our top-notch cleaning services.
            </p>

            <div className="mt-4 sm:mt-8">
              <a
                href="/deal"
                className="inline-block rounded-full bg-indigo-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-indigo-700 focus:outline-none focus:ring focus:ring-yellow-400"
              >
                Book Today
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="overflow-hidden bg-gray-50 sm:grid sm:grid-cols-2">
        <div className="p-8 md:p-12 lg:px-16 lg:py-24">
          <div className="mx-auto max-w-xl text-center sm:text-left">
            <h2 className="text-2xl font-bold text-gray-900 md:text-3xl">
              Welcome to Kanxi.co!
            </h2>

            <p className="hidden text-gray-500 md:mt-4 md:block">
              At Kanxi.co, we believe that a clean space is a happy space. 
              Founded with a commitment to excellence, our mission is to provide top-notch cleaning services that exceed your expectations.
            </p>

            <div className="mt-4 md:mt-8">
              <a
                href="/login"
                className="inline-block rounded bg-emerald-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-emerald-700 focus:outline-none focus:ring focus:ring-yellow-400"
              >
                Get Started Today
              </a>
            </div>
          </div>
        </div>

        <img
          alt="About Us"
          src="/About1.jpg"
          className="h-56 w-full object-cover sm:h-full"
        />
      </section>
    </>
  );
};

export default About;

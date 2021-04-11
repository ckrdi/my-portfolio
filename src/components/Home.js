// import image from "../nile-river.jpg";

import { Link } from "react-router-dom";

const Home = () => {
  return (
    <main className="max-h-screen bg-gray-900">
      {/* <img
        src={image}
        alt="Nile river seen from space"
        className="absolute object-cover w-full h-full"
      /> */}
      <section className="container mx-auto cursive min-h-screen pt-24 md:pt-48 lg:pt-64 px-8">
        <h1 className="text-gray-100 pb-1 text-xl md:text-3xl lg:text-5xl">
          Hello there. My name is Cokorda. I love to solve problems and create
          innovative web applications.
        </h1>
        <Link to="/project">
          <span className="text-yellow-300 font-bold mb-12 text-xl md:text-3xl lg:text-5xl hover:underline">
            Checkout my projects{" "}
            <span role="img" aria-label="right pointer">
              👉
            </span>
          </span>
        </Link>
      </section>
    </main>
  );
};

export default Home;

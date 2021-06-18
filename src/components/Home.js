import { Link } from "react-router-dom";

const Home = () => {
  return (
    <main className="bg-gradient-to-r from-green-300 to-blue-300 h-screen flex justify-center items-center">
      <section className="mx-auto my-0 max-w-screen-sm px-5">
        <h1 className="text-gray-100 text-xl">
          Hello there. My name is Cokorda. I love to solve problems and create
          innovative web applications.
        </h1>
        <Link to="/project">
          <span className="text-gray-900 font-bold text-xl hover:underline">
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

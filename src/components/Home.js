import image from "../nile-river.jpg";
const Home = () => {
  return (
    <main className="max-h-screen">
      <img
        src={image}
        alt="Nile river seen from space"
        className="absolute object-cover w-full h-full"
      />
      <section className="relative flex justify-center min-h-screen pt-24 md:pt-48 lg:pt-64 px-8">
        <h1 className="text-gray-100 cursive text-xl md:text-3xl lg:text-5xl">
          Hello there. My name is Cokorda. I love to solve problems and create
          innovative web applications.
        </h1>
      </section>
    </main>
  );
};

export default Home;

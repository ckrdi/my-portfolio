import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import sanityClient from "../client.js";

const Project = () => {
  const [projectData, setProjectData] = useState(null);
  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "project"]{
      title,
      slug,
      description,
    }`
      )
      .then((data) => setProjectData(data))
      .catch((err) => console.log(err));
  }, []);
  return (
    <main className="bg-gray-100 min-h-screen p-12 cursive">
      <section className="container mx-auto text-center">
        <h1 className="text-xl flex justify-center">My Projects</h1>
        <h5 className="text-lg text-gray-500 flex justify-center pb-2">
          Only my recents projects are displayed below. You can visit my github
          to view all the projects I did.
        </h5>
        <a href="https://github.com/ckrdi">
          <span className="rounded-lg shadow-md text-gray-100 bg-gray-900 py-1 px-2 font-bold hover:underline hover:text-yellow-300 mb-12">
            Visit the github{" "}
            <span role="img" aria-label="right pointer">
              👉
            </span>
          </span>
        </a>
        <section className="grid text-left gap-8 mt-12 sm:grid-cols-2 lg:grid-cols-3">
          {projectData ? (
            projectData.map((project) => (
              <Link
                to={"/project/" + project.slug.current}
                key={project.slug.current}
              >
                <article className="relative rounded-lg shadow-xl bg-white p-5 md:p-10 lg:p-15">
                  <h3 className="text-gray-700 text-xl font-bold mb-2 hover:text-gray-900">
                    {project.title}
                  </h3>
                  <div className="text-gray-500 text-xs space-x-4">
                    <p className="my-6 text-lg text-gray-600">
                      {project.description}
                    </p>
                    <span className=" text-base rounded-lg shadow-md text-gray-100 bg-gray-900 py-1 px-2 font-bold hover:underline hover:text-yellow-300">
                      View the project{" "}
                      <span role="img" aria-label="right pointer">
                        👉
                      </span>
                    </span>
                  </div>
                </article>
              </Link>
            ))
          ) : (
            <h5 className="text-lg text-gray-500">LOADING...</h5>
          )}
        </section>
      </section>
    </main>
  );
};

export default Project;

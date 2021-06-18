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
      "imageUrl": image.asset->url
    }`
      )
      .then((data) => {
        return setProjectData(data);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <main className="bg-gradient-to-r from-green-300 to-blue-300 min-h-screen p-12 pt-36">
      <section className="mx-auto text-center">
        <h1 className="text-xl">My Projects</h1>

        <p className="text-lg text-gray-500 pt-2 pb-4">
          Only my recents projects are displayed below. You can{" "}
          <a href="https://github.com/ckrdi" target="_blank" rel="noreferrer">
            <span className="font-bold underline hover:text-gray-900">
              visit my github
            </span>
          </a>{" "}
          to view all the projects I did.
        </p>

        <section className="grid text-left gap-8 mt-12 sm:grid-cols-2 lg:grid-cols-3">
          {projectData ? (
            projectData.map((project) => (
              <Link
                to={"/project/" + project.slug.current}
                key={project.slug.current}
              >
                <article className="rounded-lg bg-white">
                  <div
                    className="project-image rounded-t-lg"
                    style={{ backgroundImage: `url(${project.imageUrl})` }}
                  ></div>
                  <div className="p-5 md:p-10 lg:p-15">
                    <h3 className="text-gray-700 text-xl font-bold mb-2 hover:text-gray-900">
                      {project.title}
                    </h3>
                    <div className="text-gray-500 text-xs space-x-4">
                      <p className="my-6 text-lg text-gray-600">
                        {project.description}
                      </p>
                      <span className="text-base rounded-lg text-gray-100 bg-gray-900 py-1 px-2 font-bold hover:underline hover:text-yellow-300">
                        View the project{" "}
                        <span role="img" aria-label="right pointer">
                          👉
                        </span>
                      </span>
                    </div>
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

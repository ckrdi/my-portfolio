import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import sanityClient from "../client.js";
import BlockContent from "@sanity/block-content-to-react";
import "./SingleProject.css";

const SingleProject = () => {
  const [singleProject, setSingleProject] = useState(null);
  const { slug } = useParams();
  useEffect(() => {
    sanityClient
      .fetch(
        `*[slug.current == "${slug}"]{
      title,
      linkDemoApp,
      linkGithub,
      tags,
      body
    }`
      )
      .then((data) => setSingleProject(data))
      .catch((err) => console.log(err));
  }, [slug]);
  if (!singleProject) {
    return <h1>LOADING...</h1>;
  } else {
    return (
      <main className="bg-gray-100 min-h-screen p-5 cursive">
        <article className="container mx-auto relative rounded-lg shadow-xl bg-white p-5 md:p-10 lg:p-15 max-w-3xl">
          <h1 className="text-xl pb-3">{singleProject[0].title}</h1>
          <p className="pb-3 border-btm">
            {singleProject[0].tags.map((tag, i) => (
              <span
                key={i}
                className="rounded-lg shadow-md bg-gray-100 px-1 m-1"
              >
                {tag}
              </span>
            ))}
          </p>
          <p className="flex justify-center gap-3 pt-3 pb-10">
            {singleProject[0].linkDemoApp && (
              <a href={singleProject[0].linkDemoApp}>
                <button className="rounded-lg shadow-md text-gray-100 bg-gray-900 py-1 px-2 font-bold hover:underline hover:text-yellow-300">
                  Demo App{" "}
                  <span role="img" aria-label="right pointer">
                    👉
                  </span>
                </button>
              </a>
            )}
            {singleProject[0].linkGithub && (
              <a href={singleProject[0].linkGithub}>
                <button className="rounded-lg shadow-md text-gray-100 bg-gray-900 py-1 px-2 font-bold hover:underline hover:text-yellow-300">
                  Github Repo{" "}
                  <span role="img" aria-label="right pointer">
                    👉
                  </span>
                </button>
              </a>
            )}
          </p>
          <div>
            <BlockContent
              blocks={singleProject[0].body}
              projectId="cjvvr3l0"
              dataset="production"
            />
          </div>
        </article>
      </main>
    );
  }
};

export default SingleProject;

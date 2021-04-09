import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import sanityClient from "../client.js";
import BlockContent from "@sanity/block-content-to-react";

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
    console.log(singleProject);
    return (
      <main className="bg-gray-100 min-h-screen p-5 cursive">
        <article className="relative rounded-lg shadow-xl bg-white p-5 md:p-10 lg:p-15">
          <h1 className="text-xl flex justify-center pb-3 md:text-3xl lg:text-5xl">
            {singleProject[0].title}
          </h1>
          <p className="flex justify-center pb-10">
            {singleProject[0].tags.map((tag, i) => (
              <span
                key={i}
                className="text-lg rounded-lg shadow-md bg-gray-100 px-1 m-1"
              >
                {tag}
              </span>
            ))}
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

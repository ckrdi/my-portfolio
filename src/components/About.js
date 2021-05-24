import { useState, useEffect } from "react";
import sanityClient from "../client.js";

const About = () => {
  const [pdfDocument, setPdfDocument] = useState(null);
  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "pdfDocument"]{
      pdfFile{
        asset->{
          url
        }
      }
    }`
      )
      .then((data) => {
        const pdfUrl = data[0].pdfFile.asset.url;
        setPdfDocument(pdfUrl);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <main className="bg-gray-100 min-h-screen p-5 cursive">
      <article className="container mx-auto relative text-center rounded-lg shadow-xl bg-white p-5 md:p-10 lg:p-15 max-w-3xl">
        <h1 className="text-left text-xl pb-3">About Me</h1>
        <p className="text-left pb-10">
          Self-taught Programmer who loves to build web apps.
        </p>
        <p className="text-left pb-10">
          Hello there. My name is Cokorda Agung Yudhana, I live in Lombok, ID. I
          am a self-taught web developer who has a dream of having a career in
          Web Development.
        </p>
        {pdfDocument && (
          <a href={pdfDocument} target="_blank" rel="noreferrer">
            <span className="rounded-lg shadow-md text-gray-100 bg-gray-900 py-1 px-2 font-bold hover:underline hover:text-yellow-300 mb-12">
              Download my resume{" "}
              <span role="img" aria-label="right pointer">
                👉
              </span>
            </span>
          </a>
        )}
      </article>
    </main>
  );
};

export default About;

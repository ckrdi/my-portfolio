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
    <main className="bg-gradient-to-r from-green-300 to-blue-300 h-screen flex justify-center items-center">
      <article className="about mx-5 md:mx-auto mt-16 md:my-0 max-w-screen-md rounded-lg bg-white">
        <div className="main-image rounded-t-lg md:rounded-l-lg md:rounded-r-none"></div>
        <div className="main-article p-5 md:p-10 lg:p-15">
          <h1 className="text-xl pb-3">About Me</h1>
          <p className="pb-8">
            Self-taught Programmer who loves to build web apps.
          </p>
          <p className="pb-10">
            Hello there. My name is Cokorda Agung Yudhana, I live in Lombok, ID.
            I am a self-taught web developer who has a dream of making a career
            in Web Development.
          </p>
          {pdfDocument && (
            <a href={pdfDocument} target="_blank" rel="noopener noreferrer">
              <span className="rounded-lg text-gray-100 bg-gray-900 py-1 px-2 font-bold hover:underline hover:text-yellow-300 mb-12">
                Download my resume{" "}
                <span role="img" aria-label="right pointer">
                  👉
                </span>
              </span>
            </a>
          )}
        </div>
      </article>
    </main>
  );
};

export default About;

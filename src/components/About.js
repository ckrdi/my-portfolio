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
          Self-taught Programmer who loves to build web apps
        </p>
        <p className="text-left pb-10">
          Hello there. My name is Cokorda Agung Yudhana, I live in Lombok, ID.
          The first time I found programming was in 2016 when I was starting
          blogging. I thought it would be cool to have a website of your own.
          Then I stumbled upon programming languages, people who have a career
          in programming, and how they build something so awesome. I want to be
          cool like them. In 2019 I finally decided that I wanted to make a
          career in web development so I started learning some programming
          language. The first language I learned was Python, but in the end, I
          learn Javascript language and now I know how to build web apps using
          React and other Javascript libraries.
        </p>
        {pdfDocument && (
          <a href={pdfDocument} target="blank">
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

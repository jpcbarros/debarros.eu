import React from "react";
import Image from "next/image";

const SOCIAL_LINKS = [
  {
    href: "https://www.linkedin.com/in/jpcbarros/",
    icon: "linkedin",
    title: "Connect on LinkedIn",
  },
  {
    href: "https://github.com/jpcbarros",
    icon: "github",
    title: "See my projects on GitHub",
  },
  {
    href: "mailto:joao@debarros.eu",
    icon: "at-sign",
    title: "Drop me an email",
  },
];

const TOOLS = [
  "Node.js",
  "React",
  "Typescript",
  "Next.js",
  "REST/GraphQL APIs",
  "AWS",
  "Databases",
  "Web Components",
  "Serverless",
  "Docker",
];

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col py-16 gap-24 md:gap-12">
      {/* Header */}
      <header className="container max-w-screen-xl mx-auto px-8">
        {/* Brand name */}
        <nav className="flex items-center justify-between">
          <a href="/" className="flex flex-row gap-1 items-center justify-start" title="Go home">
            <i data-feather="at-sign" />
            <span className="font-mono">jpcbarros</span>
          </a>
          {/* @todo allow switching light/dark themes */}
        </nav>
      </header>

      {/* Main */}
      <main className="container max-w-screen-lg mx-auto px-8">
        {/* Who am I */}
        <section className="text-center mb-16">
          {/* Avatar */}
          <div className="flex justify-center mb-12">
            <Image
              src="/avatar.png"
              alt="It's a me, João Pedro Barros!"
              className="rounded-full dark:grayscale"
              width={160}
              height={160}
              priority
            />
          </div>
          {/* Kinda hero */}
          <h6 className="font-semibold text-gray-900 dark:text-white text-4xl md:text-6xl leading-none mb-8">
            João Pedro Barros
          </h6>
          <p className="font-normal text-gray-600 dark:text-gray-400 text-lg md:text-xl">
            I&apos;m a product engineer passionate about turning complex challenges into simple, scalable solutions. For
            more than a decade, I&apos;ve been building products that bridge business goals with great user experience.
          </p>
          <p className="font-normal text-gray-600 dark:text-gray-400 text-lg md:text-xl mt-6">
            Now at{" "}
            <a href="https://www.epilot.cloud/en" className="text-epilot" target="_blank">
              epilot
            </a>
            , I help companies digitalize and streamline their processes to sell more and cultivate happier customers —
            all through our <span className="text-epilot">Energy X</span>RM platform.
          </p>
        </section>

        {/* Tools I've been working with */}
        <p className="text-center text-pretty leading-7 text-md md:text-lg text-gray-600 dark:text-gray-400">
          Although not that relevant, these are <span className="italic">some</span> of the tools and concepts I&apos;m
          most experienced with:
          <br className="hidden md:block" />
          {TOOLS.map((tool, index) => (
            <>
              {index === TOOLS.length - 1 ? " and " : index > 0 ? ", " : " "}
              <span
                key={`tool-${index}`}
                className="font-mono text-sm text-nowrap rounded-md py-1 px-1.5 bg-gray-800 dark:bg-gray-400 text-white dark:text-black"
              >
                {tool}
              </span>
            </>
          ))}{" "}
          .
        </p>
      </main>

      {/* Footer */}
      <footer className="container max-w-screen-xl mx-auto px-8">
        {/* Contact info */}
        <div className="flex items-center justify-center space-x-8 mb-8">
          {SOCIAL_LINKS.map(({ icon, href, title }) => (
            <a
              key={icon}
              href={href}
              title={title}
              className="p-5 flex items-center justify-center text-gray-500 hover:text-gray-900 dark:hover:text-gray-200 transition ease-in-out duration-300"
            >
              <i data-feather={icon} />
            </a>
          ))}
        </div>

        {/* Copyright and others */}
        <p className="text-center text-pretty font-normal font-mono text-gray-400 text-sm">
          &copy; {new Date().getFullYear()} &mdash; Built with{" "}
          <a
            href="https://ion.sst.dev/"
            className="text-gray-600 dark:text-gray-200 hover:text-purple-600"
            target="_blank"
          >
            Ion
          </a>
          ,{" "}
          <a
            href="https://nextjs.org/"
            className="text-gray-600 dark:text-gray-200 hover:text-purple-600"
            target="_blank"
          >
            Next.js
          </a>{" "}
          and{" "}
          <a
            href="https://tailwindcss.com/"
            className="text-gray-600 dark:text-gray-200 hover:text-purple-600"
            target="_blank"
          >
            Tailwind CSS
          </a>
          . See the code in{" "}
          <a
            href="https://github.com/jpcbarros/debarros.eu"
            className="text-gray-600 dark:text-gray-200 hover:text-purple-600"
            target="_blank"
          >
            Github
          </a>
          .
        </p>
      </footer>
    </div>
  );
}

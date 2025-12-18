"use client";

import { useState } from "react";
import Image from "next/image";

export default function Home() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("munalexgar@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const experiences = [
    {
      title: "Chief Technology Officer",
      company: "SOL AI (formerly Brainzee)",
      period: "Oct 2025 - Present",
      location: "Remote",
      achievements: [
        "Led full-stack development of MVPs, including DeLong safety management, Brainzee, and Poobel dispatch/driver/customer system",
        "Lead architecture decision-making and assign development tasks",
        "Pitched and demonstrated two MVPs to Union County College and DeLong",
      ],
    },
    {
      title: "AI Engineer",
      company: "Outlier",
      period: "Dec 2024 - Present",
      location: "Remote",
      achievements: [
        "Evaluate and debug complex code snippets in TypeScript, JavaScript, and Python",
        "Analyze AI outputs, identifying, correcting, and documenting unsafe/unhelpful/false responses",
        "Review other engineers' work, ensuring it adheres to project guidelines",
        "Develop boilerplate code for developing a website according to project specifications",
      ],
    },
    {
      title: "AI Engineer",
      company: "DataAnnotation",
      period: "Feb 2020 - Feb 2025",
      location: "Remote",
      achievements: [
        "Verified the accuracy of complex Calculus derivations and step-by-step solutions, ensuring correct mathematical logic and LaTeX formatting",
        "Evaluated Spanish model responses to ensure grammatical accuracy and correct syntax",
      ],
    },
  ];

  interface Project {
    title: string;
    description: string;
    tech: string[];
    url?: string;
    links?: { text: string; url: string }[];
    featured: boolean;
    highlights?: string[];
  }

  const projects: Project[] = [
    {
      title: "Poobel - Waste Collection Management System",
      description:
        "A comprehensive waste collection management system featuring a monorepo architecture with Next.js web dashboards and React Native (Expo) mobile apps.",
      tech: [
        "React Native",
        "Expo",
        "Next.js",
        "Turborepo",
        "Zustand",
        "TypeScript",
      ],
      links: [
        {
          text: "Dispatch Dashboard",
          url: "https://poobel-web-dispatch.vercel.app/",
        },
        {
          text: "Customer Portal",
          url: "https://poobel-web-customer.vercel.app/",
        },
        { text: "GitHub", url: "https://github.com/munalgar/poobel" },
      ],
      featured: true,
      highlights: [
        "Developed cross-platform mobile applications using React Native with Expo",
        "Managed a complex monorepo architecture using Turborepo for efficient build and code sharing",
        "Implemented shared state management across web and mobile apps using Zustand",
        "Designed a cohesive design system and UI/UX for both web and mobile platforms",
        "Simulated real-time features like fleet tracking and notifications",
      ],
    },
    {
      title: "DeLong Safety Management",
      description:
        "Safety management platform featuring incident tracking, AI-powered root-cause analysis, interactive training modules, and a chat interface",
      tech: ["Next.js", "TypeScript", "Python", "AI"],
      url: "https://github.com/munalgar/delong",
      featured: false,
    },
    {
      title: "imgtopdf",
      description:
        "Efficient image to PDF conversion tool with batch processing capabilities",
      tech: ["TypeScript", "Node.js"],
      url: "https://github.com/munalgar/imgtopdf",
      featured: false,
    },
    {
      title: "scribe",
      description:
        "Advanced text processing and transcription application with NLP capabilities",
      tech: ["Python", "NLP"],
      url: "https://github.com/munalgar/scribe",
      featured: false,
    },
    {
      title: "macro-calc",
      description:
        "Personalized macronutrient calculator helping users achieve their health and fitness goals",
      tech: ["JavaScript", "React"],
      url: "https://github.com/munalgar/macro-calc",
      featured: false,
    },
  ];

  const skills = [
    { name: "Python", category: "Language", level: "Advanced" },
    { name: "TypeScript", category: "Language", level: "Advanced" },
    { name: "JavaScript", category: "Language", level: "Advanced" },
    { name: "Java", category: "Language", level: "Beginner" },
    { name: "Kotlin", category: "Language", level: "Beginner" },
    { name: "Swift", category: "Language", level: "Beginner" },
    { name: "React", category: "Framework", level: "Advanced" },
    { name: "React Native", category: "Framework", level: "Intermediate" },
    { name: "Next.js", category: "Framework", level: "Advanced" },
    { name: "Expo", category: "Framework", level: "Intermediate" },
    { name: "Electron", category: "Framework", level: "Intermediate" },
    { name: "Node.js", category: "Runtime", level: "Advanced" },
    { name: "Zustand", category: "Library", level: "Intermediate" },
    { name: "Tailwind CSS", category: "Library", level: "Advanced" },
    { name: "AWS", category: "Cloud", level: "Intermediate" },
    { name: "PostgreSQL", category: "Database", level: "Intermediate" },
    { name: "Docker", category: "DevOps", level: "Intermediate" },
    { name: "Turborepo", category: "DevOps", level: "Intermediate" },
  ];

  const education = {
    degree: "Associate of Science in Computer Science",
    school: "Union County College",
    location: "Cranford, NJ",
    period: "Sep 2022 - Jan 2026",
    specialization: "Specialization in Artificial Intelligence",
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-zinc-50 via-white to-zinc-50 dark:from-zinc-950 dark:via-black dark:to-zinc-950">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        <div className="relative mx-auto max-w-6xl px-6 py-32 md:px-12 md:py-48">
          <div className="flex flex-col items-start gap-8">
            <div className="inline-flex items-center gap-3 rounded-full border border-zinc-200 bg-white px-4 py-2 shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
              <div className="h-2 w-2 animate-pulse rounded-full bg-emerald-500"></div>
              <span className="text-sm font-medium text-zinc-700 dark:text-zinc-300">
                Available for work
              </span>
            </div>

            <h1 className="text-6xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 md:text-7xl lg:text-8xl">
              Hi, I'm{" "}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Alejandro Muñoz
              </span>
            </h1>

            <p className="max-w-2xl text-xl leading-relaxed text-zinc-600 dark:text-zinc-400 md:text-2xl">
              Chief Technology Officer and AI Engineer specializing in
              full-stack development, AI systems, and team leadership.
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="https://github.com/munalgar"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2 rounded-full bg-zinc-900 px-6 py-3 font-medium text-white transition-all hover:bg-zinc-800 hover:shadow-lg dark:bg-zinc-50 dark:text-zinc-900 dark:hover:bg-zinc-200"
              >
                <svg
                  className="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    fillRule="evenodd"
                    d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                    clipRule="evenodd"
                  />
                </svg>
                View GitHub
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section
        id="experience"
        className="relative mx-auto max-w-6xl px-6 py-24 md:px-12"
      >
        <div className="mb-16">
          <h2 className="mb-4 text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 md:text-5xl">
            Professional Experience
          </h2>
        </div>

        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="group relative rounded-2xl border border-zinc-200 bg-white p-8 shadow-sm transition-all hover:border-zinc-300 hover:shadow-lg dark:border-zinc-800 dark:bg-zinc-900 dark:hover:border-zinc-700"
            >
              <div className="mb-6 flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
                <div>
                  <h3 className="text-2xl font-bold text-zinc-900 dark:text-zinc-50">
                    {exp.title}
                  </h3>
                  <p className="text-lg font-semibold text-blue-600 dark:text-blue-400">
                    {exp.company}
                  </p>
                </div>
                <div className="text-sm text-zinc-600 dark:text-zinc-400 md:text-right">
                  <p className="font-medium">{exp.period}</p>
                  <p>{exp.location}</p>
                </div>
              </div>

              <ul className="space-y-3">
                {exp.achievements.map((achievement, i) => (
                  <li
                    key={i}
                    className="flex gap-3 text-zinc-600 dark:text-zinc-400"
                  >
                    <svg
                      className="mt-1 h-5 w-5 flex-shrink-0 text-blue-600 dark:text-blue-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <span>{achievement}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Education Section */}
      <section
        id="education"
        className="relative mx-auto max-w-6xl px-6 py-24 md:px-12"
      >
        <div className="mb-16">
          <h2 className="mb-4 text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 md:text-5xl">
            Education
          </h2>
        </div>

        <div className="group relative rounded-2xl border border-zinc-200 bg-white p-8 shadow-sm transition-all hover:border-zinc-300 hover:shadow-lg dark:border-zinc-800 dark:bg-zinc-900 dark:hover:border-zinc-700">
          <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-gradient-to-br from-blue-500/10 to-purple-500/10 blur-3xl"></div>

          <div className="relative">
            <div className="mb-6 flex flex-col gap-2 md:flex-row md:items-start md:justify-between">
              <div>
                <h3 className="mb-2 text-2xl font-bold text-zinc-900 dark:text-zinc-50">
                  {education.degree}
                </h3>
                <p className="text-lg font-semibold text-blue-600 dark:text-blue-400">
                  {education.school}
                </p>
                <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
                  {education.location}
                </p>
              </div>
              <div className="text-sm text-zinc-600 dark:text-zinc-400 md:text-right">
                <p className="font-medium">{education.period}</p>
              </div>
            </div>

            <div className="rounded-xl bg-gradient-to-r from-blue-50 to-purple-50 p-4 dark:from-blue-950/50 dark:to-purple-950/50">
              <p className="text-sm font-semibold text-zinc-700 dark:text-zinc-300">
                {education.specialization}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section
        id="projects"
        className="relative mx-auto max-w-6xl px-6 py-24 md:px-12"
      >
        <div className="mb-16">
          <h2 className="mb-4 text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 md:text-5xl">
            Projects
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((project) => (
            <div
              key={project.title}
              className={`group relative overflow-hidden rounded-2xl border p-8 shadow-sm transition-all hover:shadow-xl ${
                project.featured
                  ? "border-blue-200 bg-gradient-to-br from-blue-50 to-purple-50 dark:border-blue-900 dark:from-blue-950 dark:to-purple-950 md:col-span-2"
                  : "border-zinc-200 bg-white hover:border-zinc-300 dark:border-zinc-800 dark:bg-zinc-900 dark:hover:border-zinc-700"
              }`}
            >
              <div
                className={`absolute -right-12 -top-12 h-32 w-32 rounded-full blur-2xl transition-transform group-hover:scale-150 ${
                  project.featured
                    ? "bg-gradient-to-br from-blue-500/20 to-purple-500/20"
                    : "bg-gradient-to-br from-blue-500/10 to-purple-500/10"
                }`}
              ></div>

              <div className="relative">
                {project.featured && (
                  <span className="mb-3 inline-block rounded-full bg-blue-600 px-3 py-1 text-xs font-semibold text-white dark:bg-blue-500">
                    Featured
                  </span>
                )}
                <h3 className="mb-3 text-2xl font-bold text-zinc-900 dark:text-zinc-50">
                  {project.title}
                </h3>
                <p className="mb-6 text-zinc-600 dark:text-zinc-400">
                  {project.description}
                </p>

                {project.highlights && (
                  <ul className="mb-6 space-y-2">
                    {project.highlights.map((highlight, i) => (
                      <li
                        key={i}
                        className="flex gap-2 text-sm text-zinc-600 dark:text-zinc-400"
                      >
                        <span className="text-blue-500">•</span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                )}

                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full bg-zinc-100 px-3 py-1 text-sm font-medium text-zinc-700 dark:bg-zinc-800 dark:text-zinc-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="mt-6 flex flex-wrap gap-4">
                  {project.links ? (
                    project.links.map((link) => (
                      <a
                        key={link.text}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center text-sm font-medium text-zinc-900 hover:text-blue-600 dark:text-zinc-50 dark:hover:text-blue-400"
                      >
                        {link.text}
                        <svg
                          className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 5l7 7-7 7"
                          />
                        </svg>
                      </a>
                    ))
                  ) : (
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-sm font-medium text-zinc-900 hover:text-blue-600 dark:text-zinc-50 dark:hover:text-blue-400"
                    >
                      View project
                      <svg
                        className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Skills Section */}
      <section
        id="skills"
        className="relative mx-auto max-w-6xl px-6 py-24 md:px-12"
      >
        <div className="mb-16">
          <h2 className="mb-4 text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 md:text-5xl">
            Skills & Technologies
          </h2>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {skills.map((skill) => (
            <div
              key={skill.name}
              className="group relative overflow-hidden rounded-xl border border-zinc-200 bg-white p-6 shadow-sm transition-all hover:border-zinc-300 hover:shadow-lg dark:border-zinc-800 dark:bg-zinc-900 dark:hover:border-zinc-700"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 transition-opacity group-hover:opacity-100"></div>
              <div className="relative">
                <div className="mb-2 flex items-center justify-between">
                  <span className="text-xs font-semibold uppercase tracking-wide text-zinc-500 dark:text-zinc-500">
                    {skill.category}
                  </span>
                  <span
                    className={`text-xs font-semibold ${
                      skill.level === "Advanced"
                        ? "text-green-600 dark:text-green-400"
                        : skill.level === "Intermediate"
                        ? "text-blue-600 dark:text-blue-400"
                        : "text-orange-600 dark:text-orange-400"
                    }`}
                  >
                    {skill.level}
                  </span>
                </div>
                <div className="text-lg font-bold text-zinc-900 dark:text-zinc-50">
                  {skill.name}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="relative mx-auto max-w-6xl px-6 py-24 md:px-12"
      >
        <div className="rounded-3xl border border-zinc-200 bg-gradient-to-br from-white to-zinc-50 p-12 shadow-xl dark:border-zinc-800 dark:from-zinc-900 dark:to-zinc-950 md:p-16">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="mb-6 text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 md:text-5xl">
              Let's work together
            </h2>
            <p className="mb-10 text-lg text-zinc-600 dark:text-zinc-400">
              I'm always interested in hearing about new projects and
              opportunities. Feel free to reach out!
            </p>

            <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <button
                onClick={handleCopyEmail}
                className="flex w-full items-center justify-center gap-2 rounded-full bg-zinc-900 px-8 py-4 font-medium text-white transition-all hover:bg-zinc-800 hover:shadow-lg dark:bg-zinc-50 dark:text-zinc-900 dark:hover:bg-zinc-200 sm:w-auto"
              >
                {copied ? (
                  <>
                    <svg
                      className="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    Copied!
                  </>
                ) : (
                  <>
                    <svg
                      className="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                    Email Me
                  </>
                )}
              </button>
              <a
                href="https://github.com/munalgar"
                target="_blank"
                rel="noopener noreferrer"
                className="flex w-full items-center justify-center gap-2 rounded-full border border-zinc-300 bg-white px-8 py-4 font-medium text-zinc-900 transition-all hover:border-zinc-400 hover:shadow-lg dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-50 dark:hover:border-zinc-600 sm:w-auto"
              >
                <svg
                  className="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    fillRule="evenodd"
                    d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                    clipRule="evenodd"
                  />
                </svg>
                GitHub
              </a>
              <a
                href="https://linkedin.com/in/munalgar"
                target="_blank"
                rel="noopener noreferrer"
                className="flex w-full items-center justify-center gap-2 rounded-full border border-zinc-300 bg-white px-8 py-4 font-medium text-zinc-900 transition-all hover:border-zinc-400 hover:shadow-lg dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-50 dark:hover:border-zinc-600 sm:w-auto"
              >
                <svg
                  className="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z" />
                </svg>
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-zinc-200 dark:border-zinc-800">
        <div className="mx-auto max-w-6xl px-6 py-12 md:px-12">
          <div className="flex flex-col items-center gap-6">
            <div className="flex flex-col items-center gap-2"></div>
            <div className="flex gap-6">
              <a
                href="https://github.com/munalgar"
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-600 transition-colors hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-50"
                aria-label="GitHub"
              >
                <svg
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    fillRule="evenodd"
                    d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
              <a
                href="https://linkedin.com/in/munalgar"
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-600 transition-colors hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-50"
                aria-label="LinkedIn"
              >
                <svg
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z" />
                </svg>
              </a>
            </div>
            <p className="text-sm text-zinc-600 dark:text-zinc-400 text-center mt-4">
              © {new Date().getFullYear()} Alejandro Muñoz
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

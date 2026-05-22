import waterImg from "./img/water.jpeg";
import cyberImg from "./img/cyber foundations.png";
import fasoImg from "./img/faso bara.jpeg";
import trustImg from "./img/trust market.jpeg";
import healthImg from "./img/health.jpeg";
import quizImg from "./assets/python quizz game.jpeg";
import webImg from "./img/web projet.jpeg";
import meImg from "./img/me.jpeg";
import dartCert from "./certif/dart_flutter_certif.pdf";
import pythonCert from "./certif/python_certif.pdf";

export default function Portfolio() {
  const imageMap = {
    "water.jpeg": waterImg,
    "cyber foundations.png": cyberImg,
    "faso bara.jpeg": fasoImg,
    "trust market.jpeg": trustImg,
    "health.jpeg": healthImg,
    "python quizz game.jpeg": quizImg,
    "web projet.jpeg": webImg,
    "me.jpeg": meImg,
  };

  const skills = [
    "Python",
    "C",
    "HTML/CSS",
    "Linux / Ubuntu",
    "Cybersecurity",
    "Git & GitHub",
    "JSON",
    "Flutter & Dart",
  ];

  const projects = [
    {
      title: "Waterpoint Monitoring",
      description:
        "Complete digital platform for monitoring and maintaining water infrastructures in Burkina Faso with geolocation, intervention tracking and analytics dashboard.",
      tech: "NestJS • MongoDB • React • Flutter • Tailwind",
      image: imageMap["water.jpeg"],
    },
    {
      title: "Cyber Foundations",
      description:
        "Personal cybersecurity learning repository documenting networking, Linux, web security and hands-on labs through continuous practical exercises and technical write-ups.",
      tech: "Linux • Networking • Cybersecurity • TryHackMe",
      image: imageMap["cyber foundations.png"],
    },
    {
      title: "Fasobara",
      description:
        "Full-stack mobile platform built with NestJS and Flutter featuring authentication, user management and job publication system.",
      tech: "NestJS • Flutter • JWT • REST API",
      image: imageMap["faso bara.jpeg"],
    },
    {
      title: "TrustMarket",
      description:
        "Multi-services marketplace platform with secure transactions, mobile payments, order tracking, QR systems and real-time notifications.",
      tech: "NestJS • PostgreSQL • Prisma • Flutter • Redis",
      image: imageMap["trust market.jpeg"],
    },
    {
      title: "Digital Health Record System",
      description:
        "Desktop application in Python with JSON database for managing patients, doctors, appointments and medical history.",
      tech: "Python • JSON • GUI",
      image: imageMap["health.jpeg"],
    },
    {
      title: "Quiz Game",
      description:
        "Local multiplayer quiz game built with PyGame including levels, timer, sounds and progression system.",
      tech: "Python • JSON",
      image: imageMap["python quizz game.jpeg"],
    },
    {
      title: "Team Web Project",
      description:
        "Responsive team presentation website with custom profile styling and modern layout.",
      tech: "HTML • CSS",
      image: imageMap["web projet.jpeg"],
    },
  ];

  const certifications = [
    {
      name: "Dart & Flutter Certification",
      issuer: "Udemy",
      year: "2026",
      link: dartCert,
    },
    {
      name: "Python Certification",
      issuer: "Coddy",
      year: "2026",
      link: pythonCert,
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white px-6 py-10 font-sans">
      <div className="max-w-6xl mx-auto">
        <header className="flex flex-col md:flex-row md:items-center md:justify-between gap-8 mb-16">
          <div>
            <p className="text-orange-400 uppercase tracking-[0.3em] text-sm mb-3">
              Computer Science Student
            </p>

            <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-4">
              Nongdo Jonathan <br /> OUEDRAOGO
            </h1>

            <p className="text-gray-300 text-lg max-w-2xl leading-relaxed">
              Computer science student passionate about mobile development, frontend development and cybersecurity. Currently building strong foundations in programming, user interface design and modern technologies with the goal of becoming a cybersecurity engineer.
            </p>

            <div className="flex gap-4 mt-8 flex-wrap">
              <a
                href="#projects"
                className="bg-orange-500 hover:bg-orange-400 transition px-6 py-3 rounded-2xl font-semibold"
              >
                View Projects
              </a>

              <a
                href="https://github.com/jonathan-onjd"
                className="border border-gray-700 hover:border-orange-400 transition px-6 py-3 rounded-2xl font-semibold"
              >
                GitHub
              </a>
            </div>
          </div>

          <div className="w-64 h-64 rounded-3xl bg-gradient-to-br from-orange-500 to-orange-700 flex items-center justify-center text-6xl font-bold shadow-2xl overflow-hidden">
            <img src={imageMap["me.jpeg"]} alt="me" className="w-full h-full object-cover rounded-3xl" />
          </div>
        </header>

        <section className="mb-16">
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-zinc-900 p-6 rounded-3xl border border-zinc-800">
              <h2 className="text-xl font-bold mb-3">Career Goal</h2>
              <p className="text-gray-400 leading-relaxed">
                Become a cybersecurity engineer and later create a security
                company focused on offensive security and digital protection.
              </p>
            </div>

            <div className="bg-zinc-900 p-6 rounded-3xl border border-zinc-800">
              <h2 className="text-xl font-bold mb-3">Focus Areas</h2>
              <p className="text-gray-400 leading-relaxed">
                Mobile development, Development technologies, Linux systems, cybersecurity fundamentals and UI/UX oriented development.
              </p>
            </div>

            <div className="bg-zinc-900 p-6 rounded-3xl border border-zinc-800">
              <h2 className="text-xl font-bold mb-3">Currently Learning</h2>
              <p className="text-gray-400 leading-relaxed">
                Frontend technologies, mobile development, C programming, English improvement and cybersecurity fundamentals.
              </p>
            </div>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8">Skills</h2>

          <div className="flex flex-wrap gap-4">
            {skills.map((skill) => (
              <span
                key={skill}
                className="bg-zinc-900 border border-zinc-800 px-5 py-3 rounded-2xl text-gray-200"
              >
                {skill}
              </span>
            ))}
          </div>
        </section>

        <section className="mb-16">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold">Certifications</h2>
            <p className="text-gray-500">Recent Achievements</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {certifications.map((cert) => (
              <a
                key={cert.name}
                href={cert.link}
                target="_blank"
                rel="noreferrer"
                className="bg-zinc-900 border border-zinc-800 rounded-3xl p-6 hover:border-orange-400 transition"
              >
                <h3 className="text-2xl font-semibold mb-2">{cert.name}</h3>
                <p className="text-gray-400 mb-1">{cert.issuer}</p>
                <p className="text-orange-400 font-medium">{cert.year}</p>
              </a>
            ))}
          </div>
        </section>

        <section id="projects" className="mb-16">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold">Projects</h2>
            <p className="text-gray-500">Selected Work</p>
          </div>

          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
            {projects.map((project) => (
              <div
                key={project.title}
                className="bg-zinc-900 border border-zinc-800 rounded-3xl p-6 hover:border-orange-400 transition"
              >
                <div className="h-48 rounded-2xl overflow-hidden mb-6 border border-zinc-800">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover hover:scale-105 transition duration-500"
                  />
                </div>

                <h3 className="text-2xl font-semibold mb-3">
                  {project.title}
                </h3>

                <p className="text-gray-400 leading-relaxed mb-4">
                  {project.description}
                </p>

                <p className="text-orange-400 font-medium">{project.tech}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-16">
          <div className="bg-gradient-to-r from-orange-500 to-orange-700 rounded-3xl p-10 text-black">
            <h2 className="text-4xl font-bold mb-4">Let’s Work Together</h2>

            <p className="text-lg max-w-2xl mb-8">
              Open to internships, collaborations and opportunities in software
              engineering and cybersecurity.
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="mailto:jonathanouedraogo777@gmail.com"
                className="bg-black text-white px-6 py-3 rounded-2xl font-semibold"
              >
                Contact Me
              </a>

              <a
                href="https://www.linkedin.com/in/nongdo-jonathan-ouedraogo-b66557363/"
                className="border border-black px-6 py-3 rounded-2xl font-semibold"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

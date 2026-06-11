// import { useRef } from 'react'
// import { useThreeBackground } from './hooks/useThreeBackground'
import Content from './Content/Content';
import Menu from './Menu/Menu.tsx';

// const skills = [
//   'Rust', 'TypeScript', 'React', 'Node.js', 'Python',
//   'PostgreSQL', 'Docker', 'Git', 'Linux', 'Three.js',
// ]

// const projects = [
//   {
//     title: 'Project One',
//     description: 'A brief description of what this project does and the problems it solves.',
//     tags: ['Rust', 'WebAssembly'],
//     url: '#',
//   },
//   {
//     title: 'Project Two',
//     description: 'A brief description of what this project does and the problems it solves.',
//     tags: ['TypeScript', 'React'],
//     url: '#',
//   },
//   {
//     title: 'Project Three',
//     description: 'A brief description of what this project does and the problems it solves.',
//     tags: ['Python', 'PostgreSQL'],
//     url: '#',
//   },
// ]

export default function App() {
  // const bgRef = useRef<HTMLDivElement>(null)
  // useThreeBackground(bgRef)

  return (
    <div className="relative w-full min-h-screen text-slate-200">
      <Menu />
      <Content />
      {/* <footer className="py-8 text-center text-slate-500 text-sm border-t border-white/10">
        <p>Built with React, TypeScript, Tailwind &amp; Three.js</p>
      </footer> */}
    </div>
  )
}

// Hero
//       <section
//         id="about"
//         className="min-h-screen flex flex-col justify-center items-center text-center px-6 pt-20"
//       >
//         <p className="font-mono text-indigo-400 text-sm tracking-widest mb-4">Hi, I'm</p>
//         <h1 className="text-6xl md:text-8xl font-bold text-white tracking-tight mb-4">
//           Lucas Lemos
//         </h1>
//         <h2 className="text-2xl md:text-3xl font-light text-slate-400 mb-6">
//           Software Engineer
//         </h2>
//         <p className="max-w-xl text-slate-400 leading-relaxed mb-10">
//           I build robust, performant software — from systems-level Rust to interactive web
//           experiences. Passionate about clean architecture and great developer tooling.
//         </p>
//         <div className="flex gap-4 flex-wrap justify-center">
//           <a
//             href="#projects"
//             className="px-6 py-3 bg-indigo-600 hover:bg-indigo-500 text-white rounded-lg font-medium transition-colors"
//           >
//             View Work
//           </a>
//           <a
//             href="#contact"
//             className="px-6 py-3 border border-indigo-400/40 hover:border-indigo-400 text-slate-300 hover:text-white rounded-lg font-medium transition-colors"
//           >
//             Get in Touch
//           </a>
//         </div>
//         <div className="absolute bottom-10 animate-bounce text-slate-600">
//           <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
//             <path d="M12 5v14M5 12l7 7 7-7" />
//           </svg>
//         </div>
//       </section>

//       {/* Skills */}
//       <section id="skills" className="w-full py-24 px-6 min-h-screen justify-center justify-items-center">
//         <div className="max-w-4xl mx-auto justify-center">
//           <h3 className="text-xs font-mono text-indigo-400 tracking-widest mb-3 text-center">WHAT I WORK WITH</h3>
//           <h2 className="text-4xl font-bold text-white text-center mb-12">Skills</h2>
//           <div className="flex flex-wrap justify-center gap-3">
//             {skills.map((skill) => (
//               <span
//                 key={skill}
//                 className="px-4 py-2 rounded-full border border-indigo-400/30 bg-indigo-400/5 text-slate-300 text-sm hover:border-indigo-400/70 hover:bg-indigo-400/10 transition-colors"
//               >
//                 {skill}
//               </span>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Projects */}
//       <section id="projects" className="*:w-full py-24 px-6 mt-150 justify-items-center">
//         <div className="max-w-5xl mx-auto justify-center">
//           <h3 className="text-xs font-mono text-indigo-400 tracking-widest mb-3 text-center">WHAT I'VE BUILT</h3>
//           <h2 className="text-4xl font-bold text-white text-center mb-12">Projects</h2>
//           <div className="grid md:grid-cols-3 gap-6">
//             {projects.map((p) => (
//               <a
//                 key={p.title}
//                 href={p.url}
//                 className="group p-6 rounded-xl border border-white/10 bg-white/5 hover:border-indigo-400/50 hover:bg-white/8 transition-all backdrop-blur-sm"
//               >
//                 <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-indigo-300 transition-colors">
//                   {p.title}
//                 </h3>
//                 <p className="text-slate-400 text-sm leading-relaxed mb-4">{p.description}</p>
//                 <div className="flex flex-wrap gap-2">
//                   {p.tags.map((tag) => (
//                     <span key={tag} className="text-xs px-2 py-1 rounded bg-indigo-500/10 text-indigo-300">
//                       {tag}
//                     </span>
//                   ))}
//                 </div>
//               </a>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Contact */}
//       <section id="contact" className="py-24 px-6 mt-150 text-center justify-items-center">
//         <h3 className="text-xs font-mono text-indigo-400 tracking-widest mb-3">GET IN TOUCH</h3>
//         <h2 className="text-4xl font-bold text-white mb-6">Contact</h2>
//         <p className="text-slate-400 max-w-md mx-auto mb-8">
//           I'm open to new opportunities and interesting projects. Feel free to reach out.
//         </p>
//         <div className="flex gap-4 justify-center flex-wrap">
//           <a
//             href="mailto:stiltztinkerstein@gmail.com"
//             className="px-6 py-3 bg-indigo-600 hover:bg-indigo-500 text-white rounded-lg font-medium transition-colors"
//           >
//             Send Email
//           </a>
//           <a
//             href="https://github.com/"
//             target="_blank"
//             rel="noreferrer"
//             className="px-6 py-3 border border-white/20 hover:border-white/40 text-slate-300 hover:text-white rounded-lg font-medium transition-colors flex items-center gap-2"
//           >
//             <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
//               <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
//             </svg>
//             GitHub
//           </a>
//         </div>
//       </section>

//       {/* Footer */}
//       <footer className="py-8 text-center text-slate-600 text-sm border-t border-white/5">
//         <p>Built with React, TypeScript, Tailwind & Three.js</p>
//       </footer>
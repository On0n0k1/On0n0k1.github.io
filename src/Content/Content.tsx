import { CodingSkillsDefault } from "./codingSkills/CodingSkills";
import './content.css';

function Content() {
  return (
    <div className="scrollable-content">
      <main id="mainContent">
        <div className="content-header">
          <header>
            <h1>I am Lucas Lemos.</h1>
            <p>A Software Engineer that specializes in High performance systems.</p>
          </header>
        </div>

        <blockquote>
          <p>I like to find the most optimal and effective ways for machines to solve our problems.</p>
        </blockquote>

        <div id="content-contact-info" className="content-left">
          <section>
            <h2>Contact Info</h2>
            <ul className="list-circle">
              <li><b>Github:</b> <a target="_blank" href="https://github.com/On0n0k1">https://github.com/On0n0k1</a></li>
              <li><b>Linkedin:</b> <a target="_blank" href="https://www.linkedin.com/in/lucas-alessandro-do-carmo-lemos-18a091b2">https://www.linkedin.com/in/lucas-alessandro-do-carmo-lemos-18a091b2/</a></li>
              <li><b>Email:</b> lucas.lemos.kaihatsusha@gmail.com</li>
              <li><b>Phone:</b> (Message me so we can schedule a call)</li>
              <li><a href="/CV/Lucas_Lemos_CV.pdf" download className='download-cv'>Download CV</a></li>
              {/* <li><b>Exceptional Level Near Certified Developer:</b> <a target="_blank" href="https://airtable.com/shrijLwiPJp9wvhcw/tblz5izwaj0N12wBT">https://airtable.com/shrijLwiPJp9wvhcw/tblz5izwaj0N12wBT</a></li> */}
            </ul>
          </section>
        </div>

        <div id="content-about-me" className='content-right'>
          <section>
            <h2 id="headerAboutMe">About me</h2>
            <p>
              I'm a Software Engineer focused on backend development, distributed systems, and cloud infrastructure.
            </p>
            <p>
              Over the last four years, I've built high-throughput data pipelines, event-driven architectures, blockchain integrations, and low-latency services used in production environments. My experience spans AWS, Rust, Terraform, Docker, Kubernetes, PostgreSQL, DynamoDB, Kafka, and modern observability platforms.
            </p>
            <p>
              I enjoy solving performance and scalability challenges, designing resilient architectures, and building systems that remain maintainable as they grow.
            </p>
            <p>
              While Rust is my primary language, I regularly work across cloud infrastructure, databases, messaging systems, CI/CD pipelines, and distributed architectures.
            </p>
          </section>
        </div>

        <div className="content-left">
          <section>
            <h2>Language Skills</h2>
            <ul className="list-disc">
              <li><b>Brazilian Portuguese:</b> Native</li>
              <li><b>English:</b> Fluent</li>
              <li><b>Japanese:</b> Basic</li>
            </ul>
          </section>
        </div>

        <div id="content-work" className="content-middle">
          <section className="content-middle">
            <h2><b>Work History</b></h2>
          </section>
        </div>

        <div className="content-work" id="work">
          <section id="work-history" className="flex flex-col gap-20">
            <a className='resume-row'>
              <span className="resume-main">
                <strong className="resume-title">Senior Software Engineer</strong>
                <span className="resume-company">NDA Contract</span>
                <span className="resume-main">Full time contract working on trading systems deployed to Solana with real-time monitoring, observability systems</span>
              </span>
              <span className="resume-date">Jan 2026 - May 2026</span>
            </a>
          </section>
          <section id="work-history" className="flex flex-col gap-20">
            <a className='resume-row'>
              <span id='resume-logo' className='resume-logo'><img src="/deckers-logo.png"></img></span>
              <span className="resume-main">
                <strong className="resume-title">Software Engineer</strong>
                <span className="resume-company">Deckers Brands</span>
                <span className="resume-main">Implementing and deploying distributed systems in AWS using Rust and Terraform</span>
              </span>
              <span className="resume-date">Aug 2024 - Dec 2025</span>
            </a>
          </section>
          <section id="work-history" className="flex flex-col gap-20">
            <a className='resume-row'>
              <span id='resume-logo' className='resume-logo'><img src="/privid_logo.jpeg"></img></span>
              <span className="resume-main">
                <strong className="resume-title">Lead Developer</strong>
                <span className="resume-company">PrivID</span>
                <span className="resume-main">Implementing distributed services in the cloud. Integrating Cryptography systems and ZKP into production.</span>
              </span>
              <span className="resume-date">Jan 2023 - Jul 2024</span>
            </a>
          </section>
          <section id="work-history" className="flex flex-col gap-20">
            <a className='resume-row'>
              <span id='resume-logo' className='resume-logo'><img src="/near_foundation_logo.jpeg"></img></span>
              <span className="resume-main">
                <strong className="resume-title">Blockchain Developer</strong>
                <span className="resume-company">Near Foundation</span>
                <span className="resume-main">Implementing Smart Contracts and Backend in the NEAR Protocol. Coaching developers on web-3 development with Rust. Creating Tutorials for new developers.</span>
              </span>
              <span className="resume-date">Jan 2022 - Aug 2022</span>
            </a>
          </section>
          <section id="work-history" className="flex flex-col gap-20">
            <a className='resume-row'>
              <span className="resume-main">
                <strong className="resume-title">Web Developer Freelancer</strong>
                <span className="resume-company">IT Services and IT Consulting</span>
                <span className="resume-main">Building Full-stack Web Apps with React and Rust and fixing bugs for different clients</span>
              </span>
              <span className="resume-date">Jan 2020 - Jul 2022</span>
            </a>
          </section>
        </div>

        <div id="content-work" className="content-middle">
          <section className="content-middle">
            <h2><b>Education</b></h2>
          </section>
        </div>

        <div className="content-work" id="work">
          <section id="work-history" className="flex flex-col gap-20">
            <a className='resume-row'>
              <span id='resume-logo' className='resume-logo'><img src="/anhanguera_educacional_sa_logo.jpeg"></img></span>
              <span className="resume-main">
                <strong className="resume-title">Anhanguera Educacional</strong>
                <span className="resume-company">Bachelor's Degree in Computer Science</span>
                <span className="resume-main">Foundations of Computer Science. Databases. Web Development with Java and Python. System Architecture, Cybersecurity, Hardware, etc. Did a research on the applications of Rust Programming language in System's Development</span>
              </span>
              <span className="resume-date">Jan 2018 - Dec 2022</span>
            </a>
          </section>
          <section id="work-history" className="flex flex-col gap-20">
            <a className='resume-row'>
              <span id='resume-logo' className='resume-logo'><img src="/senai_logo.jpeg"></img></span>
              <span className="resume-main">
                <strong className="resume-title">SENAI Anielo Greco</strong>
                <span className="resume-company">Associate's Degree Industrial Electronics Technology/Technician</span>
                <span className="resume-main">Foundations of electricity and electronics. Electric systems. Industrial Motors and electronics. Industrial Automation. Implemented Arduino, PIC and Raspberry Development for automation.</span>
              </span>
              <span className="resume-date">Jun 2013 - Dec 2014</span>
            </a>
          </section>
        </div>

        <div id="content-coding-skills" className="content-middle">
          <section className="content-middle">
            <h2>Coding Skills</h2>
          </section>
        </div>

        <CodingSkillsDefault />

        <div id="content-projects" className="content-middle">
          <section className="content-middle">
            <h2><b>A few Projects</b></h2>
          </section>
        </div>

        <div className="content-right">
          <section>
            <h2>NEAR Tutorial</h2>
            <p>
              Tutorial that teaches the foundations of developing NEAR smart contracts.
            </p>
            <p>
              <a target="_blank" href="https://github.com/On0n0k1/Tutorial_NEAR_Rust">https://github.com/On0n0k1/Tutorial_NEAR_Rust</a>
            </p>

            <h2>Chess Game</h2>
            <p>
              Made a smart contract in Rust for playing Chess.
            </p>
            <p>
              <a target="_blank" href="https://github.com/On0n0k1/NCD.L1--Chess">https://github.com/On0n0k1/NCD.L1--Chess</a>
            </p>


            <h2>Multithreading Library</h2>
            <p>
              My first Rust project made in Rust. Available in Crates.io .
            </p>
            <p>
              <a target="_blank" href="https://github.com/On0n0k1/kik_sync_service">https://github.com/On0n0k1/kik_sync_service</a>
            </p>

            <h2>Address Book</h2>
            <p>
              An Address book implemented in GTK using Rust
            </p>
            <p>
              <a target="_blank" href="https://github.com/On0n0k1/address_book_gtk">https://github.com/On0n0k1/address_book_gtk</a>
            </p>

            <h2>Mandelbroth Fractal calculator</h2>
            <p>
              A Mandelbroth fractal viewer for linux
            </p>
            <p>
              <a target="_blank" href="https://github.com/On0n0k1/crispy_octo_fractals">https://github.com/On0n0k1/crispy_octo_fractals</a>
            </p>
          </section>
        </div>

        <blockquote>
          <p>This is the way for those who want to learn my strategy: Do not think dishonestly. The way is in training. Become acquainted with every art. Know the ways of all professions. Distinguish between gain and loss in wordly matters. Develop intuitive judgement and understanding for everything. Perceive those things which cannot be seen. Pay attention even to trifles. Do nothing which is of no use.<br />-Musashi Miyamoto</p>
        </blockquote>

      </main>
      <footer>
        <p>© 2026 Lucas Lemos · Built with React, TypeScript, &amp; Three.js</p>
      </footer>

    </div>

  );
}

export default Content;

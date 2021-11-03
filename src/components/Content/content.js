import React, { useState, useEffect, useRef } from 'react';

import './content.css';

function Content() {
    return (
      <main id="mainContent">

        <header>
          <h1>Warning</h1>
          <p>Page still under development!</p>
        </header>

        <blockquote>
          <p>I like learning and finding solutions for developers' most boring problems.</p>
        </blockquote>

        <section>
          <h2 id="headerContactInfo">Contact Info</h2>
          <ul className="list-circle">
            <li><b>Github:</b> <a target="_blank" href="https://github.com/On0n0k1">https://github.com/On0n0k1</a></li>
            <li><b>Linkedin:</b> <a target="_blank" href="https://www.linkedin.com/in/lucas-alessandro-do-carmo-lemos-18a091b2">https://www.linkedin.com/in/lucas-alessandro-do-carmo-lemos-18a091b2/</a></li>
            <li><b>Email:</b> stiltztinkerstein@gmail.com</li>
            <li><b>Phone:</b> (Message me so we can schedule a call)</li>
          </ul>
        </section>

        <section className="content-left">
          <h2 id="headerAboutMe">About Me</h2>
          <p>
            I'm a freelancer software developer that focuses in implementing systems coded in Rust and Javascript.
          </p>

          <p>
            I can create simple frontend applications using react and powerful, light-weight systems in rust and javascript packaged in tiny docker images.
          </p>

          <p>
            If there's need to optimize a system using webassembly, don't need to worry about going through the nightmare of learning webassembly for the first time. Cause I did it several times, and have all the setup ready for a quick implementation.
          </p>

          <p>
            I can use rust to execute asynchronous tasks, multithreaded tasks, and optimize with simd, avx instructions.
          </p>
        </section>


        <section>
          <h2>Language Skills</h2>
          <ul className="list-disc">
            <li><b>Brazilian Portuguese:</b> Native</li>
            <li><b>English:</b> Fluent</li>
            <li><b>Japanese:</b> Basic</li>
          </ul>
        </section>

        <section className="light">
          <h2>Projects</h2>

          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>

          <h2>Accomplishments</h2>

          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>

        </section>

        <blockquote>
          <p>The best way out is always through <br />-Robert Frost</p>
        </blockquote>

        <section className="content-left">
          <h2>Work History</h2>

          <h3>Job1</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <h3>Job2</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <h3>Job3</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>

        </section>

        <blockquote>
          <p>Seems to work so far!</p>
        </blockquote>
      </main>
    );
}

export default Content;

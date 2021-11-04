import React, { useState, useEffect, useRef } from 'react';

import './content.css';

function Content() {
    return (
      <main id="mainContent">
        <div className="content-header">
          <header>
            <h1>Warning</h1>
            <p>Page still under development!</p>
          </header>
        </div>

        <blockquote>
          <p>I like to find the most optimal and effective ways for machines to solve our problems.</p>
        </blockquote>

        <div className="content-left">
          <section className="content-left">
            <h2 id="headerContactInfo">Contact Info</h2>
            <ul className="list-circle">
              <li><b>Github:</b> <a target="_blank" href="https://github.com/On0n0k1">https://github.com/On0n0k1</a></li>
              <li><b>Linkedin:</b> <a target="_blank" href="https://www.linkedin.com/in/lucas-alessandro-do-carmo-lemos-18a091b2">https://www.linkedin.com/in/lucas-alessandro-do-carmo-lemos-18a091b2/</a></li>
              <li><b>Email:</b> stiltztinkerstein@gmail.com</li>
              <li><b>Phone:</b> (Message me so we can schedule a call)</li>
            </ul>
          </section>
        </div>

        <div className="content-right">
          <section className="content-right">
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
        </div>

        <div className="content-left">
          <section className="content-left">
            <h2>Language Skills</h2>
            <ul className="list-disc">
              <li><b>Brazilian Portuguese:</b> Native</li>
              <li><b>English:</b> Fluent</li>
              <li><b>Japanese:</b> Basic</li>
            </ul>
          </section>
        </div>

        <div className="content-right">
          <section className="content-right">
            <h2>Projects</h2>

            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>

            <h2>Accomplishments</h2>

            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>

          </section>
        </div>


        <div id="coding-skills" className="content-middle">
          <section className="content-middle">
            <h2>Coding Skills</h2>
          </section>
        </div>

        <div className="content-left">
          <section className="content-left">
            <h2>Rust</h2>

            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>

            <h2>WebAssembly</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </section>
        </div>


        <div id="javascript-related" className="content-middle">
          <section className="content-middle">
            <h2>Javascript Related</h2>
          </section>
        </div>

        <div className="content-right">
          <section className="content-right">
            <h2>React</h2>
            <h2>Nodejs</h2>

            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>

          </section>
        </div>


        <div className="content-left">
          <section className="content-left">
            <h2>Python</h2>

            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>

          </section>
        </div>


        <div id="ci-cd" className="content-middle">
          <section className="content-middle">
            <h2><b>CI/CD</b></h2>
          </section>
        </div>

        <div className="content-right">
          <section className="content-right">
            <h2>Docker</h2>
            <h2>Webpack</h2>
            <h2>Github Actions</h2>

            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>

          </section>
        </div>


        <div id="cloud-aws" className="content-middle">
          <section className="content-middle">
            <h2><b>Cloud(AWS)</b></h2>
          </section>
        </div>

        <div className="content-left">
          <section className="content-left">
            <h2>EC2</h2>
            <h2>Lambda</h2>

            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>

          </section>
        </div>

        <blockquote>
          <p>The best way out is always through <br />-Robert Frost</p>
        </blockquote>

        <div id="work-history" className="content-right">
          <section className="content-right">
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
        </div>

        <blockquote>
          <p>Seems to work so far!</p>
        </blockquote>
      </main>
    );
}

export default Content;

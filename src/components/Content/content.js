import React, { useState, useEffect, useRef } from 'react';

import './content.css';

function Content() {
    return (
      <div className="scrollable-content">
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

          <div id="content-contact-info"className="content-left">
            <section>
              <h2>Contact Info</h2>
              <ul className="list-circle">
                <li><b>Github:</b> <a target="_blank" href="https://github.com/On0n0k1">https://github.com/On0n0k1</a></li>
                <li><b>Linkedin:</b> <a target="_blank" href="https://www.linkedin.com/in/lucas-alessandro-do-carmo-lemos-18a091b2">https://www.linkedin.com/in/lucas-alessandro-do-carmo-lemos-18a091b2/</a></li>
                <li><b>Email:</b> stiltztinkerstein@gmail.com</li>
                <li><b>Phone:</b> (Message me so we can schedule a call)</li>
              </ul>
            </section>
          </div>

          <div id="content-about-me" className="content-right">
            <section>
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
            <section>
              <h2>Language Skills</h2>
              <ul className="list-disc">
                <li><b>Brazilian Portuguese:</b> Native</li>
                <li><b>English:</b> Fluent</li>
                <li><b>Japanese:</b> Basic</li>
              </ul>
            </section>
          </div>



          <div id="content-coding-skills" className="content-middle">
            <section className="content-middle">
              <h2>Coding Skills</h2>
            </section>
          </div>

          <div className="content-left">
            <section className="content-left">
              <h2>Rust</h2>
              <ul className="list-circle">
                <li><b>Memory:</b> How rust stores data in the stack and the heap.</li>
                <li><b>Threads:</b> For running instructions in parallel.</li>
                <li><b>Macros:</b> Code that generates code (and only then compiles).</li>
                <li><b>Arc and Mutex pointers:</b> For sharing data between multiple threads in parallel.</li>
                <li><b>Traits:</b> Describe the requirements, describe the methods, and now you can easily implement unique behaviors for any type of data. Using very little code.</li>
                <li><b>Cargo configuration:</b> Configurations for the compiler and dependencies.</li>
                <li><b>Patterns:</b> Optimizing code using pattern matching.</li>
                <li><b>Environment Variables:</b> Ways to store and access environment variables safely.</li>
                <li><b>Publishing:</b> To "github" and "crates.io" as open-source.</li>
                <li><b>Documentation:</b> Using cargo and code documentation to generate an entire website with everything about the project.</li>
              </ul>

              <h2>Frameworks, Tools</h2>
              <ul className="list-disc">
                <li><b>WebAssembly:</b> Compiled machine code for faster javascript computation.</li>
                <li><b>PyO3:</b> Compiled machine code for faster Python.</li>
                <li><b>Gtk:</b> GUI that is default for Gnome based operating systems.</li>
                <li><b>Rocket:</b> Api framework.</li>
                <li><b>Warp:</b> Api framework.</li>
                <li><b>Tokio:</b> Concurrency, multithreading framework.</li>
              </ul>
            </section>
          </div>


          <div className="content-right">
            <section>
              <h2>Python</h2>
              <ul className="list-circle">
                <li><b>Generators:</b> Like functions but a lot more simple and with less overhead.</li>
                <li><b>List Comprehension:</b> Create and iterate through a list in a single line of code.</li>
                <li><b>OOP:</b> including operator overloading. E.G. making A + B compute in a unique way.</li>
                <li><b>PyO3:</b> Rust crate(library) for compiling code that Python can import and use.</li>
              </ul>

            </section>
          </div>


          <div className="content-middle">
            <section>
              <h2>Web Stack</h2>
            </section>
          </div>

          <div className="content-left">
            <section>
              <h2>Javascript</h2>
              <ul className="list-circle">
                <li><b>Nodejs:</b> Javascript runtime and dependency manager.</li>
                <li><b>React:</b> One of the most popular web front-end frameworks.</li>
                <li><b>XMLHttpRequest:</b> High level protocols for data transfers.</li>
                <li><b>ThreeJS:</b> High level 3D rendering using WebGL. Supports 3D models from blender, zbrush, unity, unreal engine, i.e.</li>
                <li><b>WebAssembly:</b> Compiled machine code for faster javascript.</li>
              </ul>

              <h2>CSS</h2>
              <ul className="list-disc">
                <li><b>Grids:</b> Easy way to manage elements proportions and positions,</li>
                <li><b>Flexbox:</b> When combined with grids, elements look a lot more responsive.</li>
                <li><b>Transitions:</b> I'm started with 'react-transition-group', but I think that the library has some 'deprecated code' issues. Still improving at other ways to transition/animate. </li>
              </ul>


            </section>
          </div>

          <div className="content-right">
            <section>
              <h2><b>CI/CD</b></h2>
              <ul className="list-disc">
                <li><b>Docker:</b> I can compile/transpile code in one container and store the end result in another. Which means, very tiny images.</li>
                <li><b>Webpack:</b> I use this to handle all javascript and webassembly dependencies.</li>
                <li><b>Github Actions:</b> Enable automated building/testing for a project.</li>
              </ul>
            </section>
          </div>


          <div className="content-middle">
            <section className="content-middle">
              <h2><b>Cloud(AWS)</b></h2>
            </section>
          </div>

          <div className="content-left">
            <section>
              <h2>ECS</h2>
              <p>
                I know the basics of hosting a docker image here.
              </p>

              <h2>Lambda</h2>
              <p>
                I know the basics of hosting functions in rust or nodejs.
              </p>

            </section>
          </div>

          <div className="content-middle">
            <section>
              <h2><b>3D Modeling</b></h2>
            </section>
          </div>

          <div className="content-right">
            <section>
              <h2>Blender/Unity</h2>
              <p>
                Just getting started with these to make better 3D websites.
              </p>
            </section>
          </div>



          <div id="content-projects" className="content-middle">
            <section>
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

          <blockquote>
            <p>This is the way for those who want to learn my strategy: Do not think dishonestly. The way is in training. Become acquainted with every art. Know the ways of all professions. Distinguish between gain and loss in wordly matters. Develop intuitive judgement and understanding for everything. Perceive those things which cannot be seen. Pay attention even to trifles. Do nothing which is of no use.<br />-Musashi Miyamoto</p>
          </blockquote>

        </main>
      </div>
    );
}

export default Content;

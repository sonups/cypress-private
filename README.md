<!--
*** Thanks for checking out the Best-README-Template. If you have a suggestion
*** that would make this better, please fork the repo and create a pull request
*** or simply open an issue with the tag "enhancement".
*** Thanks again! Now go create something AMAZING! :D
-->



<!-- PROJECT SHIELDS -->
<!--
*** I'm using markdown "reference style" links for readability.
*** Reference links are enclosed in brackets [ ] instead of parentheses ( ).
*** See the bottom of this document for the declaration of the reference variables
*** for contributors-url, forks-url, etc. This is an optional, concise syntax you may use.
*** https://www.markdownguide.org/basic-syntax/#reference-style-links
-->


<!-- PROJECT LOGO -->
<br />
<p align="center">
   <a href="https://github.com/sonups/cypress-test-docker">
   <img src="https://hackernoon.com/hn-images/1*IrV85j4bpBjZocD5jVnCHQ.jpeg" alt="Logo" width="300" height="150">
   </a>
<h3 align="center">Cypress Test Automation</h3>
<p align="center">
   Cypress test automation using docker. Run all your UI End to end tests silently 
</p>
<!-- TABLE OF CONTENTS -->
<details open="open">
   <summary>Table of Contents</summary>
   <ol>
      <li>
         <a href="#about-the-project">About The Project</a>
         <ul>
            <li><a href="#built-with">Built With</a></li>
         </ul>
         <ul>
            <li><a href="#optional-to-check-other-project-features">[Optional] To check other project features</a></li>
         </ul>
      </li>
      <li>
         <a href="#steps-in-a-nutshell">Steps In a nutshell</a>
         <ul>
            <li><a href="#prerequisites">Prerequisites</a></li>
            <li><a href="#installation--execution">Installation & Execution</a></li>
         </ul>
      </li>
      <li><a href="#contact">Contact</a></li>
   </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project


An End to end test automation framework with Cypress. You can build the project using docker. It has some useful reporting features.

Please have a look at other useful scripts inside  **package.json**
Other useful feautes are:-
 - Allure report generation
 - Running tests in chrome, firefox 
 - Cypress Test Runner [ Useful for test script development]
 - Execute specific tests by tags 

### Built With

Only docker required for running the tests
* [Docker](https://www.docker.com/)

### [Optional] To check other project features
Node and npm to be installed in host machine

* [NPM](https://www.npmjs.com/)
* [Node Js](https://nodejs.org/en/)




<!-- GETTING STARTED -->
## Steps In a nutshell

1. Install docker 
2. Run build scripts 
3. Run execute scripts to spin up docker container which executes tests
4. Run copy scripts to extracts results from docker container

### Prerequisites

* docker in ubuntu 
  ```
  Follow the steps at https://docs.docker.com/engine/install/ubuntu/
  ```

* docker in windows  
  ```
  Follow the steps at https://docs.docker.com/docker-for-windows/install/
  ```

### Installation & Execution

1. Clone the repo
   ```sh
   git clone https://github.com/sonups/cypress-test-docker
   ```
2. Cd into the folder 'cypress-test-docker'
   ```sh
   cd cypress-test-docker
   ```
3. Build the docker image using script:
   ```sh
   sh build.sh
   ```
4. Start test execution using script:
   ```sh
   sh run-test.sh
   ```   
5. Extract results from container:
   ```sh
   sh extract-results.sh
   ```   
   

<!-- CONTACT -->
## Contact

Sonu Sadasivan - sonu.sadasivan@gmail.com
LinkedIn - https://www.linkedin.com/in/sonups/

Project Link: [https://github.com/sonups/cypress-test-docker](https://github.com/sonups/cypress-test-docker)


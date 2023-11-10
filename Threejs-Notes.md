# How to reverse-engineer a 3JS Site Notes

<https://kittytreeplanner.neocities.org/kittycad/>

### *Packages Used*
1. Vite: Makes angular faster. It will optimize the files, cache breaking/emptying, source mapping (when source is minified), and you can run a local server for testing!
2. Tailwind CSS
3. 3JS
4. React (plugin)
5. NPM
6. Lil GUI
7. Angular
8. GLSL (plugin)

### PART ONE. Start with your Angular Environment

1. Install Angular

    npm install -g @angular/cli@latest

*Make sure you are in the correct folder*
cd documents/github/[myprojectfolder]/Angular/[specificprojectname]

2. Make a new project folder

    ng new [my-first-app] --no-strict

Choose "CSS"

3. Install Bootstrap

    npm install --save bootstrap@5

4. Add Bootstrap to the angular.JSON file

node_modules/bootstrap/dist/css/bootstrap.min

5. Install 3JS

    npm install --save three

6. Install 3JS Type Definitions

    npm install --save @types/three

7. Quick-test your webpage

    ng serve

***************This is beyond standard Angular stuff now***

8. Install Node. You can check if it's installed with this too:

    node -v

9. Go into your practice files folder!!

10. Install NodeJS (y is for yes). It creates the package.json file

    npm init -y

11. Install Vite

    npm install vite

12. 


You stopped at 26:50.... pick up tomorrow


==================================================================================================================================================================
### PART TWO: 

Initialize app (Vite)

    npm create vite@latest ./ -- --template react

### PART THREE: 

Install NPM and Tailwind CSS 

(make styling of entire app. Like Bootstrap)

    npm install -D tailwindcss

    npx tailwindcss init

### PART FOUR: 

Other packages

Tilt uses older versions of react which is why we are using a legacy version. I used the non-legacy version of the install because that is all that would work on my machine.

    npm install --legacy-peer-deps

React-based 3JS library, going to allow us to create 3JS code in React fashion

    npm install --legacy--peer-deps @react-three/fiber @react-three/drei maath react-tilt react-vertical-timeline-component @emailjs/browser framer-motion react-router-dom

### PART FIVE: React Tutorial


================================

# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) 
for Fast Refresh

- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) 
for Fast Refresh
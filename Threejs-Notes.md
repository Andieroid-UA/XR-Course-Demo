# How to reverse-engineer a 3JS Site Notes (STill pending!!)

<https://kittytreeplanner.neocities.org/kittycad/>

<https://stackblitz.com/edit/angular-threejs-demo-basic-radkpq?file=src%2Fapp%2Fapp.component.ts,src%2Fapp%2Fhello.component.ts>

OH WOW! Is there a template JUST for Angular?!
<https://vercel.com/guides/deploying-angular-with-vercel>

* /******************************************************************/

### PART ONE. Start with your Environment

#### 1. Install Angular

    npm install -g @angular/cli@latest

*Make sure you are in the correct folder*
cd documents/github/[myprojectfolder]/Angular/[specificprojectname]

#### 2. Make a new project folder

    ng new [my-first-app] --no-strict

Choose "CSS"

#### 3. SKIP Bootstrap (IT causes issues when exporting, figure out later)

npm install bootstrap@5

#### 4. Add Bootstrap to the angular.JSON file

"node_modules/bootstrap/dist/css/bootstrap.min"

####  5. Install 3JS

    npm install --save three

6. Install 3JS Type Definitions

    npm install --save @types/three

***************This is beyond standard Angular stuff now***

8. Install Node. You can check if it's installed with this too:

    node -v

9. Install NodeJS (y is for yes). It creates the package.json file

    npm init -y

10. Install Vite

    npm install --save-dev vite

11. !!!IMPORTANT!!!

When you share DELETE these two packages to prevent node modules from getting messy

- package.json
- package-lock.json

12. Run this command
    npx vite

13. Run this command:
    npx vite build

14. Then run this command:
    npx serve

15. And this one too:
    npm run build

16. Run this command:
    npm i -g vercel

17. If you need to update your version
    npm i -g vercel@latest

18. Updating latest version of uuid:
    npm install uuid@latest

19. add to the package.json

![Alt text](image-2.png)

20. Then we log in to Vercel
    
    Vercel


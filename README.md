Step by Step Instructions:


 1. Install Node.js. **Link:** <https://nodejs.org/en/download>
 2. Install Visual Studio Code (VS Code) or any code editor of your choice. **Link:** <https://code.visualstudio.com/download>
 3. Create a New Project.
 4. Open with VS Code or any code editor.
 5. Open a New Terminal.
 6. Initialize the Project by running the Command npm init -y
 7. Install other dev dependencies you might need i.e. the Testing Framework you plan to use, the Language in which the code is written and other dependencies as well. (In this example we will be using Jest as Testing Framework and the Code will be in Typescript)
 8. Run the command npm install -D jest typescript ts-jest @types/jest ts-node
 9. Create a new folder structure to keep your Code and Tests separate i.e. src/app (contains the Code) and src/tests (contains the Tests). If you are writing Unit Tests on an already existing Project just make a separate folder for Tests.
10. Configure the test file i.e. jest.config.ts
11. Import all the packages required in Config file.
12. In the package.json file, under “Scripts” change the test type from whatever it is to the name of the Testing Framework you plane to use. (Will be changed to jest in this case)
13. Make a file under src/app where you will write your code. File format should be filename.ts
14. Make a file under src/tests where you will write your tests. File format should be filename.spec.ts
15. After writing your sample code and your tests, save the changes to both of the files.
16. On your terminal run the command npm test. It should run all your tests and fail or pass the test suite according to the results. Note: If you have written for a Unit Test to fail, the entire test suite will fail so make sure to use correct keywords while writing the tests.

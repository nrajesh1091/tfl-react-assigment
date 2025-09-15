# Tube Status App

A React and TypeScript application bootstrapped with **Vite** that displays tube line statuses.  
The project uses **Jest** for unit testing and is structured with modular React components.

---

## Project Structure

```
├── public
│   ├── assets           # To Store the config.json file which drive the application configuration based on different envs and keys
├── src
│   ├── components       # This folder is to store the components which are getting used in views
│   ├── contexts         # This folder is used to store the app contexts which will be used to store the different states
│   ├── features         # this Folder is used to store the view files .
│   ├── models           # Contains application interface and types 
│   ├── services         # Contians files to execute logic which is not related to component.
│   │   ├── API
│   ├── __mocks__        # Used to store the mocks for testing. 
│   ├── App.css
│   ├── App.spec.tsx
│   ├── App.tsx
│   ├── index.css     
│   ├── main.tsx
│   ├── vite-env.d.ts
├── .gitignore           # To ignore certain files and folders. 
├── eslint.config.js
├── index.html           # Entry point of our application 
├── jest.config.js
├── jest.config.zip
├── package-lock.json
├── package.json
├── README.md
├── tsconfig.jest.json
├── tsconfig.json
├── vite.config.ts

```

---

## Configurations

- **`vite.config.ts`** → Configures dev server and build process  
- **`jest.config.js`** → Configures Jest test runner and environment  
- **`tsconfig.json`** → TypeScript compiler options  
- **`tsconfig.jest.json`** → Overrides for TypeScript in Jest tests  
- **`.gitignore`** → Files/folders excluded from version control  
- **`eslint.config.js`** → Linting rules for code quality  

---

## Running the Application

Install dependencies (only needed once):

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Build for production:

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```
Preview &  build the production application locally:

```bash
npm run build:preview
```

---

## Running Tests

This project uses **Jest** for unit testing.

Run all tests:

```bash
npm test
```

Run tests in watch mode (helpful for development):

```bash
npm run test:watch
```

Run tests with coverage:

```bash
npm run test:coverage
```

---

## Assumptions
- The config file is placed under `public/assets` so that during the build process the file can be updated with secrets from vault and different config files for non  prod enviroments and prod enviroment
- The application will render two section the top section is grouped according to the severity of distruptions . Closure / Planned Closure has the highest severity hence it will be displayed to the user first and all the other status subsequently.
- The info icon in top section opens to modal dialog to explain the reason behind the disruption.
- The second section has the list of all tubes sorted by severity in descending order i.e. if a tube has closure or planned closure  or part closure it will be shown on top. This list also has the feature to open a dialog and dialog contains reason behind the disruptions.
- This application skeleton follows LIFT  principle . Assuming that app might grow further we have dedicated folders but growing application causes nested folder structure which is not recommended hence here we are proceeding with flat structure.   
- Static assets under `public/` are served as-is and not processed by bundler  

---

## Future Improvements

- Add end-to-end tests (e.g., Cypress or Playwright)  
- Add CI/CD workflow for automated testing and deployment  
- Extend `contexts/` with state management (e.g., Redux or Zustand)  

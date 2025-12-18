# AjX Creator Panel 🚀

jX Creator Panel is a frontend dashboard that helps content creators manage ideas, scripts, and content performance from a single interface.

## Project Purpose

The main goal of AjX Creator Panel is to:

- Practice real‑world React application architecture
- Build authentication & protected routes from scratch
- Design a creator‑focused dashboard
- Create a strong portfolio project for internships & freelancing

## Features Implemented So Far

1. Multi‑Step Sign‑Up System

- Step‑by‑step form built using multiple React components
- Collects user data across different steps
- Validations included:
  - Email uniqueness
  - Username uniqueness
  - Phone number uniqueness
- Review page before final submission
- All user data stored in localStorage

2. Login System with Authentication Logic

- Login using username or email + password
- Authentication state managed using Context API
- Login status stored in memory (Context) and LocalStorage to be login until/unless user don't logout manually

3. Protected Routes (Private Routing)

- Implemented using React Router DOM
- If a user tries to access a private route:
- Redirected to Login Page if not authenticated
- Allowed access if authenticated

4. Dashboard (Private Route)

After successful login, users can access the dashboard with the following sections:

- &#x2718; Dashboard Home (Coming Soon)
- &#x2714; Content Ideas:- Creator can write idea and save it to localStorage <font color="#FeFe">(Coming soon:- Searching idea, deleting idea) </font>
- &#x2718; Scheduled Posts (Coming Soon)
- &#x2718; Content Performance (Coming Soon)
- &#x2718; Script Generator (Coming Soon)
- &#x2718; Logout (Fully Working)

5. Landing / Home Page

The public homepage includes:

- Responsive Header
- Hero / Main Section
- Why Choose AjX Creator Panel
- How It Works
- Footer
- More sections planned

## Tech Stack

- React.js
- React Router DOM
- Context API (Authentication State)
- LocalStorage (User Data & Signup)
- CSS / Tailwind CSS (UI & Responsiveness)

## Project Status

This project is under active development.
Current focus:

- Building dashboard modules step by step
- Improving UI & UX
- Making logic more scalable

## Folder Structure

```
src/
|-components/
||--context/
|||---AuthContext
||
||--dashboard/
|||---content-idea/
||||----ContentIdea.jsx
||||----ContentIdeaMain.jsx
||||----DisplayIdea.jsx
||||----AddIdeaModel.jsx
||||----ValidateIdea.js
|||
|||---DashboardMain.jsx
|||---DashboardSideBar.jsx
|||---DashboardTop.jsx
|||---DashboardHome.jsx
|||---ScheduledPost.jsx
|||---GrowthTracker.jsx
|||---ScriptGenerator.jsx
||
||--HomePageComponents/
|||---Header.jsx
|||---Main.jsx
|||---HowWork.jsx
|||---HomePageBox.jsx
|||---WhyChoose.jsx
|||---ReadyToCreate.jsx
|||---Footer.jsx
||
||--steps/
|||---Step1Account.jsx
|||---Step2Profile.jsx
|||---Step3Preference.jsx
|||---Review.jsx
||
||--privateRoute
|
|
|-config/
||--ConfigFormComponent.js
||--LoginValidation.jsx
||--RegisterReducer.js
|
|
|-pages/
||--Home.jsx
||--DashboardLayout.jsx
||--Login.jsx
||--Signin.jsx
||--NotFound.jsx
|
|
|_route/
||__AllRoutes.jsx

```

The project follows a feature-based folder structure and is being continuously refactored to align with industry best practices

## Learning Outcomes

Through this project, I am learning:

- How real authentication logic works (without backend)
- How to protect routes in React
- How to structure medium‑scale React apps
- How to think like a product‑focused frontend engineer

## Future Plans

- Tag‑based content idea management
- Post scheduling logic
- Analytics dashboard (mock data first)
- Script generator using AI APIs
- Backend integration (Node + MongoDB)

## 👤 Author

Ajmat Ali
Frontend Developer | Creator | Learner

> **_This project is built as part of my learning and portfolio. Feedback and suggestions are always welcome 🙌_**

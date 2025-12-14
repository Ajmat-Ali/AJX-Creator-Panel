# AjX Creator Panel 🚀

AjX Creator Panel is a personal full‑stack style frontend project built to help content creators manage ideas, platforms, and growth from a single dashboard. This project is also part of my learning journey as a frontend developer, focusing on React, routing, authentication logic, state management, and scalable UI design.

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
- Login status stored in memory (Context)

3. Protected Routes (Private Routing)

- Implemented using React Router DOM
- If a user tries to access a private route:
- Redirected to Login Page if not authenticated
- Allowed access if authenticated

4. Dashboard (Private Route)

After successful login, users can access the dashboard with the following sections:

- Dashboard Home (Coming Soon)
- Content Ideas (Coming Soon)
- Scheduled Posts (Coming Soon)
- Content Performance (Coming Soon)
- Script Generator (Coming Soon)
- Logout (Fully Working)

5. Landing / Home Page

The public homepage includes:

- Responsive Header
- Hero / Main Section
- Why Choose AjX Creator Panel
- How It Works
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

src/
|---components/
||---HomePageComponents/
|||---Header.jsx
|||---HomePageBox.jsx
|||---HowWork.jsx
|||---Main.jsx
|||_\_\_WhyChoose.jsx
||---Steps/
|||---Review.jsx
|||---Step1Account.jsx
|||---Step2Profile.jsx
|||_\_\_Step3Preference.jsx
||---AuthContext.jsx
||---ContentIdea.jsx
||---DashboardHome.jsx
||---DashboardMain.jsx
||---DashboardSideBar.jsx
||---DashboardSideTopBar.jsx
||---GrowthTracker.jsx
||---PrivateRoute.jsx
||---SchedulePost.jsx
||\_\_\_ScriptGenerator.jsx
|
|---config/
||---ConfigFormComponent.js
||---LoginValidation.jsx
||\_\_\_RegisterReducer.js
|
|---pages/
||---DashboardLayout.jsx
||---Home.jsx
||---Login.jsx
||---NotFound.jsx
||\_\_\_Signin.jsx
|
|\*\*\_routes/
||\_\*\*AllRoute.jsx

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

<!-- -------------------------------------------------------------------------------------------------- -->

# AJX Creator Panel

## Features (Coming Soon):----------------------------------

### AI content idea generator (using simple API)

### Video planner with drag-and-drop calendar

### Content performance visualizer (Recharts + clean UI)

### Script generator (simple prompts UI)

### Hashtag engine

### User segments like IG, YT, FB, etc.

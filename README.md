# OmniMart: A Type-Safe E-commerce Platform

OmniMart is a modern, high-performance single-page application (SPA) built with React and TypeScript. The project focuses on clean architecture, scalable state management, and a seamless user experience.

> **🔗 Live Demo:** [Your-Vercel-Link-Here]

## 🌟 Technical Highlights 

* **Advanced State Management:** Implemented sophisticated shopping cart logic using React Hooks, handling complex operations like item persistence, quantity increments, and real-time total calculations.
* **Scalable Type System:** Leveraged TypeScript interfaces and inheritance to create a robust data model, ensuring type safety across all components and props.
* **Custom Responsive Grid:** Developed a proprietary CSS Grid system to ensure a fluid and adaptive product catalog across all device sizes.
* **Dynamic Routing & Filtering:** Integrated React Router v6 for efficient client-side navigation and category-based product filtering.

## ✅ Automated Testing & Quality Assurance

To maintain the integrity of the **Type-Safe** architecture, the project includes a multi-layered testing suite:

* **E2E Testing (Playwright):** Validates critical user journeys, including product selection, cart persistence, and checkout navigation.
* **Unit Testing (Vitest):** Ensures that core business logic, such as price calculations and filtering algorithms, remains bug-free.
* **Type Integrity:** Strict TypeScript configuration to prevent runtime errors and ensure predictable data flow.

## 🛠 Installation & Setup

1. **Clone & Install:**
   ```bash
   git clone [https://github.com/ZorGor8/OmniMart.git](https://github.com/ZorGor8/OmniMart.git)
   cd OmniMart
   npm install
   Setup Testing Environment:
npx playwright install
Development Mode:
npm run dev
Run Tests:

Unit Tests: npm run test

E2E Tests: npx playwright test
# Help Study Abroad – Frontend Technical Assessment

## Project Overview
This project is a **modern admin dashboard application** built using **Next.js (App Router)**, **Material UI (MUI)**, and **Zustand**.
It integrates with the **DummyJSON public API** to implement authentication, users management, and products management.

The goal of this project is to demonstrate clean frontend architecture, proper state management, responsive UI, and real-world API integration.

---

## Tech Stack

- **Next.js (App Router)**
- **React**
- **Material UI (MUI)**
- **Zustand** (State Management)
- **DummyJSON Public API**

---

## Project Structure

src/
├── app/
│ ├── page.jsx
│ ├── login/
│ │ └── page.jsx
│ ├── dashboard/
│ │ └── page.jsx
│ ├── users/
│ │ ├── page.jsx
│ │ └── [id]/page.jsx
│ ├── products/
│ │ ├── page.jsx
│ │ └── [id]/page.jsx
│ └── layout.jsx
│
├── components/
│ ├── Navbar.jsx
│ ├── ProtectedRoute.jsx
│ └── ProductCard.jsx
│
├── store/
│ ├── authStore.js
│ ├── usersStore.js
│ └── productsStore.js
│
└── lib/
 └── api.js

---

## Authentication

- Authentication is handled using the **DummyJSON Login API**
- On successful login:
  - `accessToken` is stored in **Zustand**
  - Token is also persisted in **localStorage**
- Protected routes:
  - `/dashboard`
  - `/users`
  - `/products`

### Test Credentials

(Any valid DummyJSON user credentials can be used.)

---

## Why Zustand?

Zustand was chosen for state management because:

- Minimal boilerplate compared to Redux
- Built-in async support
- Lightweight and easy to scale
- Ideal for small to medium-sized applications

### Stores Used
- `authStore` → Authentication & token handling
- `usersStore` → Users list, search, pagination
- `productsStore` → Products list, search, pagination

---

## Features

### Authentication
- Login using DummyJSON API
- Token persistence using `accessToken`
- Protected routes using `ProtectedRoute` component

### Users Module
- Users list with API-side pagination
- User search
- Single user detail page

### Products Module
- Responsive product grid view
- API-side pagination
- Product search
- Single product detail page

### UI / UX
- Fully built using **Material UI**
- Responsive grid layout
- Clean and consistent design

---

## Performance Optimizations

- API-side pagination to avoid large payloads
- Zustand state caching to reduce unnecessary API calls
- Reusable components (`ProductCard`, `UserTable`)
- Server Components used for detail pages

---

## Edge Cases Handled

- DummyJSON authentication uses `accessToken` instead of `token`
- Dynamic route params handled correctly in App Router
- Server → Client function passing avoided
- Graceful fallback UI for missing users/products

---

## Getting Started

npm run dev

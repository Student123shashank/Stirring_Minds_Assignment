# Startup Benefits & Partnerships Platform

A full-stack web application built to help early-stage startups access exclusive SaaS deals and benefits.  
The platform focuses on clean user flow, secure authentication, and a modern SaaS-style UI/UX.

---

## 📌 Business Context

Early-stage startups often cannot afford premium SaaS tools such as cloud services, analytics platforms, and productivity software.  
This platform aggregates startup-specific deals in one place and restricts certain premium deals to verified users.

**Target Users**
- Startup founders
- Early-stage teams
- Indie hackers

---

## 🧱 Tech Stack

### Frontend
- **Next.js (App Router)**
- **TypeScript**
- **Tailwind CSS**
- **Framer Motion** (animations & transitions)

### Backend
- **Node.js**
- **Express.js**
- **MongoDB + Mongoose**
- **JWT-based Authentication**
- **REST APIs**

❌ GraphQL, Firebase, Supabase, and serverless abstractions are not used.

---

## 🧩 Core Application Flow

1. User registers on the platform  
2. User logs in using email and password  
3. User browses all available deals  
4. Locked deals are visible but restricted  
5. Verified users can claim eligible deals  
6. Claimed deals appear in the user dashboard with status tracking  

---

## 🔐 Authentication & Authorization

- JWT (JSON Web Token) is used for authentication
- Token is issued on successful login
- Protected routes require a valid JWT
- Locked deals cannot be claimed by unverified users
- Authorization logic is enforced at the backend level

---

## 🎁 Deal Claim Flow (Internal Logic)

1. User clicks **Claim Deal**
2. Frontend sends request with JWT token
3. Backend verifies:
   - User authentication
   - Deal existence
   - Deal lock status
   - User verification status
4. Claim is created with status `pending`
5. Claimed deals are shown in the dashboard

---

## 🎨 UI / UX & Animations

- Modern SaaS-style design
- Clean separation of public pages and auth pages
- Smooth page transitions using Framer Motion
- Hover and micro-interactions on buttons and cards
- Clear visual distinction between locked and unlocked deals

Animations are used to **enhance usability**, not distract the user.

---

## 📂 Project Structure

startup-benefits-platform/
│
├── frontend/ # Next.js application
│
├── backend/ # Express + MongoDB API
│
└── README.md


---

## ⚙️ Setup Instructions (Step-by-Step)

### 1️⃣ Unzip the project
```bash
unzip startup-benefits-platform.zip
cd startup-benefits-platform

2️⃣ Backend Setup
cd backend
npm install

Create a .env file inside backend:
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key


Start backend server:
npm run dev

Backend runs on:
http://localhost:5000



3️⃣ Frontend Setup
cd frontend
npm install
npm run dev


Frontend runs on:
http://localhost:3000


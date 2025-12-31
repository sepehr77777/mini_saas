Mini SaaS Dashboard (Full-Stack)

A simple full-stack Mini SaaS application built with Next.js, Express, and PostgreSQL.
This project demonstrates authentication, dashboard analytics, projects & tasks management.

✨ Features

🔐 Authentication (JWT)

Login & Register

📊 Dashboard

Real-time counts for Projects, Tasks, Users

📁 Projects Management

Fetch projects from PostgreSQL

✅ Tasks Management

Track pending & completed tasks

🎨 Modern UI

Built with Tailwind CSS

🧠 Clean Architecture

Separate Frontend & Backend

🧰 Tech Stack
Frontend

Next.js (App Router)

TypeScript

Tailwind CSS

Axios

Backend

Node.js

Express

TypeScript

PostgreSQL

JWT Authentication

bcrypt
Environment Variables
Backend (saas-backend/.env)
PORT=5000
DATABASE_URL=postgresql://postgres:password@localhost:5432/saasdb
JWT_SECRET=supersecret

▶️ Run the Project Locally
1️⃣ Backend
cd saas-backend
npm install
npm run dev


Backend runs on:
👉 http://localhost:5000

2️⃣ Frontend
npm install
npm run dev


Frontend runs on:
👉 http://localhost:3000

🔗 API Endpoints (Sample)

POST /api/auth/login

POST /api/auth/register

GET /api/projects

GET /api/tasks

GET /api/users

📸 Screens (Optional)

You can add screenshots of Dashboard, Projects & Tasks pages here later.

🎯 Purpose of This Project

This project was built as:

A portfolio full-stack project

A practice SaaS dashboard

A GitHub-ready demo for job applications & freelancing

🧑‍💻 Author

Sepehr Rahimi
Frontend / Full-Stack Developer
GitHub: https://github.com/sepehr77777

📌 Future Improvements

Role-based access (Admin / User)

Create & Edit Projects

Task assignment

Charts & analytics

Deployment (Vercel + Render
english--------------------------------
مینی SaaS داشبورد (فول‌استک)

این پروژه یک اپلیکیشن فول‌استک Mini SaaS است که با استفاده از Next.js، Express و PostgreSQL ساخته شده.
هدف پروژه شبیه‌سازی یک داشبورد SaaS واقعی با احراز هویت، مدیریت پروژه و تسک است.

✨ امکانات پروژه

🔐 احراز هویت (JWT)

ثبت‌نام و ورود کاربران

📊 داشبورد مدیریتی

نمایش تعداد پروژه‌ها، تسک‌ها و کاربران به‌صورت واقعی از دیتابیس

📁 مدیریت پروژه‌ها

دریافت پروژه‌ها از PostgreSQL

✅ مدیریت تسک‌ها

نمایش وضعیت انجام‌شده و در انتظار

🎨 رابط کاربری مدرن

طراحی شده با Tailwind CSS

🧠 ساختار تمیز و حرفه‌ای

تفکیک کامل فرانت‌اند و بک‌اند

🧰 تکنولوژی‌های استفاده‌شده
فرانت‌اند

Next.js (App Router)

TypeScript

Tailwind CSS

Axios

بک‌اند

Node.js

Express

TypeScript

PostgreSQL

JWT

bcrypt

📂 ساختار پروژه
mini_saas/
│
├── src/                # فرانت‌اند (Next.js)
│   ├── app/
│   │   ├── dashboard/
│   │   ├── projects/
│   │   ├── tasks/
│   │   └── auth/
│
├── saas-backend/       # بک‌اند (Express)
│   ├── src/
│   │   ├── routes/
│   │   ├── controllers/
│   │   ├── config/
│   │   └── server.ts
│
└── README.md

⚙️ متغیرهای محیطی (Environment Variables)
بک‌اند (saas-backend/.env)
PORT=5000
DATABASE_URL=postgresql://postgres:password@localhost:5432/saasdb
JWT_SECRET=supersecret

▶️ اجرای پروژه به‌صورت لوکال
1️⃣ اجرای بک‌اند
cd saas-backend
npm install
npm run dev


بک‌اند روی آدرس زیر اجرا می‌شود:
👉 http://localhost:5000

2️⃣ اجرای فرانت‌اند
npm install
npm run dev


فرانت‌اند روی آدرس زیر اجرا می‌شود:
👉 http://localhost:3000

🔗 نمونه API ها

POST /api/auth/login

POST /api/auth/register

GET /api/projects

GET /api/tasks

GET /api/users

🎯 هدف پروژه

این پروژه با هدف زیر ساخته شده است:

ساخت نمونه کار فول‌استک

تمرین معماری SaaS

استفاده در رزومه، گیت‌هاب و فریلنسری

نمایش ارتباط واقعی فرانت‌اند با دیتابیس

🧑‍💻 توسعه‌دهنده

سپهر رحیمی
Frontend / Full-Stack Developer
GitHub:
👉 https://github.com/sepehr77777

📌 برنامه‌های آینده

نقش‌ها (Admin / User)

ساخت و ویرایش پروژه

تخصیص تسک به کاربران

نمودارها و آمار

دیپلوی روی Vercel و Render

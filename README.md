# 🔌 Admin-Driven Utility Billing System

A **full-stack utility billing system** where pricing rules are securely managed by an admin and end users can calculate and download their bills **without ever seeing the pricing logic**.

This project demonstrates **secure configuration management, clean backend architecture, and real-world deployment** using modern web technologies.

---
Live link: https://admin-utility-bill-calculator-rhmc1qrrr.vercel.app

## 📌 Project Overview

This system allows:

- **Admins** to define pricing rules (rate per unit, VAT, service charge)
- **Users** to submit consumption units and receive a calculated bill
- **Pricing logic** to remain fully hidden from users
- **Bills** to be downloaded as a PDF
- **Dynamic rule updates** without redeploying the frontend

> 🔐 Pricing rules are stored **only on the backend** and enforced through protected APIs.

---

## 🎯 Functional Requirements

### ✅ Admin Features
- Update **rate per unit**
- Update **VAT percentage**
- Update **fixed service charge**
- Admin access protected via secret key
- Only **one active pricing configuration** stored in the database

### ✅ User Features
- Enter consumed units
- Receive:
  - Subtotal
  - VAT amount
  - Service charge
  - Total payable
- Download bill as **PDF**
- No visibility into pricing rules

---

## 🧱 Tech Stack

### Frontend
- **React + TypeScript**
- **Vite**
- **Axios**
- **jsPDF**
- Deployed on **Vercel**

### Backend
- **NestJS + TypeScript**
- **TypeORM**
- **PostgreSQL (Neon)**
- Deployed on **Render**

### Database
- **Neon (Serverless PostgreSQL)**


## 🏗️ System Architecture


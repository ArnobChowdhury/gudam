# 🌊 Ponno Tracker – Roadmap

## 🧭 Vision (MVP Scope)

Build a **minimal inventory + order management system** with:

- API-first backend (FastAPI)
- Admin interface (Next.js)
- Role-based access control
- Multi-location inventory support

---

# ⚙️ Phase 1: Core Backend (API Foundation)

**Goal:** Establish a clean, scalable API

---

## 📦 Product Management

- Create Product
- Get Product
- List Products
- Update Product
- Soft delete product

---

## 📍 Location Management

- Create Location (e.g., Warehouse, Store, Hub)
- Get Location
- List Locations
- Update Location
- Deactivate location

👉 Example:

- Dhaka Warehouse
- Chittagong Hub
- Retail Store #1

---

## 📊 Stock Management (Now Location-Aware)

- Create Stock entry
- Get Stock (single)
- List Stocks
- Update Stock

---

## 🧱 Data Modeling (Updated)

- Product ↔ Stock relationship
- Location ↔ Stock relationship
- A product can exist in multiple locations
- Validation (price, quantity, etc.)
- Timestamps (created_at, updated_at)

---

## 🧪 API Testing

- Use Postman
- Define request/response schema
- Standardize error responses

---

# 🖥️ Phase 2: Admin Frontend

**Goal:** Build a functional admin panel

## 🧾 Product UI

- Create Product form
- Product list (table view)
- Product detail view
- Edit product

## 📦 Stock UI

- Create Stock form
- Stock list view
- Stock detail view

## 🎯 UX Foundations

- Form validation
- Loading states
- Error handling UI
- Basic dashboard layout (sidebar/navigation)

---

# 🔐 Phase 3: Authentication & Authorization

**Goal:** Secure the system with role-based access

## 🔑 Authentication

- Login system (JWT/session-based)
- Token flow between Next.js ↔ FastAPI

## 👥 Authorization

- Role-based access (Admin, Staff, etc.)
- Protect backend endpoints
- Protect frontend routes

## 📥 Admin Access Flow

- “Request Admin Access” page
- Manual approval system (MVP-friendly)

---

# 📦 Phase 4: Order Management

**Goal:** Introduce internal order handling

## 🧾 Order System

- Create Order
- Order list view
- Order detail view
- Order status management (pending, confirmed, etc.)

## 🧮 Invoice System

- Generate invoice (HTML/PDF)
- Include:
  - Product details
  - Quantity
  - Pricing
  - Total amount

---

# 🚚 Phase 5: Delivery Integration

**Goal:** Integrate external logistics provider

## 🔗 Courier Integration

- Integrate with Steadfast Courier API
- Send order data to courier
- Store delivery tracking info

## 📦 Delivery Tracking

- Sync delivery status (manual or webhook-based)
- Update order status accordingly

---

# 🛍️ Phase 6: E-commerce Layer (Optional)

**⚠️ This phase is explicitly optional and should only be considered after MVP validation**

**Goal:** Add customer-facing storefront

Potential features:

- Public product listing
- Shopping cart
- Checkout flow
- Customer authentication

👉 Decision to proceed should depend on:

- Real usage
- Clear business need
- System stability

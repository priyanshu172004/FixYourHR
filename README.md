<<<<<<< HEAD
# FixYourHR
FXR - A platform for choosing the best HRMS software tailored to your needs and budget
=======
# FixYourHR - Full Stack Web Application

Welcome to the backend and frontend workflow documentation for the **FixYourHR** project!

## 🚀 Complete Workflow

**FixYourHR** is a highly secure, production-ready MERN stack application (MongoDB, Express.js, React, Node.js). 

1. **Frontend (Client)**: Built with React, Vite, and TailwindCSS. It provides a beautiful landing page with smooth scrolling (Lenis) and animated sections (Framer Motion).
2. **User Data Submission**: When a prospective client interacts with the User Form Modal, a secure `POST` request is sent to the backend to capture their information.
3. **Backend (Server)**: A Node.js/Express.js server receives API requests. It implements security layers like Helmet (HTTP headers), CORS validation, and Rate Limiting to prevent spam/abuse.
4. **Database (MongoDB)**: The server uses Mongoose to interact with MongoDB Atlas, securely storing User Form Submissions and Admin credentials.
5. **Secure Admin Dashboard**: Administrators can log in through a secretive, obscure URL path. JWT (JSON Web Tokens) are generated to keep them authenticated for a 30-minute session slice before forcing a secure auto-logout. Admins can view submitted forms, delete them, and create new admin users.

---

## 🔒 Security Features Implemented
- **Obscured Routing**: The admin portal runs on an obscure route (`/your-obscure-admin-route`) making it virtually impossible for bots or unauthorized users to scrape or locate the login page.
- **JWT Authentication**: Secure login mechanics protected by encrypted token verification.
- **Session Timeouts**: Admins are securely auto-logged out after exactly 30 minutes of inactivity.
- **Password Hashing**: Done via `bcryptjs` so plaintext passwords are never exposed in the database.
- **Catch-All 404 Interceptor**: Any attempts to access invalid paths are elegantly caught and masked by a custom, branded 404 page.

---

## 📡 API Endpoints (For Postman Testing)

Below are the routes you can test locally using Postman. Ensure your backend server is running on `http://localhost:5000`.

### 1. Submit User Form (Public)
*Allows users to leave their details for FixYourHR.*
- **URL**: `POST http://localhost:5000/api/forms/submit`
- **Body (JSON)**:
  ```json
  {
    "name": "John Doe",
    "email": "johndoe@example.com",
    "phone": "1234567890",
    "message": "I need help with payroll!"
  }
  ```

### 2. Admin Login (Public)
*Returns a JWT token `data.token` on success.*
- **URL**: `POST http://localhost:5000/api/admin/login`
- **Body (JSON)**:
  ```json
  {
    "username": "your_demo_username",
    "password": "your_demo_password"
  }
  ```

### 3. Get All Submissions (Protected)
*Fetches all users' submitted forms. Requires Auth Header.*
- **URL**: `GET http://localhost:5000/api/admin/forms`
- **Headers**:
  - `Authorization`: `Bearer <paste_your_token_here>`

### 4. Delete Submission (Protected)
*Deletes a specific user form by its MongoDB ObjectId.*
- **URL**: `DELETE http://localhost:5000/api/admin/form/:id`
- **Headers**:
  - `Authorization`: `Bearer <paste_your_token_here>`

### 5. Create New Admin (Protected)
*Allows existing admins to register a new admin.*
- **URL**: `POST http://localhost:5000/api/admin/create-admin`
- **Headers**:
  - `Authorization`: `Bearer <paste_your_token_here>`
- **Body (JSON)**:
  ```json
  {
    "username": "new_demo_user",
    "password": "new_demo_password"
  }
  ```

---

## 🛠️ Project Setup & Installation

### 1. Install Dependencies
Open two terminals.
**Terminal 1 (Frontend):**
```bash
cd client
npm install
```
**Terminal 2 (Backend):**
```bash
cd server
npm install
```

### 2. Configure Environment Variables
Inside your `server/` directory, ensure your `.env` contains:
```env
PORT=5000
MONGO_URI=mongodb+srv://<username>:<password>@<cluster-url>/FixYourHR?retryWrites=true&w=majority
JWT_SECRET=your_super_secret_key_here
```
*(Optionally setup a `.env` in `client/` for `VITE_API_URL=http://localhost:5000/api`)*

### 3. Run the Development Servers
**Backend:**
```bash
cd server
npm run dev
```
**Frontend:**
```bash
cd client
npm run dev
```
>>>>>>> 68125e1 (Project Pushed Successfully)

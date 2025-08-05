### Before Run it any folder Do ====>
npm run build 
npm start and npm run dev
# 📘 API Documentation – Community Server

This is the REST API documentation for the Community Server built with Node.js, TypeScript, MongoDB, and JWT authentication.

---

## 🔐 USER ROUTES

### 1. 📝 Sign Up

**POST** `/user/signup`

Registers a new user.

#### Request Body

```json
{
  "firstName": "roodius",
  "lastName": "saifi",
  "username": "roosdiusXosman",
  "password": "osmanxroodius@7900",
  "email": "osmansaifi30@gmail.com"
}

# 🧑‍💼 Mini LinkedIn-like Community Platform

A mini social networking platform where users can register, create professional posts, and engage with others – inspired by LinkedIn.

---

### 🔗 GitHub Repo  
**[GitHub Repository](https://github.com/Roodius/Mini-LinkedIn-like-Community-Platform)**

### 🚀 Live Demo  
**[Live on Vercel / Render](https://mini-linkedin-clone.vercel.app)**  ---trying
*(replace with your actual live URL)*

---

### 🛠 Tech Stack

**Frontend:**
- React.js
- TypeScript
- Tailwind CSS

**Backend:**
- Node.js
- Express.js
- MongoDB
- Mongoose
- Socket.IO (for real-time features)
- dotenv (for environment configs)

**Dev Tools:**
- Vite (React)
- TypeScript
- Postman (API testing)
- Git & GitHub
- Render/Vercel for Deployment

---

###  Setup Instructions

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Roodius/Mini-LinkedIn-like-Community-Platform.git
   cd Mini-LinkedIn-like-Community-Platform
   ```

2. **Setup the backend:**
   ```bash
   cd community-server
   npm install
   touch .env
   ```
   Add the following to `.env`:
   ```env
   jwt_secret=your_jwt_secret
   db_link=your_mongo_uri
   ```
   Then run:
   ```bash
   npm run dev
   ```

3. **Setup the frontend:**
   ```bash
   cd ../community-client
   npm install
   npm run dev
   ```

4. **Visit the app:**
   ```
   http://localhost:5173
   ```

---

### 👨‍💻 Admin / Demo User Logins

> You can add these in your seed or use dummy credentials.

- **Demo User:**
  - Email: `demo@user.com`
  - Password: `demopass123`

- **Admin:**
  - Email: `admin@platform.com`
  - Password: `admin1234`

---

### Extra Features

- JWT-based user authentication
- Role-based access handling (User/Admin)
- Responsive UI with TailwindCSS
- Deployed on Vercel and Render  --- trying

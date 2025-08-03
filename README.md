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

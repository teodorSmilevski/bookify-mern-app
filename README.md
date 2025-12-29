# Bookify - Appointment Booking System

A simple and fast appointment booking application built with the MERN stack. Designed for small businesses that need easy scheduling without complex user registration.

## Tech Stack

**Frontend:**

- React 19.2.0
- TypeScript 5.9.3
- Vite 7.2.4
- Sass (SCSS)
- React Router DOM
- Axios

**Backend:**

- Node.js
- Express 5.2.1
- TypeScript 5.3.3
- MongoDB with Mongoose 9.0.2
- CORS enabled

**Shared:**

- TypeScript DTOs and validation utilities
- Shared constants (working hours, etc.)

## Features

- **User Booking**: Quick appointment booking with name and phone number (no registration required)
- **Real-time Availability**: See available time slots instantly
- **Working Hours**: Monday-Saturday, 10:00 AM - 6:00 PM (30-minute slots)
- **Admin Panel**: Password-protected admin dashboard to view and manage appointments
- **Input Validation**: Phone number (Macedonian format +389) and name validation
- **Local Storage**: User information persists locally

## Project Structure

```
bookify-mern-app/
├── client/          # React frontend
├── server/          # Express backend
├── shared/          # Shared TypeScript types and utilities
└── docs/            # Project documentation
```

## Documentation

Detailed documentation can be found in the `/docs` folder:

- `requirements.md` - Functional requirements
- `specifications.md` - Technical specifications
- `architecture-design.md` - System architecture
- `implementation-plan.md` - Development roadmap
- `acceptance-tests.md` - Test scenarios

## License

ISC

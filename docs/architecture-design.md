# Architecture Design

## Technology Stack

**Frontend:**

- React 19.2.0 with TypeScript 5.9.3
- Vite 7.2.4 (build tool)
- React Router DOM (routing)
- Sass with BEM methodology (styling)
- Axios (HTTP client)
- Context API (state management)

**Backend:**

- Node.js with Express 5.2.1
- TypeScript 5.3.3
- MongoDB with Mongoose 9.0.2
- ts-node-dev (development)
- tsconfig-paths (path alias resolution)
- CORS enabled for cross-origin requests

**Shared:**

- TypeScript DTOs and interfaces
- Validation utilities
- Constants (working hours)
- Centralized in `/shared` folder

**Database:**

- MongoDB (document-based NoSQL)
- Collections: appointments
- Indexes: Unique compound index on (date, time)

## Architecture Overview

The system follows a client-server architecture with a shared types layer. The frontend communicates with the backend via RESTful HTTP APIs.

```
[React Frontend] <--HTTP/JSON--> [Express Backend] <--> [MongoDB]
        |                              |
        +--------[Shared Types]--------+
```

### Architecture Layers

**Frontend (Client):**

- Presentation Layer: React components with SCSS
- State Management: Context API (UserContext, AdminContext)
- Service Layer: Axios-based API clients
- Routing: React Router with protected routes

**Backend (Server):**

- API Layer: Express routes
- Controller Layer: Business logic handlers
- Model Layer: Mongoose schemas
- Middleware: Error handling, CORS, 404 handler
- Configuration: Database connection, CORS settings

**Shared Layer:**

- DTOs (Data Transfer Objects)
- Validation utilities
- Constants and configuration
- Used by both client and server via TypeScript path aliases

## Project Structure

```
bookify-mern-app/
├── client/
│   ├── src/
│   │   ├── components/      # Reusable UI components
│   │   ├── features/        # Feature modules (home, auth, admin)
│   │   ├── context/         # Global state management
│   │   ├── services/        # API service layer
│   │   ├── styles/          # Global styles and variables
│   │   ├── utils/           # Helper functions
│   │   └── config/          # Configuration
│   └── vite.config.ts       # Vite configuration with path aliases
│
├── server/
│   ├── src/
│   │   ├── controllers/     # Request handlers
│   │   ├── models/          # Mongoose schemas
│   │   ├── routes/          # API route definitions
│   │   ├── middlewares/     # Express middlewares
│   │   ├── config/          # Database and CORS config
│   │   └── index.ts         # Application entry point
│   └── tsconfig.json        # TypeScript config with path aliases
│
├── shared/
│   ├── dtos/                # Data Transfer Objects
│   ├── utils/               # Shared utilities (validation)
│   ├── constants/           # Shared constants
│   └── index.ts             # Barrel exports
│
└── docs/                    # Project documentation
```

## Design Patterns

### Frontend Patterns

**Component Composition:**

- Reusable components (Button, Input, DatePicker, TimePicker)
- Feature-based organization

**BEM Methodology:**

- Block, Element, Modifier naming convention
- Scoped styles per component
- SCSS variables for design system

**Context Pattern:**

- UserContext for user authentication state
- AdminContext for admin authentication state
- Persisted to localStorage

**Custom Hooks:**

- `useBookingForm` - Encapsulates booking logic
- `useUser` - Access user context
- `useAdmin` - Access admin context

### Backend Patterns

**MVC-like Structure:**

- Models: Mongoose schemas
- Controllers: Business logic
- Routes: API endpoint definitions

**Middleware Chain:**

- CORS middleware
- JSON body parser
- Route handlers
- Error handler
- 404 handler

## Data Flow

### User Booking Flow

1. User enters name and phone → Stored in UserContext + localStorage
2. User selects date → Fetches booked slots for that date
3. TimePicker displays available slots (booked slots disabled)
4. User selects time and submits
5. Frontend validates input using shared validation
6. POST request to `/api/appointments`
7. Backend validates again (server-side validation)
8. Checks for conflicts (unique date+time)
9. Creates appointment in MongoDB
10. Returns success response
11. Frontend shows confirmation

### Admin Flow

1. Admin navigates to `/admin`
2. Enters password
3. POST to `/api/admin/login`
4. Backend validates password (from .env)
5. Returns token, stored in AdminContext + localStorage
6. Redirected to `/admin/dashboard`
7. Protected route checks AdminContext
8. Fetches appointments based on selected tab
9. Displays in table with delete buttons

## Security Considerations

**Frontend:**

- Input sanitization before sending to backend
- Protected admin routes (redirect if not authenticated)
- No sensitive data stored in localStorage

**Backend:**

- Environment variables for sensitive config (.env)
- CORS configured to allow only specific origins
- Password validation for admin access
- Input validation on all endpoints
- Unique indexes prevent data conflicts
- Error messages don't expose system details

**Database:**

- Connection string in environment variables
- Mongoose schema validation
- Compound unique index prevents double booking

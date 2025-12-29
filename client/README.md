# Bookify Frontend

React-based frontend for the Bookify appointment booking system.

## Tech Stack

- React 19.2.0 with TypeScript
- Vite for build tooling
- React Router DOM for navigation
- Sass (SCSS) for styling with BEM methodology
- Axios for API communication
- Context API for state management

## Project Structure

```
src/
├── components/       # Reusable UI components (Button, Input, DatePicker, etc.)
├── features/         # Feature-based modules (home, auth, admin)
├── context/          # React Context (UserContext, AdminContext)
├── services/         # API service layer
├── styles/           # Global styles and SCSS variables
├── utils/            # Utility functions
└── config/           # Configuration files
```

## Development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

## Environment Variables

Create a `.env` file:

```
VITE_API_URL=http://localhost:5000/api
```

## Key Features

- **Component-based architecture** with TypeScript
- **BEM naming convention** for CSS
- **Feature-based folder structure** for scalability
- **Shared types** with backend via `/shared` folder
- **Path aliases** configured for clean imports
- **Form validation** using shared validation utilities

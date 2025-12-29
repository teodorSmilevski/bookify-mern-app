# Project Specifications

## Pages

### Landing Page (Home)

- Hero section with booking focus
- Info cards displaying working hours and key features
- User booking form with date and time selection
- Displays available time slots (booked slots are disabled)
- Shows user's existing appointments if logged in

### Login Page

- Simple form for entering name and phone number
- Phone number format: +389 (Macedonian format)
- Saves user information to localStorage
- No password required (identifier-based system)

### Admin Login Page

- Password-protected access at `/admin`
- Single password authentication (no user accounts)
- Redirects to admin dashboard on success

### Admin Dashboard

- Three tabs: Today, This Week, All Upcoming
- Lists appointments with date, time, name, and phone number
- Delete functionality with confirmation dialog
- Logout button

### Not Found Page

- 404 error page for invalid routes

## API Endpoints

### Appointments

**POST /api/appointments**

- Creates a new appointment
- Request body: `{ name, phoneNumber, date, time }`
- Validates unique date+time combination
- Validates phone number format (13-14 chars, +389 prefix)
- Validates name (2-30 characters)
- Returns: `{ message, data: Appointment }`

**GET /api/appointments**

- Returns a list of all appointments
- Sorted by date and time
- Returns: `{ message, count, data: Appointment[] }`

**GET /api/appointments/weekly**

- Returns appointments for the current week
- Filters by current week (Sunday-Saturday)
- Returns: `{ message, count, data: Appointment[] }`

**DELETE /api/appointments/:id**

- Deletes an appointment by MongoDB \_id
- Returns: `{ message }`

### Admin

**POST /api/admin/login**

- Admin authentication with password
- Request body: `{ password }`
- Returns: `{ message, token }`

**GET /api/admin/appointments/today**

- Returns today's appointments (00:00 to 23:59)
- Returns: `{ message, count, data: Appointment[] }`

**GET /api/admin/appointments/upcoming**

- Returns all future appointments from today onwards
- Sorted by date and time
- Returns: `{ message, count, data: Appointment[] }`

## Data Models

### Appointment

- `_id`: MongoDB ObjectId (generated)
- `name`: string (2-30 characters)
- `phoneNumber`: string (+389 format, 13-14 chars total)
- `date`: Date (stored as Date object, returned as ISO string)
- `time`: string (HH:MM format, 30-minute intervals)
- `createdAt`: Date (auto-generated)
- `updatedAt`: Date (auto-generated)

**Constraints:**

- Unique compound index on (date, time) prevents double booking
- Virtual `id` field disabled to avoid conflicts

### User (LocalStorage)

- `name`: string
- `phoneNumber`: string

Stored in browser localStorage, no backend storage.

## Working Hours

- **Days**: Monday - Saturday
- **Hours**: 10:00 AM - 6:00 PM
- **Closed**: Sundays
- **Slot Duration**: 30 minutes
- **Time Slots**: 10:00, 10:30, 11:00, ..., 17:30

## Validation Rules

### Phone Number

- Must start with +389
- Total length: 13-14 characters (including +389 and spaces)
- Must contain 8-9 digits after +389
- Example valid formats: `+389 12345678`, `+389 123456789`

### Name

- Minimum: 2 characters
- Maximum: 30 characters
- Allowed characters: letters, spaces, hyphens, apostrophes
- Unicode characters supported (for international names)

### Date

- Must be Monday-Saturday only
- Cannot book past dates
- DatePicker automatically filters working days

### Time

- Must be within working hours (10:00-18:00)
- Must be in 30-minute intervals
- Booked slots are disabled in UI

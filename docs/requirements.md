# Requirements

This document describes the functional requirements for a simple appointment booking system intended for small businesses that need fast and easy scheduling without complex registration.

## User Requirements

1. As a user, I want to make a fast appointment with a single click.
2. As a user, I want to enter my name and phone number so that I can identify myself without creating an account.
3. As a user, I want to select a date and time for an appointment.
4. As a user, I want to see available time slots clearly, with booked slots disabled.
5. As a user, I want to see a confirmation message after booking, so that I know my booking was successful.
6. As a user, I want to see my information saved locally, in case I return to make another booking.
7. As a user, I want to be informed if a time slot is already taken before I try to book it.
8. As a user, I want to only see available booking days (Monday-Saturday, within working hours).

## Admin Requirements

1. As an admin, I want to see all booked appointments, grouped by day.
2. As an admin, I want to view today's appointments separately for quick access.
3. As an admin, I want to view appointments for the current week.
4. As an admin, I want to view all upcoming appointments.
5. As an admin, I want to delete an appointment with confirmation.
6. As an admin, I want to manage appointments easily through a simple dashboard.
7. As an admin, I want to access the admin panel with a password for security.
8. As an admin, I want to log out of the admin panel when done.

## System Requirements

1. The system must prevent double booking (same date and time).
2. The system must validate user input (name and phone number format).
3. The system must only allow bookings during working hours (Mon-Sat, 10:00-18:00).
4. The system must support 30-minute time slot intervals.
5. The system must provide clear error messages for invalid inputs.
6. The system must persist user information locally (browser storage).
7. The system must be responsive and work on mobile devices.
8. The system must provide real-time availability updates.

## Non-Functional Requirements

1. **Performance**: Page load time should be under 2 seconds.
2. **Usability**: The booking process should be completable in under 1 minute.
3. **Availability**: The system should be available during business hours.
4. **Security**: Admin panel must be password-protected.
5. **Data Integrity**: Prevent duplicate bookings through database constraints.
6. **Scalability**: Support up to 100 appointments per day.
7. **Maintainability**: Clean code structure with TypeScript for type safety.

# Project Specifications

## Pages

Landing Page - as the booking page

- Allows the user to see his appointments (if they exist)
- Allows the user to select date and time
- Allows booking an appointment

Login Page

- Allows the user to enter name and phone number
- Saves the user information locally

Admin Page

- Displays all appointments
- Allows deletion and change of appointments

## API Endpoints

POST /appointments

- Creates a new appointment

GET /appointments

- Returns a list of all appointments

DELETE /appointments/{id}

- Deletes an appointment

## Data Models

Appointment

- id
- name
- phoneNumber
- date
- time
- createdAt

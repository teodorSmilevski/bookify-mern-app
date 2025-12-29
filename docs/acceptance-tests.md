# Acceptance Tests

## User Booking Tests

### Test 1: Successful Appointment Booking

**Given** a user enters valid name and phone number  
**When** the user selects a date and time  
**Then** the appointment is successfully created  
**And** a confirmation message is displayed

### Test 2: Prevent Double Booking

**Given** an appointment already exists for a selected date and time  
**When** another user tries to book the same slot  
**Then** the system prevents double booking  
**And** the time slot is shown as disabled/unavailable

### Test 3: Form Validation

**Given** a user submits the form with empty fields  
**When** the booking is submitted  
**Then** the system displays an error message  
**And** the appointment is not created

### Test 4: Phone Number Validation

**Given** a user enters an invalid phone number format  
**When** the user attempts to book  
**Then** the system displays a validation error  
**And** specifies the correct format (+389 with 8-9 digits)

### Test 5: Name Validation

**Given** a user enters a name longer than 30 characters  
**When** the user attempts to book  
**Then** the system displays a validation error  
**And** prevents submission

### Test 6: Working Days Only

**Given** a user opens the date picker  
**When** viewing the calendar  
**Then** only Monday-Saturday dates are selectable  
**And** Sundays are disabled

### Test 7: Working Hours Only

**Given** a user selects a valid date  
**When** viewing available time slots  
**Then** only slots between 10:00 and 18:00 are displayed  
**And** slots are in 30-minute intervals

### Test 8: Real-time Availability

**Given** appointments exist for a selected date  
**When** the user views time slots  
**Then** booked slots are visually disabled  
**And** only available slots can be selected

### Test 9: User Information Persistence

**Given** a user enters their name and phone number  
**When** the user books an appointment  
**Then** their information is saved to localStorage  
**And** pre-fills on their next visit

## Admin Panel Tests

### Test 10: Admin Login

**Given** an admin navigates to /admin  
**When** the correct password is entered  
**Then** the admin is redirected to the dashboard  
**And** authentication token is stored

### Test 11: Admin Login - Invalid Password

**Given** an admin navigates to /admin  
**When** an incorrect password is entered  
**Then** an error message is displayed  
**And** access is denied

### Test 12: View Today's Appointments

**Given** the admin is logged in  
**When** the "Today" tab is selected  
**Then** all appointments for today are displayed  
**And** no past or future appointments are shown

### Test 13: View Weekly Appointments

**Given** the admin is logged in  
**When** the "This Week" tab is selected  
**Then** all appointments for the current week are displayed  
**And** sorted by date and time

### Test 14: View All Upcoming Appointments

**Given** the admin is logged in  
**When** the "All Upcoming" tab is selected  
**Then** all future appointments are displayed  
**And** past appointments are excluded

### Test 15: Delete Appointment

**Given** the admin views the appointments list  
**When** the delete button is clicked for an appointment  
**Then** a confirmation dialog appears  
**And** upon confirmation, the appointment is removed  
**And** the list refreshes automatically

### Test 16: Delete Appointment - Cancellation

**Given** the admin clicks delete on an appointment  
**When** the cancel button is clicked in the confirmation dialog  
**Then** the appointment is NOT deleted  
**And** remains in the list

### Test 17: Admin Logout

**Given** the admin is logged in to the dashboard  
**When** the logout button is clicked  
**Then** the admin token is cleared  
**And** the admin is redirected to the login page

### Test 18: Protected Route Access

**Given** an admin is not authenticated  
**When** attempting to access /admin/dashboard directly  
**Then** the user is redirected to /admin login page  
**And** must authenticate to proceed

## Edge Cases

### Test 19: Empty Appointments List

**Given** no appointments exist in the system  
**When** the admin views any appointment tab  
**Then** a "No appointments found" message is displayed

### Test 20: Network Error Handling

**Given** the backend is unavailable  
**When** a user attempts to book an appointment  
**Then** an error message is displayed  
**And** the user is informed to try again later

### Test 21: Concurrent Booking Attempt

**Given** two users select the same time slot simultaneously  
**When** both users submit the booking form  
**Then** only the first submission succeeds  
**And** the second user receives a conflict error  
**And** is prompted to select a different time

### Test 22: Past Date Selection Prevention

**Given** a user opens the date picker  
**When** viewing the calendar  
**Then** past dates are disabled or not selectable  
**And** only current and future dates are available

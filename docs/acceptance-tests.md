# Acceptance Tests

1. Given a user enters valid name and phone number
   When the user selects a date and time
   Then the appointment is successfully created.

2. Given an appointment already exists for a selected date and time
   When another user tries to book the same slot
   Then the system prevents double booking.

3. Given a user submits the form with empty fields
   When the booking is submitted
   Then the system displays an error message.

4. Given the admin page is opened
   When appointments exist
   Then all appointments are displayed.

5. Given the admin deletes an appointment
   When the delete action is confirmed
   Then the appointment is removed from the system.

const express = require("express");
const app = express();
const port = 4000;

// Middleware to parse JSON body in requests
app.use(express.json());

// Dashboard
// app.get("/dashboard", dashboardController.getDashboard);

app.get("/dashboard", (req, res) => {
  res.send("hello from dashboard");
});

// Authentication and Authorization
// app.post("/login", authController.login);
// app.post("/register", authController.register);
// app.post("/updateProfile", authController.updateProfile);

// Cabins

app.get("/cabins", (req, res) => {
  res.send("hello from cabins");
});

app.post("/cabins", (req, res) => {
  // Logic to create a new cabin
  res.send("Cabin created");
});

// For updateing an existing cabin
app.put("/cabins/:id", (req, res) => {
  // Logic to update a cabin
  res.send(`Cabin ${req.params.id} updated`);
});

// DELETE request to delete an existing cabin
app.delete("/cabins/:id", (req, res) => {
  // Logic to delete a cabin
  res.send(`Cabin ${req.params.id} deleted`);
});

// Bookings
// app.get("/bookings", bookingController.getAllBookings);
app.get("/bookings", (req, res) => {
  res.send("hello from bookings");
});

app.post("/bookings", (req, res) => {
  // Logic to create a new booking
  res.send("Booking created");
});

// PUT request to update an existing booking
app.put("/bookings/:id", (req, res) => {
  // Logic to update a booking
  res.send(`Booking ${req.params.id} updated`);
});

// DELETE request to delete an existing booking
app.delete("/bookings/:id", (req, res) => {
  // Logic to delete a booking
  res.send(`Booking ${req.params.id} deleted`);
});

// Check In/Out
app.get("/checkIn/:id", (req, res) => {
  res.send(`Check in id is ${req.params.id}`);
});

app.get("/checkOut/:id", (req, res) => {
  res.send(`Check in id is ${req.params.id}`);
});

// Guests
// app.get("/guests", guestController.getAllGuests);
app.get("/guests", (req, res) => {
  res.send("hello from guests");
});

// Settings and customization

app.get("/settings", (req, res) => {
  res.send("hello from guests");
});

app.put("/settings", (req, res) => {
  res.send("Successfully customized the settings");
});

// Dark mode

app.get("/darkmode", (req, res) => {
  res.send("you can change the theme of site from here");
});

// app.put("/darkMode", userController.toggleDarkMode);

app.listen(port, () => {
  console.log(`Inn Sync listening at http://localhost:${port}`);
});

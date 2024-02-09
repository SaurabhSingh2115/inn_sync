const express = require("express");
const mongoose = require("mongoose");
const app = express();
const cors = require("cors");

const connectDB = require("./db/connect");
const PORT = process.env.PORT || 4000;

const cabinSchema = new mongoose.Schema({
  name: String,
  maxCapacity: Number,
  regularPrice: Number,
  discount: Number,
  imageUrl: String,
  description: String,
});

const guestSchema = new mongoose.Schema({
  email: String,
  fullName: String,
  nationality: String,
  nationalID: String,
  countryFlag: String,
});

const bookingSchema = new mongoose.Schema({
  bookingId: String, // Use bookingId instead of id
  startDate: Date,
  endDate: Date,
  numNights: Number,
  numGuests: Number,
  totalPrice: Number,
  status: String,
  guests: { fullName: String, email: String },
  cabins: { name: String },
});

// Connect to the MongoDB database

const Cabin = mongoose.model("Cabin", cabinSchema);
const Guest = mongoose.model("Guest", guestSchema);
const Booking = mongoose.model("Booking", bookingSchema);

// Middleware to parse JSON body in requests
app.use(express.json());
// app.use(cors());
app.use(cors());
//In memory database for Cabins
let cabins = [
  {
    name: "001",
    maxCapacity: 2,
    regularPrice: 250,
    discount: 0,
    imageUrl: "https://i.imgur.com/4z2RZPy.jpg",
    description:
      "Discover the ultimate luxury getaway for couples in the cozy wooden cabin 001. Nestled in a picturesque forest, this stunning cabin offers a secluded and intimate retreat. Inside, enjoy modern high-quality wood interiors, a comfortable seating area, a fireplace and a fully-equipped kitchen. The plush king-size bed, dressed in fine linens guarantees a peaceful nights sleep. Relax in the spa-like shower and unwind on the private deck with hot tub.",
  },
  {
    name: "002",
    maxCapacity: 2,
    regularPrice: 350,
    discount: 25,
    imageUrl: "https://i.imgur.com/yVBBvT8.jpg",
    description:
      "Escape to the serenity of nature and indulge in luxury in our cozy cabin 002. Perfect for couples, this cabin offers a secluded and intimate retreat in the heart of a picturesque forest. Inside, you will find warm and inviting interiors crafted from high-quality wood, a comfortable living area, a fireplace and a fully-equipped kitchen. The luxurious bedroom features a plush king-size bed and spa-like shower. Relax on the private deck with hot tub and take in the beauty of nature.",
  },
  {
    name: "003",
    maxCapacity: 4,
    regularPrice: 300,
    discount: 0,
    imageUrl: "https://i.imgur.com/s1dlfim.jpg",
    description:
      "Experience luxury family living in our medium-sized wooden cabin 003. Perfect for families of up to 4 people, this cabin offers a comfortable and inviting space with all modern amenities. Inside, you will find warm and inviting interiors crafted from high-quality wood, a comfortable living area, a fireplace, and a fully-equipped kitchen. The bedrooms feature plush beds and spa-like bathrooms. The cabin has a private deck with a hot tub and outdoor seating area, perfect for taking in the natural surroundings.",
  },
  {
    name: "004",
    maxCapacity: 4,
    regularPrice: 500,
    discount: 50,
    imageUrl: "https://i.imgur.com/UNuRPMN.jpg",
    description:
      "Indulge in the ultimate luxury family vacation in this medium-sized cabin 004. Designed for families of up to 4, this cabin offers a sumptuous retreat for the discerning traveler. Inside, the cabin boasts of opulent interiors crafted from the finest quality wood, a comfortable living area, a fireplace, and a fully-equipped gourmet kitchen. The bedrooms are adorned with plush beds and spa-inspired en-suite bathrooms. Step outside to your private deck and soak in the natural surroundings while relaxing in your own hot tub.",
  },
  {
    name: "005",
    maxCapacity: 6,
    regularPrice: 350,
    discount: 0,
    imageUrl: "https://i.imgur.com/vkVlrVp.jpg",
    description:
      "Enjoy a comfortable and cozy getaway with your group or family in our spacious cabin 005. Designed to accommodate up to 6 people, this cabin offers a secluded retreat in the heart of nature. Inside, the cabin features warm and inviting interiors crafted from quality wood, a living area with fireplace, and a fully-equipped kitchen. The bedrooms are comfortable and equipped with en-suite bathrooms. Step outside to your private deck and take in the natural surroundings while relaxing in your own hot tub.",
  },
  {
    name: "006",
    maxCapacity: 6,
    regularPrice: 800,
    discount: 100,
    imageUrl: "https://i.imgur.com/tSaVOGn.jpg",
    description:
      "Experience the epitome of luxury with your group or family in our spacious wooden cabin 006. Designed to comfortably accommodate up to 6 people, this cabin offers a lavish retreat in the heart of nature. Inside, the cabin features opulent interiors crafted from premium wood, a grand living area with fireplace, and a fully-equipped gourmet kitchen. The bedrooms are adorned with plush beds and spa-like en-suite bathrooms. Step outside to your private deck and soak in the natural surroundings while relaxing in your own hot tub.",
  },
  {
    name: "007",
    maxCapacity: 8,
    regularPrice: 600,
    discount: 100,
    imageUrl: "https://i.imgur.com/sYtiqEH.jpg",
    description:
      "Accommodate your large group or multiple families in the spacious and grand wooden cabin 007. Designed to comfortably fit up to 8 people, this cabin offers a secluded retreat in the heart of beautiful forests and mountains. Inside, the cabin features warm and inviting interiors crafted from quality wood, multiple living areas with fireplace, and a fully-equipped kitchen. The bedrooms are comfortable and equipped with en-suite bathrooms. The cabin has a private deck with a hot tub and outdoor seating area, perfect for taking in the natural surroundings.",
  },
  {
    name: "008",
    maxCapacity: 10,
    regularPrice: 1400,
    discount: 0,
    imageUrl: "https://i.imgur.com/jz1PaJN.jpg",
    description:
      "Experience the epitome of luxury and grandeur with your large group or multiple families in our grand cabin 008. This cabin offers a lavish retreat that caters to all your needs and desires. The cabin features an opulent design and boasts of high-end finishes, intricate details and the finest quality wood throughout. Inside, the cabin features multiple grand living areas with fireplaces, a formal dining area, and a gourmet kitchen that is a chef's dream. The bedrooms are designed for ultimate comfort and luxury, with plush beds and en-suite spa-inspired bathrooms. Step outside and immerse yourself in the beauty of nature from your private deck, featuring a luxurious hot tub and ample seating areas for ultimate relaxation and enjoyment.",
  },
];

//bookings

let bookings = [
  {
    bookingId: "1",
    startDate: "2024-02-07",
    endDate: "2024-02-12",
    numNights: 4,
    numGuests: 2,
    totalPrice: 1000,
    status: "checked-in",
    guests: { fullName: "John Doe", email: "john.doe@gmail.com" },
    cabins: { name: "Cabin 1" },
  },
  {
    bookingId: "2",
    startDate: "2024-02-10",
    endDate: "2024-02-15",
    numNights: 5,
    numGuests: 3,
    totalPrice: 1400,
    status: "unconfirmed",
    guests: { fullName: "Jane Smith", email: "jane.smith@gmail.com" },
    cabins: { name: "Cabin 2" },
  },
  {
    bookingId: "3",
    startDate: "2024-02-15",
    endDate: "2024-02-21",
    numNights: 6,
    numGuests: 2,
    totalPrice: 1200,
    status: "checked-in",
    guests: { fullName: "Chris Brown", email: "chris.brown@gmail.com" },
    cabins: { name: "Cabin 3" },
  },
  {
    bookingId: "4",
    startDate: "2024-02-14",
    endDate: "2024-02-16",
    numNights: 2,
    numGuests: 1,
    totalPrice: 700,
    status: "checked-in",
    guests: { fullName: "William", email: "william@gmail.com" },
    cabins: { name: "Cabin 4" },
  },
  {
    bookingId: "5",
    startDate: "2024-02-20",
    endDate: "2024-02-26",
    numNights: 5,
    numGuests: 2,
    totalPrice: 1400,
    status: "unconfirmed",
    guests: { fullName: "Nina", email: "nina@gmail.com" },
    cabins: { name: "Cabin 5" },
  },
  {
    bookingId: "6",
    startDate: "2024-02-20",
    endDate: "2024-02-26",
    numNights: 5,
    numGuests: 2,
    totalPrice: 1500,
    status: "unconfirmed",
    guests: { fullName: "Rhea", email: "rhea@gmail.com" },
    cabins: { name: "Cabin 6" },
  },
  {
    bookingId: "7",
    startDate: "2024-02-20",
    endDate: "2024-02-26",
    numNights: 5,
    numGuests: 2,
    totalPrice: 1400,
    status: "checked-in",
    guests: { fullName: "Mia", email: "mia@gmail.com" },
    cabins: { name: "Cabin 7" },
  },
  {
    bookingId: "8",
    startDate: "2024-02-20",
    endDate: "2024-02-26",
    numNights: 5,
    numGuests: 2,
    totalPrice: 1400,
    status: "unconfirmed",
    guests: { fullName: "Rani", email: "rani@gmail.com" },
    cabins: { name: "Cabin 5" },
  },
  {
    bookingId: "9",
    startDate: "2024-02-9",
    endDate: "2024-02-14",
    numNights: 5,
    numGuests: 2,
    totalPrice: 1500,
    status: "checked-in",
    guests: { fullName: "Jay", email: "jay@gmail.com" },
    cabins: { name: "Cabin 3" },
  },
  {
    bookingId: "10",
    startDate: "2024-02-11",
    endDate: "2024-02-13",
    numNights: 2,
    numGuests: 2,
    totalPrice: 1000,
    status: "unconfirmed",
    guests: { fullName: "Chad", email: "chad@gmail.com" },
    cabins: { name: "Cabin 5" },
  },
  {
    bookingId: "11",
    startDate: "2024-02-20",
    endDate: "2024-02-24",
    numNights: 4,
    numGuests: 2,
    totalPrice: 1400,
    status: "unconfirmed",
    guests: { fullName: "Mongrel", email: "mongrel@gmail.com" },
    cabins: { name: "Cabin 4" },
  },
  {
    bookingId: "12",
    startDate: "2024-02-20",
    endDate: "2024-02-26",
    numNights: 4,
    numGuests: 2,
    totalPrice: 1400,
    status: "unconfirmed",
    guests: { fullName: "Alex", email: "alex@gmail.com" },
    cabins: { name: "Cabin 6" },
  },
];

// in memory guests database.

let guests = [
  {
    // id: 1000,
    fullName: "Jonas Schmedtmann",
    email: "hello@jonas.io",
    nationality: "Portugal",
    nationalID: "3525436345",
    countryFlag: "https://flagcdn.com/pt.svg",
  },
  {
    fullName: "Jonathan Smith",
    email: "johnsmith@test.eu",
    nationality: "Great Britain",
    nationalID: "4534593454",
    countryFlag: "https://flagcdn.com/gb.svg",
  },
  {
    fullName: "Jonatan Johansson",
    email: "jonatan@example.com",
    nationality: "Finland",
    nationalID: "9374074454",
    countryFlag: "https://flagcdn.com/fi.svg",
  },
  {
    fullName: "Jonas Mueller",
    email: "jonas@example.eu",
    nationality: "Germany",
    nationalID: "1233212288",
    countryFlag: "https://flagcdn.com/de.svg",
  },
  {
    fullName: "Jonas Anderson",
    email: "anderson@example.com",
    nationality: "Bolivia (Plurinational State of)",
    nationalID: "0988520146",
    countryFlag: "https://flagcdn.com/bo.svg",
  },
  {
    fullName: "Jonathan Williams",
    email: "jowi@gmail.com",
    nationality: "United States of America",
    nationalID: "633678543",
    countryFlag: "https://flagcdn.com/us.svg",
  },

  {
    fullName: "Emma Watson",
    email: "emma@gmail.com",
    nationality: "United Kingdom",
    nationalID: "1234578901",
    countryFlag: "https://flagcdn.com/gb.svg",
  },
  {
    fullName: "Mohammed Ali",
    email: "mohammedali@yahoo.com",
    nationality: "Egypt",
    nationalID: "987543210",
    countryFlag: "https://flagcdn.com/eg.svg",
  },
  {
    fullName: "Maria Rodriguez",
    email: "maria@gmail.com",
    nationality: "Spain",
    nationalID: "1098765321",
    countryFlag: "https://flagcdn.com/es.svg",
  },
  {
    fullName: "Li Mei",
    email: "li.mei@hotmail.com",
    nationality: "China",
    nationalID: "102934756",
    countryFlag: "https://flagcdn.com/cn.svg",
  },
  {
    fullName: "Khadija Ahmed",
    email: "khadija@gmail.com",
    nationality: "Sudan",
    nationalID: "1023457890",
    countryFlag: "https://flagcdn.com/sd.svg",
  },
  {
    fullName: "Gabriel Silva",
    email: "gabriel@gmail.com",
    nationality: "Brazil",
    nationalID: "109283465",
    countryFlag: "https://flagcdn.com/br.svg",
  },
  {
    fullName: "Maria Gomez",
    email: "maria@example.com",
    nationality: "Mexico",
    nationalID: "108765421",
    countryFlag: "https://flagcdn.com/mx.svg",
  },
  {
    fullName: "Ahmed Hassan",
    email: "ahmed@gmail.com",
    nationality: "Egypt",
    nationalID: "1077777777",
    countryFlag: "https://flagcdn.com/eg.svg",
  },
  {
    fullName: "John Doe",
    email: "johndoe@gmail.com",
    nationality: "United States",
    nationalID: "3245908744",
    countryFlag: "https://flagcdn.com/us.svg",
  },
  {
    fullName: "Fatima Ahmed",
    email: "fatima@example.com",
    nationality: "Pakistan",
    nationalID: "1089999363",
    countryFlag: "https://flagcdn.com/pk.svg",
  },
  {
    fullName: "David Smith",
    email: "david@gmail.com",
    nationality: "Australia",
    nationalID: "44450960283",
    countryFlag: "https://flagcdn.com/au.svg",
  },
  {
    fullName: "Marie Dupont",
    email: "marie@gmail.com",
    nationality: "France",
    nationalID: "06934233728",
    countryFlag: "https://flagcdn.com/fr.svg",
  },
  {
    fullName: "Ramesh Patel",
    email: "ramesh@gmail.com",
    nationality: "India",
    nationalID: "9875412303",
    countryFlag: "https://flagcdn.com/in.svg",
  },
  {
    fullName: "Fatimah Al-Sayed",
    email: "fatimah@gmail.com",
    nationality: "Kuwait",
    nationalID: "0123456789",
    countryFlag: "https://flagcdn.com/kw.svg",
  },
  {
    fullName: "Nina Williams",
    email: "nina@hotmail.com",
    nationality: "South Africa",
    nationalID: "2345678901",
    countryFlag: "https://flagcdn.com/za.svg",
  },
  {
    fullName: "Taro Tanaka",
    email: "taro@gmail.com",
    nationality: "Japan",
    nationalID: "3456789012",
    countryFlag: "https://flagcdn.com/jp.svg",
  },
  {
    fullName: "Abdul Rahman",
    email: "abdul@gmail.com",
    nationality: "Saudi Arabia",
    nationalID: "4567890123",
    countryFlag: "https://flagcdn.com/sa.svg",
  },
  {
    fullName: "Julie Nguyen",
    email: "julie@gmail.com",
    nationality: "Vietnam",
    nationalID: "5678901234",
    countryFlag: "https://flagcdn.com/vn.svg",
  },
  {
    fullName: "Sara Lee",
    email: "sara@gmail.com",
    nationality: "South Korea",
    nationalID: "6789012345",
    countryFlag: "https://flagcdn.com/kr.svg",
  },
  {
    fullName: "Carlos Gomez",
    email: "carlos@yahoo.com",
    nationality: "Colombia",
    nationalID: "7890123456",
    countryFlag: "https://flagcdn.com/co.svg",
  },
  {
    fullName: "Emma Brown",
    email: "emma@gmail.com",
    nationality: "Canada",
    nationalID: "8901234567",
    countryFlag: "https://flagcdn.com/ca.svg",
  },
  {
    fullName: "Juan Hernandez",
    email: "juan@yahoo.com",
    nationality: "Argentina",
    nationalID: "4343433333",
    countryFlag: "https://flagcdn.com/ar.svg",
  },
  {
    fullName: "Ibrahim Ahmed",
    email: "ibrahim@yahoo.com",
    nationality: "Nigeria",
    nationalID: "2345678009",
    countryFlag: "https://flagcdn.com/ng.svg",
  },
  {
    fullName: "Mei Chen",
    email: "mei@gmail.com",
    nationality: "Taiwan",
    nationalID: "3456117890",
    countryFlag: "https://flagcdn.com/tw.svg",
  },
];

//connection

connectDB()
  .then(async () => {
    console.log("Connected to MongoDB");

    // Save cabins to the database
    const existingCabins = await Cabin.find();
    if (existingCabins.length === 0) {
      for (let cabinData of cabins) {
        const cabin = new Cabin(cabinData);
        await cabin.save();
      }
    }

    const existingBookings = await Booking.find();
    if (existingBookings.length === 0) {
      for (let bookingData of bookings) {
        const booking = new Booking(bookingData);
        await booking.save();
      }
    }

    const existingGuests = await Guest.find();

    if (existingGuests.length === 0) {
      for (let guestData of guests) {
        const guest = new Guest(guestData);
        await guest.save();
      }
    }
  })
  .catch((error) => {
    console.error("Failed to connect to MongoDB", error);
  });

// Dashboard
app.get("/dashboard", (req, res) => {
  res.send("Hello from dashboard");
});

//Cabins
app.get("/cabins", async (req, res) => {
  const cabins = await Cabin.find();
  res.json(cabins);
});

app.get("/cabins/:name", async (req, res) => {
  const cabin = await Cabin.findOne({ name: req.params.name });
  if (!cabin) res.status(404).send("Cabin not found");
  res.json(cabin);
});

app.post("/cabins", async (req, res) => {
  const cabin = new Cabin(req.body);
  await cabin.save();
  res.status(201).send(cabin);
});

app.put("/cabins/:name", async (req, res) => {
  const cabin = await Cabin.findOneAndUpdate(
    { name: req.params.name },
    req.body,
    { new: true }
  );
  if (!cabin) res.status(404).send("Cabin not found");
  res.json(cabin);
});

app.delete("/cabins/:name", async (req, res) => {
  await Cabin.findOneAndDelete({ name: req.params.name });
  res.status(204).send();
});

// Get all bookings
app.get("/bookings", async (req, res) => {
  const bookings = await Booking.find();
  res.json(bookings);
});

// Get a booking by bookingId
app.get("/bookings/:bookingId", async (req, res) => {
  const booking = await Booking.findOne({ bookingId: req.params.bookingId });
  if (!booking) res.status(404).send("Booking not found");
  res.json(booking);
});

// Create a new booking
app.post("/bookings", async (req, res) => {
  const booking = new Booking(req.body);
  const result = await booking.save();
  if (result) {
    res.status(201).send(result);
  } else {
    res.status(500).send("Error creating booking.");
  }
});

// Update a booking by bookingId
app.put("/bookings/:bookingId", async (req, res) => {
  const booking = await Booking.findOneAndUpdate(
    { bookingId: req.params.bookingId },
    req.body,
    { new: true }
  );
  if (!booking) res.status(404).send("Booking not found");
  res.json(booking);
});

// Delete a booking by bookingId
app.delete("/bookings/:bookingId", async (req, res) => {
  const result = await Booking.findOneAndDelete({
    bookingId: req.params.bookingId,
  });
  if (result) {
    res.status(204).send();
  } else {
    res.status(404).send("Booking not found");
  }
});
// Check In/Out
app.get("/checkIn/:id", (req, res) => {
  res.send(`Check in id is ${req.params.id}`);
});

app.get("/checkOut/:id", (req, res) => {
  res.send(`Check in id is ${req.params.id}`);
});

// Guests
app.get("/guests", async (req, res) => {
  const guests = await Guest.find();
  res.json(guests);
});

app.get("/guests/:fullName", async (req, res) => {
  const guest = await Guest.findOne({ fullName: req.params.fullName });
  if (!guest) res.status(404).send("Guest not found");
  res.json(guest);
});

app.post("/guests", async (req, res) => {
  // console.log(req.body);
  const guest = new Guest(req.body);
  await guest.save();
  res.status(201).send(guest);
});

app.put("/guests/:fullName", async (req, res) => {
  const guest = await Guest.findOneAndUpdate(
    { fullName: req.params.fullName },
    req.body,
    { new: true }
  );
  if (!guest) res.status(404).send("Guest not found");
  res.json(guest);
});

app.patch("/guests/:fullName", async (req, res) => {
  const guest = await Guest.findOneAndUpdate(
    { fullName: req.params.fullName },
    req.body,
    { new: true }
  );
  if (!guest) res.status(404).send("Guest not found");
  res.json(guest);
});

app.delete("/guests/:fullName", async (req, res) => {
  await Guest.findOneAndDelete({ fullName: req.params.fullName });
  res.status(204).send();
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

app.listen(PORT, () => {
  console.log(`Inn Sync listening at http://localhost:${PORT}`);
});

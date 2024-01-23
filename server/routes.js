const express = require("express");
const app = express();
const port = 4000;

// Middleware to parse JSON body in requests
app.use(express.json());

//In memory database for Cabins
let cabins = [
  {
    name: "001",
    maxCapacity: 2,
    regularPrice: 250,
    discount: 0,
    // image: imageUrl + "cabin-001.jpg",
    description:
      "Discover the ultimate luxury getaway for couples in the cozy wooden cabin 001. Nestled in a picturesque forest, this stunning cabin offers a secluded and intimate retreat. Inside, enjoy modern high-quality wood interiors, a comfortable seating area, a fireplace and a fully-equipped kitchen. The plush king-size bed, dressed in fine linens guarantees a peaceful nights sleep. Relax in the spa-like shower and unwind on the private deck with hot tub.",
  },
  {
    name: "002",
    maxCapacity: 2,
    regularPrice: 350,
    discount: 25,
    // image: imageUrl + "cabin-002.jpg",
    description:
      "Escape to the serenity of nature and indulge in luxury in our cozy cabin 002. Perfect for couples, this cabin offers a secluded and intimate retreat in the heart of a picturesque forest. Inside, you will find warm and inviting interiors crafted from high-quality wood, a comfortable living area, a fireplace and a fully-equipped kitchen. The luxurious bedroom features a plush king-size bed and spa-like shower. Relax on the private deck with hot tub and take in the beauty of nature.",
  },
  {
    name: "003",
    maxCapacity: 4,
    regularPrice: 300,
    discount: 0,
    // image: imageUrl + "cabin-003.jpg",
    description:
      "Experience luxury family living in our medium-sized wooden cabin 003. Perfect for families of up to 4 people, this cabin offers a comfortable and inviting space with all modern amenities. Inside, you will find warm and inviting interiors crafted from high-quality wood, a comfortable living area, a fireplace, and a fully-equipped kitchen. The bedrooms feature plush beds and spa-like bathrooms. The cabin has a private deck with a hot tub and outdoor seating area, perfect for taking in the natural surroundings.",
  },
  {
    name: "004",
    maxCapacity: 4,
    regularPrice: 500,
    discount: 50,
    // image: imageUrl + "cabin-004.jpg",
    description:
      "Indulge in the ultimate luxury family vacation in this medium-sized cabin 004. Designed for families of up to 4, this cabin offers a sumptuous retreat for the discerning traveler. Inside, the cabin boasts of opulent interiors crafted from the finest quality wood, a comfortable living area, a fireplace, and a fully-equipped gourmet kitchen. The bedrooms are adorned with plush beds and spa-inspired en-suite bathrooms. Step outside to your private deck and soak in the natural surroundings while relaxing in your own hot tub.",
  },
  {
    name: "005",
    maxCapacity: 6,
    regularPrice: 350,
    discount: 0,
    // image: imageUrl + "cabin-005.jpg",
    description:
      "Enjoy a comfortable and cozy getaway with your group or family in our spacious cabin 005. Designed to accommodate up to 6 people, this cabin offers a secluded retreat in the heart of nature. Inside, the cabin features warm and inviting interiors crafted from quality wood, a living area with fireplace, and a fully-equipped kitchen. The bedrooms are comfortable and equipped with en-suite bathrooms. Step outside to your private deck and take in the natural surroundings while relaxing in your own hot tub.",
  },
  {
    name: "006",
    maxCapacity: 6,
    regularPrice: 800,
    discount: 100,
    // image: imageUrl + "cabin-006.jpg",
    description:
      "Experience the epitome of luxury with your group or family in our spacious wooden cabin 006. Designed to comfortably accommodate up to 6 people, this cabin offers a lavish retreat in the heart of nature. Inside, the cabin features opulent interiors crafted from premium wood, a grand living area with fireplace, and a fully-equipped gourmet kitchen. The bedrooms are adorned with plush beds and spa-like en-suite bathrooms. Step outside to your private deck and soak in the natural surroundings while relaxing in your own hot tub.",
  },
  {
    name: "007",
    maxCapacity: 8,
    regularPrice: 600,
    discount: 100,
    // image: imageUrl + "cabin-007.jpg",
    description:
      "Accommodate your large group or multiple families in the spacious and grand wooden cabin 007. Designed to comfortably fit up to 8 people, this cabin offers a secluded retreat in the heart of beautiful forests and mountains. Inside, the cabin features warm and inviting interiors crafted from quality wood, multiple living areas with fireplace, and a fully-equipped kitchen. The bedrooms are comfortable and equipped with en-suite bathrooms. The cabin has a private deck with a hot tub and outdoor seating area, perfect for taking in the natural surroundings.",
  },
  {
    name: "008",
    maxCapacity: 10,
    regularPrice: 1400,
    discount: 0,
    // image: imageUrl + "cabin-008.jpg",
    description:
      "Experience the epitome of luxury and grandeur with your large group or multiple families in our grand cabin 008. This cabin offers a lavish retreat that caters to all your needs and desires. The cabin features an opulent design and boasts of high-end finishes, intricate details and the finest quality wood throughout. Inside, the cabin features multiple grand living areas with fireplaces, a formal dining area, and a gourmet kitchen that is a chef's dream. The bedrooms are designed for ultimate comfort and luxury, with plush beds and en-suite spa-inspired bathrooms. Step outside and immerse yourself in the beauty of nature from your private deck, featuring a luxurious hot tub and ample seating areas for ultimate relaxation and enjoyment.",
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

// Dashboard
app.get("/dashboard", (req, res) => {
  res.send("Hello from dashboard");
});

//Cabins

app.get("/cabins", (req, res) => {
  res.json(cabins);
});

app.get("/cabins/:name", (req, res) => {
  const cabin = cabins.find((c) => c.name === req.params.name);
  if (!cabin) res.status(404).send("Cabin not found");
  res.json(cabin);
});

app.post("/cabins", (req, res) => {
  const cabin = req.body;
  cabins.push(cabin);
  res.status(201).send(cabin);
});

app.put("/cabins/:name", (req, res) => {
  let cabin = cabins.find((c) => c.name === req.params.name);
  if (!cabin) res.status(404).send("Cabin not found");
  cabin = { ...cabin, ...req.body };
  res.json(cabin);
});

app.delete("/cabins/:name", (req, res) => {
  cabins = cabins.filter((c) => c.name !== req.params.name);
  res.status(204).send();
});

// Bookings
// app.get("/bookings", bookingController.getAllBookings);
// Get all bookings
app.get("/bookings", (req, res) => {
  res.json(bookings);
});

// Create a new booking
app.post("/bookings", (req, res) => {
  const newBooking = req.body;
  bookings.push(newBooking);
  res.send("Booking created");
});

// Update an existing booking
app.put("/bookings/:id", (req, res) => {
  const bookingId = parseInt(req.params.id);
  const updatedBooking = req.body;
  bookings = bookings.map((booking) => {
    if (booking.cabinId === bookingId) {
      return { ...booking, ...updatedBooking };
    }
    return booking;
  });
  res.send(`Booking ${bookingId} updated`);
});

// Delete an existing booking
app.delete("/bookings/:id", (req, res) => {
  const bookingId = parseInt(req.params.id);
  bookings = bookings.filter((booking) => booking.cabinId !== bookingId);
  res.send(`Booking ${bookingId} deleted`);
});
// Check In/Out
app.get("/checkIn/:id", (req, res) => {
  res.send(`Check in id is ${req.params.id}`);
});

app.get("/checkOut/:id", (req, res) => {
  res.send(`Check in id is ${req.params.id}`);
});

//Guests

app.get("/guests", (req, res) => {
  res.json(guests);
});

app.get("/guests/:name", (req, res) => {
  const guest = guests.find((g) => g.name === req.params.name);
  if (!guest) res.status(404).send("Guest not found");
  res.json(guest);
});

app.post("/guests", (req, res) => {
  const guest = req.body;
  guests.push(guest);
  res.status(201).send(guest);
});

app.put("/guests/:fullName", (req, res) => {
  let guest = cabins.find((c) => c.fullName === req.params.fullName);
  if (!guest) res.status(404).send("Guest not found");
  guest = { ...guest, ...req.body };
  res.json(guest);
});

app.delete("/guests/:fullName", (req, res) => {
  cabins = cabins.filter((g) => g.fullName !== req.params.fullName);
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

app.listen(port, () => {
  console.log(`Inn Sync listening at http://localhost:${port}`);
});

## Inn_Sync

Inn Sync is a user friendly project that addresses the challenge of effectively managing a hotel by streamlining various operations through a web-based platform. This innovative solution tackles the complexities associated with tasks like user check-ins and check-outs, sales statistics, and other related processes. By offering a centralized system, the project aims to enhance efficiency, improve guest experiences, and optimize overall hotel management.

### Demo video link:- https://drive.google.com/file/d/1lam4CO6MOCr47Y64ewWkE9BLhg_3uwPH/view?usp=sharing

### Frontend deployment link:- https://inn-sync.netlify.app/

### Backend deployment link:- https://inn-sync-ug12.onrender.com/

### API Documentation:- https://documenter.getpostman.com/view/32409759/2s9YymHkUC

### Key Features

- Dashboard

  - The initial app screen is a dashboard to display important information for the last 3 months.
  - A list of guests checking in and out on the current day.
  - Statistics on recent bookings, sales, check-ins, and occupancy rate.
  - A chart showing all daily hotel sales, showing both "total" sales and "extras" sales.
  - A representaion showing statistics on stay durations.
    ![Alt text]https://i.imgur.com/RuzyXqP.png

- Authentication and Authorization

  - Users of the app are hotel employees. They can logged in into the application to perform tasks.
  - Ensuring only actual hotel employees can get accounts.
  - Users able to upload an avatar, and change their name and password
    ![Alt text]https://i.imgur.com/3FRlSF4.png

- Cabins

  - Tabled view with all cabins, showing the cabin photo, name, capacity, price, and current discount.
  - Users are able to update, delete or create new cabins.
    ![Alt text]https://i.imgur.com/KOQmXvS.png

- Bookings

  - The app has a tabled view with all the bookings, showing their arrival and departure dates, status, and paid amount, as well as cabin and guest data.
  - The booking status can filtered by "unconfirmed", "checked in", or "checked out" status.
  - Other booking data includes: the number of guests, number of nights, guest observations, whether they booked breakfast, breakfast price.
    ![Alt test]https://i.imgur.com/8VFZRBA.png

- Check In/Out

  - Users are able to delete, check-in, or check out a booking as the guest arrives (no editing necessary for now).
  - Confirming that payment has been received or not.
  - On check-in, breakfast should be provided if asked.

- Guests

  - Guest data contain full name, email, national ID, nationality, and a country flag for easy identification.

- Settings and customization

  - Users are able to define a few application-wide settings: breakfast price, min and max nights/booking, max guests/booking etc.
    ![Alt test]https://i.imgur.com/dyX04kd.png

- Dark mode.

  - Users are able to switch between Light and Dark Mode.

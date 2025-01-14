const printBookingHistory = require("../print-booking-history");

test("prints passengers bookings", () => {
  const passengers = {
    name: "Mücahid",
    bookings: [
      {
        passenger: { name: "Client" },
        driver: { name: "Eyüp" },
        origin: "Kuzguncuk",
        destination: "Beykoz",
      },
    ],
  };

  const consoleSpy = jest.spyOn(console, "log");
  printBookingHistory(passengers);

  expect(consoleSpy).toHaveBeenCalledWith(
    "Client booked Eyüp wants to travel from Kuzguncuk to Beykoz"
  );
  consoleSpy.mockRestore();
});

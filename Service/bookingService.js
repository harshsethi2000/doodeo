const bookingModels = require("../Model/bookings");
const artistModel = require("../Model/artist");
const bookingService = () => {
  const service = {
    createBook: async (start_time_epoch, user_id, artist_id) => {
      try {
        const artist = await artistModel
          .findOne({ _id: artist_id })
          .lean()
          .exec();
        const end_time_epoch = start_time_epoch + artist?.sessionDuration;
        const booking = new bookingModels();
        booking.start_time_epoch = start_time_epoch;
        booking.end_time = end_time_epoch;
        booking.user_id = user_id;
        booking.artist_id = artist_id;
        booking.status = "BLOCKED";

        const response = await booking.save();
        return response;
      } catch (err) {
        console.error(e);
        throw e;
      }
    },
    getDatesForBooking: async (artist_id) => {
      try {
      } catch (err) {
        console.error(err);
        throw err;
      }
    },
    acceptOrRejectBooking: async (bookId, status) => {
        try
    },
  };
  return service;
};

module.exports = bookingService;

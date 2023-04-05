const bookingService = require("../Service/bookingService")();

const bookingController = () => {
  const bookController = {
    createBooking: async (req, res) => {
      try {
        const { start_time, user_id, artist_id } = req.body;
        if (!start_time || !user_id || !artist_id) {
          return res.status(500).json({
            message: "Please pass valid parameters",
          });
        }
        const result = await bookingService.createBook(
          start_time,
          user_id,
          artist_id
        );
        return res.status(200).json({
          message: "success",
          data: result,
        });
      } catch (err) {
        console.error(err);
        return res.status(500).json({
          message: "Something went wrong",
        });
      }
    },
  };
  return bookController;
};

module.exports = bookingController;

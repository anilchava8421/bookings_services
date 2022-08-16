//Import Models
import CinemaModel from "./cinema.model.js";
import httpStatus from "http-status-codes";
//Create a Class
export default class Cinema {
  async bookCinemaTicket(request, response) {
    try {
      await CinemaModel.create(request.body);
      response
        .status(httpStatus.OK)
        .send({ message: "Tickets has been booked successfully" });
    } catch (error) {
      response
        .status(httpStatus.INTERNAL_SERVER_ERROR)
        .send({ status: false, message: error.message });
    }
  }
  async cancelCinemaTicket(request, response) {
    try {
      const cinemaDetails = await CinemaModel.findByPk(request.params.id);
      if (cinemaDetails) {
        await CinemaModel.destroy({ where: { id: request.params.id } });
      }
      response
        .status(httpStatus.OK)
        .send({ message: "Tickets has been canceled successfully" });
    } catch (error) {
      response
        .status(httpStatus.INTERNAL_SERVER_ERROR)
        .send({ status: false, message: error.message });
    }
  }
}

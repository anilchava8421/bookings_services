//Import Modules or Paths
import Sequelize from "sequelize";
import sequelize from "../utility/rds.sequelize.js";
//Create a Schema
const CinemaSchema = sequelize.define("BookCinema", {
  movieName: {
    type: Sequelize.STRING,
    required: true,
    trim: true,
    lowercase: true,
  },
  description: {
    type: Sequelize.STRING,
    required: true,
    trim: true,
    lowercase: true,
  },
  ticketPrice: {
    type: Sequelize.INTEGER,
    required: true,
  },
  totalPrice: {
    type: Sequelize.INTEGER,
    required: true,
  },
  city: {
    type: Sequelize.STRING,
    required: true,
    trim: true,
    lowercase: true,
  },
  seats: {
    type: Sequelize.INTEGER,
    required: true,
  },
});
//Export user schema
export default CinemaSchema;

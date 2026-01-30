const express = require("express");
const cors = require("cors");

const authRoutes = require("./routes/authRoutes");
const dealRoutes = require("./routes/dealRoutes");
const claimRoutes = require("./routes/claimRoutes");

const errorHandler = require("./middleware/errorMiddleware");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/deals", dealRoutes);
app.use("/api/claims", claimRoutes);

app.use(errorHandler);

module.exports = app;

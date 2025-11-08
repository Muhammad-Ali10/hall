import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";

const app = express();

app.use(cookieParser());

app.use(cors({
    origin: "*",
    credentials: true,
}));

app.use(express.json(
    {
        limit: "100kb",
        extended: true,
        parameterLimit: 50000
    }
));

app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"))

import authRoutes from "./routes/auth.routes.js";
import hallRoutes from "./routes/hall.route.js";
import adminRoutes from "./routes/admin.routes.js";
import serviceProviderRoutes from "./routes/serviceProvider.routes.js";
import bookingRoutes from "./routes/bookings.routes.js";
import paymentRoutes from "./routes/payments.routes.js";
import cityRoutes from "./routes/city.routes.js";


router.use("/auth", authRoutes);
router.use("/halls", hallRoutes);
router.use("/admin", adminRoutes);
router.use("/service-provider", serviceProviderRoutes);
router.use("/bookings", bookingRoutes);
router.use("/payments", paymentRoutes);
router.use("/cities", cityRoutes);


export { app } 
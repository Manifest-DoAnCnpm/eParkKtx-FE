// Entry point for KTX Parking Management System
import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import mongoose from 'mongoose';

import authRoutes from './routes/auth.routes.js';
import userRoutes from './routes/user.routes.js';
import vehicleRoutes from './routes/vehicle.routes.js';
import parkingRoutes from './routes/parking.routes.js';
import paymentRoutes from './routes/payment.routes.js';
import forumRoutes from './routes/forum.routes.js';
import dashboardRoutes from './routes/dashboard.routes.js';
import contractRoutes from './routes/contract.routes.js';
import revenueRoutes from './routes/revenue.routes.js';
import slotRoutes from './routes/slot.routes.js';
import notifyRoutes from './routes/notify.routes.js';
import ktxRoutes from './routes/ktx.routes.js';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// Route mounting
app.use('/api/auth', authRoutes);
app.use('/api/users', userRoutes);
app.use('/api/vehicles', vehicleRoutes);
app.use('/api/parking', parkingRoutes);
app.use('/api/payments', paymentRoutes);
app.use('/api/forum', forumRoutes);
app.use('/api/dashboard', dashboardRoutes);
app.use('/api/contracts', contractRoutes);
app.use('/api/revenue', revenueRoutes);
app.use('/api/slots', slotRoutes);
app.use('/api/notify', notifyRoutes);
app.use('/api/ktx', ktxRoutes);

const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.MONGO_URI || 'mongodb://localhost:27017/ktx_parking')
  .then(() => {
    app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
  })
  .catch(err => {
    console.error('MongoDB connection error:', err);
  });

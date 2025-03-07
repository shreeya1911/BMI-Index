const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();
const PORT = process.env.PORT || 3000;

// MongoDB connection
mongoose.connect('mongodb://localhost:27017/healthhygiene', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
    console.log('Connected to MongoDB');
});

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Mongoose Schema
const UserProfileSchema = new mongoose.Schema({
    name: String,
    age: Number,
    gender: String,
});

const HygieneActivitySchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'UserProfile',
    },
    activity: String,
    timestamp: { type: Date, default: Date.now },
});

const UserProfile = mongoose.model('UserProfile', UserProfileSchema);
const HygieneActivity = mongoose.model('HygieneActivity', HygieneActivitySchema);

// Routes
app.post('/api/register', async (req, res) => {
    try {
        const { name, age, gender } = req.body;
        const newUser = new UserProfile({ name, age, gender });
        await newUser.save();
        res.status(201).json({ message: 'User registered successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Failed to register user' });
    }
});

app.post('/api/record', async (req, res) => {
    try {
        const { userId, activity } = req.body;
        const newActivity = new HygieneActivity({ user: userId, activity });
        await newActivity.save();
        res.status(201).json({ message: 'Activity recorded successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Failed to record activity' });
    }
});

app.get('/api/statistics', async (req, res) => {
    try {
        // Example: Calculate statistics from database
        const handwashingCount = await HygieneActivity.countDocuments({ activity: 'handwashing' });
        const teethBrushingCount = await HygieneActivity.countDocuments({ activity: 'teeth brushing' });
        const showerCount = await HygieneActivity.countDocuments({ activity: 'shower' });
        
        res.status(200).json({
            handwashing: handwashingCount,
            teethBrushing: teethBrushingCount,
            shower: showerCount,
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Failed to fetch statistics' });
    }
});

// Start server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

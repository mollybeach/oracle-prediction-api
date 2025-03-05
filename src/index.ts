// path: src/index.ts
import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';


dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// Define routes here
// app.use('/teams', teamsRouter);
// app.use('/events', eventsRouter);
// app.use('/competition', competitionRouter);

app.get('/', (req, res) => {
    res.send('Oracle NFL Integration API is running!');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});



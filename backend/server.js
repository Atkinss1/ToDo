import express  from 'express';
import pkg  from 'pg';
import cors from 'cors';

const app = express();
const PORT = 3000;
const { Client } = pkg;
const options = {
	origin: ['http://localhost:5174', 'http://localhost:5173']
};

// Enable express to parse JSON data
app.use(express.json());

// Enable CORS
app.use(cors(options));

// Initialize the database connection
const client = new Client({
  host: 'localhost',
  user: 'labber',
  password: 'labber',
  database: 'todo'
});

// Import routes
import { fetchTasksRoute } from './routes/fetchTasksRoute.js';
import { addTaskRoute } from './routes/addTaskRoute.js';
import { deleteTaskRoute } from './routes/deleteTaskRoute.js';
import { editTaskRouter } from './routes/editTaskRoute.js';
import { taskCompletedRouter } from './routes/toggleTaskCompleted.js';

// Use routes
app.use('/getTasks', fetchTasksRoute(client));
app.use('/addTask', addTaskRoute(client));
app.use('/deleteTask', deleteTaskRoute(client));
app.use('/editTask', editTaskRouter(client));
app.use('/toggleComplete', taskCompletedRouter(client));

// Connect to the database
client.connect((err) => {
  if (err) {
    console.error('Connection error', err.stack);
  } else {
    console.log('Connected to database');
  };
});

// connect to the sever
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
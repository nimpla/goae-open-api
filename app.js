import express from 'express';
import bodyParser from 'body-parser';
import todos from './db';

// Express
const app = express();

// Body Parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Routes
app.get('/api/v1/todos', (req, res, next) => {
    res.status(200).send({
      success: 'true',
      message: 'todos retrieved successfully',
      todos: todos,
    });
});

app.post('/api/v1/todos', (req, res, next) => {
    if(!req.body.title) {
        return res.status(400).send({
            success: 'false',
            message: 'title is required',
        });
    }
    else if(!req.body.description) {
        return res.status(400).send({
            success: 'false',
            message: 'description is required',
        });
    }
    const todo = {
        id: todos.length + 1,
        title: req.body.title,
        description: req.body.description,
    }
    todos.push(todo);
    return res.status(201).send({
        success: 'true',
        message: 'todo added successfully',
        todo,
    });
});

// Start Server
app.listen(3000, () => {
    console.log('Server started');
});

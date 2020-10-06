const { request } = require("express");

let todos = [
  {
    id: 1,
    title: "Eat",
    isDone: true,
  },
  {
    id: 2,
    title: "Sleep",
    isDone: true,
  },
  {
    id: 3,
    title: "Rock",
    isDone: false,
  },
];

exports.getTodos = (req, res) => {
  res.send({ data: { todos } });
};

exports.detailTodos = (req, res) => {
  const filterTodo = todos.filter((todo) => todo.id == req.params.id);
  res.send(filterTodo[0]);
};

exports.addTodos = (req, res) => {
  todos = [...todos, req.body];
  res.send({ data: todos });
};

exports.updateTodos = (req, res) => {
  const id = req.params.id;
  const body = req.body;
  const updatedTodo = todos.map((todo) =>
    todo.id == id
      ? {
          ...todo,
          title: body.title,
          isDone: body.isDone,
        }
      : todo
  );
  todos = updatedTodo;
  res.send({ data: todos });
};

exports.deleteTodos = (req, res) => {
  const { id } = req.params;
  todos = todos.filter((todo) => todo.id != id);
  res.send({ data: todos });
};

#!/usr/bin/env node

const { Command } = require('commander');
const { addTodo, removeTodo, updateTodo, listTodos, createProject, deleteProject, listProjects } = require('../lib/todo');
const program = new Command();

program
  .name('todo-cli')
  .description('CLI to manage your todo lists')
  .version('1.0.0');

// Todo commands
program
  .command('add <project> <task>')
  .description('Add a new todo')
  .action((project, task) => {
    addTodo(project, task);
  });

program
  .command('remove <project> <task>')
  .description('Remove a todo')
  .action((project, task) => {
    removeTodo(project, task);
  });

program
  .command('update <project> <oldTask> <newTask>')
  .description('Update a todo')
  .action((project, oldTask, newTask) => {
    updateTodo(project, oldTask, newTask);
  });

program
  .command('list <project>')
  .description('List todos for a project')
  .action((project) => {
    listTodos(project);
  });

// Project commands
program
  .command('create-project <project>')
  .description('Create a new project')
  .action((project) => {
    createProject(project);
  });

program
  .command('delete-project <project>')
  .description('Delete a project')
  .action((project) => {
    deleteProject(project);
  });

program
  .command('list-projects')
  .description('List all projects')
  .action(() => {
    listProjects();
  });

program.parse(process.argv);

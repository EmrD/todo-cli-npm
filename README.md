# Todo CLI

`todo-cli` is a command-line tool for managing project-based todo lists. This tool helps you create projects, add, update, and remove todos, and list existing projects and todos.

## Features

- Create new projects
- Add, update, and remove todos for projects
- List existing projects and todos

## Installation

To install the package globally via npm, use the following command:

```bash
npm install -g todo-cli
```

# Usage

To create project, run

```bash
todo-cli create-project <project-name>
```

To add TODO to a project, run

```bash
todo-cli add <project-name> <todo-task>
```

To remove TODO from a project, run

```bash
todo-cli remove <project-name> <todo-task>
```

To update TODO in a project, run

```bash
todo-cli update <project-name> <old-todo-task> <new-todo-task>
```

To delete a project, run

```bash
todo-cli delete-project <project-name>
```

To list all projects and todos, run

```bash
todo-cli list-projects
todo-cli list <project-name>
```

To get the help menu, run

```bash
todo-cli --help
```

To get the version number, run

```bash
todo-cli --version
todo-cli -V
```
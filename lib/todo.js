const fs = require('fs-extra');
const path = require('path');
const dataFile = path.join(__dirname, '../todocli/data.json');

function loadData() {
    if (!fs.existsSync(dataFile)) {
      fs.ensureFileSync(dataFile);
      fs.writeJsonSync(dataFile, { projects: {} });
    }
    return fs.readJsonSync(dataFile);
  }

function saveData(data) {
  fs.writeJsonSync(dataFile, data);
}

function addTodo(project, task) {
  const data = loadData();
  if (!data.projects[project]) data.projects[project] = [];
  data.projects[project].push(task);
  saveData(data);
  console.log(`Added task "${task}" to project "${project}"`);
}

function removeTodo(project, task) {
  const data = loadData();
  if (data.projects[project]) {
    data.projects[project] = data.projects[project].filter(t => t !== task);
    saveData(data);
    console.log(`Removed task "${task}" from project "${project}"`);
  } else {
    console.log(`Project "${project}" not found`);
  }
}

function updateTodo(project, oldTask, newTask) {
  const data = loadData();
  if (data.projects[project]) {
    const index = data.projects[project].indexOf(oldTask);
    if (index > -1) {
      data.projects[project][index] = newTask;
      saveData(data);
      console.log(`Updated task "${oldTask}" to "${newTask}" in project "${project}"`);
    } else {
      console.log(`Task "${oldTask}" not found in project "${project}"`);
    }
  } else {
    console.log(`Project "${project}" not found`);
  }
}

function listTodos(project) {
  const data = loadData();
  if (data.projects[project]) {
    console.log(`Todos for project "${project}":`);
    data.projects[project].forEach((task, index) => {
      console.log(`${index + 1}. ${task}`);
    });
  } else {
    console.log(`Project "${project}" not found`);
  }
}

function createProject(project) {
  const data = loadData();
  if (!data.projects[project]) {
    data.projects[project] = [];
    saveData(data);
    console.log(`Created new project "${project}"`);
  } else {
    console.log(`Project "${project}" already exists`);
  }
}

function deleteProject(project) {
  const data = loadData();
  if (data.projects[project]) {
    delete data.projects[project];
    saveData(data);
    console.log(`Deleted project "${project}"`);
  } else {
    console.log(`Project "${project}" not found`);
  }
}

function listProjects() {
  const data = loadData();
  console.log('Projects:');
  Object.keys(data.projects).forEach(project => {
    console.log(`- ${project}`);
  });
}

module.exports = {
  addTodo,
  removeTodo,
  updateTodo,
  listTodos,
  createProject,
  deleteProject,
  listProjects
};

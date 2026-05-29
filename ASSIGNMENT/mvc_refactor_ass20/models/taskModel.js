let tasks = [];

exports.getTasks = () => tasks;

exports.addTask = (task) => {
  tasks.push(task);
};
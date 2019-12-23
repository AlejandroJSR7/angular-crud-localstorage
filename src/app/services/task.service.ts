import { Injectable } from "@angular/core";
import { TaskModel } from "../models/task";

@Injectable({
  providedIn: "root"
})
export class TaskService {
  tasksList: TaskModel[];
  constructor() {
    this.tasksList = [
      //   { title: 'My new task', description: 'My new task description', hide: true },
      //   { title: 'My second task', description: 'My second task description', hide: true }
    ];
  }
  getTasks() {
    if (localStorage.getItem('tasks') === null) {
      return this.tasksList;
    } else {
      this.tasksList = JSON.parse(localStorage.getItem('tasks'));
      return this.tasksList;
    }
  }
  addTask(newTask: TaskModel) {
    this.tasksList.push(newTask);
    let tasks: TaskModel[] = [];
    if (localStorage.getItem('tasks') === null) {
      tasks.push(newTask);
      localStorage.setItem('tasks', JSON.stringify(tasks));
    } else {
      tasks = JSON.parse(localStorage.getItem('tasks'));
      tasks.push(newTask);
      localStorage.setItem('tasks', JSON.stringify(tasks));
    }
  }
  deleteTask(taskToDelete: TaskModel) {
    for (let i = 0; i < this.tasksList.length; i++) {
      if (taskToDelete == this.tasksList[i]) {
        this.tasksList.splice(i, 1);
        localStorage.setItem('tasks', JSON.stringify(this.tasksList));
      }
    }
  }
}

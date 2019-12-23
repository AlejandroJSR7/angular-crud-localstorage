import { Component, OnInit } from '@angular/core';
import { TaskService } from '../../services/task.service';
import { TaskModel } from '../../models/task';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent implements OnInit {

  list_tasks: TaskModel[];

  constructor(
    public TaskService: TaskService
  ) { }

  ngOnInit() {
    this.list_tasks = this.TaskService.getTasks();
  }

}

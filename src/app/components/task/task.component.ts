import { Component, OnInit, Input } from '@angular/core';
import { TaskModel } from 'src/app/models/task';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent implements OnInit {

  @Input() task: TaskModel;

  constructor(
    public TaskService: TaskService
  ) { }

  ngOnInit() {
  }
  deleteTask(taskToDelete) {
    if (confirm('Are you sure you want to delete it?')) {
      this.TaskService.deleteTask(taskToDelete);
    }
  }
}

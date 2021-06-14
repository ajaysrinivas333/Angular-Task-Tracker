import { TaskService } from './../../services/task.service';
import { Component, OnInit } from '@angular/core';
import { Task } from '../../Task';


@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
  tasks: Task[] = [];
  constructor(private taskService: TaskService) { }

  ngOnInit(): void {
    this.taskService.getTasks().subscribe((tasks) =>
    (this.tasks = tasks));
  }
  // tslint:disable-next-line: typedef
  deleteTask( task: Task){
    this.taskService.deleteTask(task).
    subscribe(() => (this.tasks =
      this.tasks.filter((t) => t.id !== task.id))
    );
  }
    // tslint:disable-next-line: semicolon
    // tslint:disable-next-line: typedef
    toggleReminder(task: Task){
      console.log('passed');
      task.reminder = !task.reminder;
      this.taskService.updateToggleReminder(task).subscribe();
    }

    // tslint:disable-next-line: typedef
    addTask(task: Task){
      this.taskService.addTask(task).subscribe((tasks) =>
      (this.tasks.push(task)));
    }
}

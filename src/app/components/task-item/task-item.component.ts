import { Component, OnInit, Input, Output , EventEmitter} from '@angular/core';
import { Task } from '../../Task';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css']
})
export class TaskItemComponent implements OnInit {
@Input() task: Task;
// tslint:disable-next-line: no-output-on-prefix
@Output() onDeleteTask: EventEmitter<Task> = new EventEmitter();
@Output() ontoggleReminder: EventEmitter<Task> = new EventEmitter();

faTimes = faTimes;

  constructor() { }

  ngOnInit(): void {
  }
  // tslint:disable-next-line: typedef
  onDelete(task){

    this.onDeleteTask.emit(task);
  }
  // tslint:disable-next-line: typedef
  onToggle(task){
    console.log('yes');
    this.ontoggleReminder.emit(task);
  }

}

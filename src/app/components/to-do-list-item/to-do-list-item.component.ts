import {Component, Input, OnInit} from '@angular/core';
import {TaskModel, ToDoListModel} from "../../models/toDoList.model";
import {FirestoreService} from "../../services/firestoreService";

@Component({
  selector: 'app-to-do-list-item',
  templateUrl: './to-do-list-item.component.html',
  styleUrls: ['./to-do-list-item.component.css']
})
export class ToDoListItemComponent implements OnInit {

  @Input() toDoList!: ToDoListModel;

  edit: boolean = false
  taskName: string = ''

  constructor(private firestoreService: FirestoreService) { }

  ngOnInit(): void {
  }

  addNewTaskToList(){
    let newTask: TaskModel ={ name: this.taskName, value: false}
    this.toDoList.Tasks.push(newTask)
    this.taskName = ''
  }

  deleteList():void {
    this.firestoreService.deleteData('checkLists', this.toDoList.id)
  }

  saveChanges():void{
    this.firestoreService.updateData('checkLists', this.toDoList, this.toDoList.id)
  }

  deleteTaskFromList(i: number) :void{
    this.toDoList.Tasks.splice(i, 1)
  }
}

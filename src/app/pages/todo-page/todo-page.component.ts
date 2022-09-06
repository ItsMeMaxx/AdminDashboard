import { Component, OnInit } from '@angular/core';
import {BehaviorSubject} from "rxjs";
import {FirestoreService} from "../../services/firestoreService";
import {TaskModel} from "../../models/toDoList.model";

@Component({
  selector: 'app-todo-page',
  templateUrl: './todo-page.component.html',
  styleUrls: ['./todo-page.component.css']
})
export class TodoPageComponent implements OnInit {

  toDoLists: BehaviorSubject<any> = new BehaviorSubject([])

  eventName: string = ''
  tasks: TaskModel[] = []
  taskName: string = ''

  constructor(private firestoreService: FirestoreService) { }

  ngOnInit(): void {
    this.firestoreService.getDataFromDatabaseAsStream('checkLists').subscribe(docs =>{
      this.toDoLists.next(docs)
    })
  }

  addTaskToList(): void{
    if(!this.taskName){
      return
    }
    let task: TaskModel = {
      name: this.taskName,
      value: false
    }
    this.tasks.push(task)
    this.taskName = ''
  }

  createList():void {
    if(!this.eventName){
      return
    }

    let data = {
      listName: this.eventName,
      Tasks: this.tasks
    }

    this.firestoreService.createData('checkLists', data)

    this.eventName = ''
    this.tasks = []
  }

  deleteTaskFromList(index: number):void {
    this.tasks.splice(index, 1)
  }
}

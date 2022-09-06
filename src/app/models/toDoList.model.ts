export interface ToDoListModel{
  id: string,
  Tasks: TaskModel[],
  listName: string
}


export interface TaskModel{
  value: boolean,
  name: string
}

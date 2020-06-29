import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-tareas',
  templateUrl: './list-tareas.component.html',
  styleUrls: ['./list-tareas.component.css']
})
export class ListTareasComponent implements OnInit {
  tarea = '';
  constructor() { }

  ngOnInit(): void {
  }

  agregarTarea(){
    console.log(this.tarea);
    this.tarea = '';
  }

}

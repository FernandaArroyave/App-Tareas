import { Component, importProvidersFrom, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { Task } from './../../models/task.model';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})

export class HomeComponent {
    tasks = signal<Task[]>([ /*Crear una lista*/ 
      {
        id: Date.now(),
        title: 'Crear proyecto',
        completed: false
      },
      {
        id: Date.now(),
        title: 'Crear componentes',
        completed: false
      },
      
    ]);

newTaskCtrl = new FormControl('',{
  nonNullable: true,
  validators:[
    Validators.required,
  ]
});

changeHandler() {
  if(this.newTaskCtrl.valid){
    const value = this.newTaskCtrl.value.trim();
  this.addTask(value);
  this.newTaskCtrl.setValue('');
  }
}

addTask(title: string) {
  if(title == "" ){
  return
  }
  
  const newTasks = {
    id: Date.now(),
    title,
    completed: false,
  };
  this.tasks.update((tasks)=> [...tasks, newTasks]) /* update permite modificar o agregar un nuevo valor 
                                                    pero no borrarlo o recetearlo desde cero  */
};
deleteTask(index:number){ /*Genera un filtro en las tareas, con base al estado anterior
                          el array con todas la tareas estamos filtrando y dejando por 
                          fuera de ese array la posicion por ende se crea un nuevo estado
                          sin esa tarea es decir se elimina*/
  this.tasks.update((tasks)=> tasks.filter((task, position) => position !== index));
};
updateTask (index: number){ /*Algoritmo basado en una posicion en especifico y utilizando el patron o el paradigama de no mutar el array  */
  this.tasks.update((tasks) =>{
    return tasks.map((task, position) =>{
      if (position === index) {
        return{
          ...task,
          completed: !task.completed
        }
      }
      return task;
    })
  })
}

}





import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-labs',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './labs.component.html',
  styleUrl: './labs.component.css'
})
export class LabsComponent {
    Welcome = 'Hola!';
    tasks = signal([ /*Crear una lista*/ 
      'Instalaa el Angular CLI',
      'Crear Proyecto',
      'Crear componentes'
    ]);
    name = signal ('Vanessa'); /* se asignan señales "signal" para que tengan reactividad */
    age = 20;
    disabled = true;
    img = 'https://th.bing.com/th/id/R.b91fd66206d4f502d454fb7496df22c5?rik=S7zpQzWO4TB5Wg&pid=ImgRaw&r=0';

    person = signal( {
      name: 'vanessa',
      age: 5,
      avatar:'https://th.bing.com/th/id/R.b91fd66206d4f502d454fb7496df22c5?rik=S7zpQzWO4TB5Wg&pid=ImgRaw&r=0'
    });

    colorCtrl = new FormControl();
    constructor(){
      this.colorCtrl.valueChanges.subscribe(value =>{
        console.log(value);
      })
    }

    clickHandler(){ /*Metodo de la clase*/
      alert('Hola')
    }
      changeHandler(event: Event){ /*Hace que cambie el valor de forma reactiva*/
        const input = event.target as HTMLInputElement;
        const newValue = input.value;
        this.name.set(newValue)
      }
      keydownHandler(event:KeyboardEvent){ /*Se recibe Detalle de que tecla se presiono, quien la presiono*/
        const input = event.target as HTMLInputElement;
        console.log(input.value);
      }

      changeAge(event: Event){ /*Hace que cambie el valor de forma reactiva con un objeto */
      const input = event.target as HTMLInputElement;
      const newValue = input.value;
      this.person.update(prevState => {
        return{
          ...prevState,
          age: parseInt(newValue, 10)
        }
      });
    }

    
    changeName(event: Event){ /*Hace que cambie el valor de forma reactiva con un objeto */
    const input = event.target as HTMLInputElement;
    const newValue = input.value;
    this.person.update(prevState => {
      return{
        ...prevState,
        name: newValue
      }
      })
    };
  }
  


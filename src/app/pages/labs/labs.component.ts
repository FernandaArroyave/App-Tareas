import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-labs',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './labs.component.html',
  styleUrl: './labs.component.css'
})
export class LabsComponent {
    Welcome = 'Hola!';
    tasks = [ /*Crear una lista*/ 
      'Instalaa el Angular CLI',
      'Crear Proyecto',
      'Crear componentes'
    ];
    name = 'Vanessa';
    age = 20;
    disabled = true;
    img = 'https://th.bing.com/th/id/R.b91fd66206d4f502d454fb7496df22c5?rik=S7zpQzWO4TB5Wg&pid=ImgRaw&r=0';

    person = {
      name: 'Vanessa',
      age: 20,
      avatar:'https://th.bing.com/th/id/R.b91fd66206d4f502d454fb7496df22c5?rik=S7zpQzWO4TB5Wg&pid=ImgRaw&r=0'
    }
    clickHandler(){ /*Metodo de la clase*/
      alert('Hola')
    }
      changeHandler(event: Event){
        console.log(event)
      }
      keydownHandler(event:KeyboardEvent){
        const input = event.target as HTMLInputElement;
        console.log(input.value);
      }
    }


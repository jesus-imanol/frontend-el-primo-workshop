import { Component } from '@angular/core';
import { ReactiveFormsModule,FormGroup,FormControl, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-appoinment-do',
  standalone: true,
  imports: [RouterLink,ReactiveFormsModule],
  templateUrl: './appoinment-do.component.html',
  styleUrl: './appoinment-do.component.css'
})
export class AppoinmentDoComponent {
  sheduleForm:FormGroup;
  constructor(){
    this.sheduleForm = new FormGroup({
      modelVersion : new FormControl(''),
      details : new FormControl(''),
      need: new FormControl(''),
      date : new FormControl(''),
      time : new FormControl('')
    });
  }

}

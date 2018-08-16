import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.css']
})
export class ReservationComponent implements OnInit {
  reservationForm: FormGroup;
  date = new Date();

  timeOptions = ['12:00', '13:00'];
  peopleOptions = [1, 2, 3];

  isSchedule = false;
  client = {firstName: '', lastName: '', email: '', phone: ''}

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.createForm();

  }

  createForm() {
    this.reservationForm = this.formBuilder.group( {
        date: new Date(),
        time: '',
        people: 1
    })
  }

  saveReservation() {
    if(this.reservationForm.valid) {
      console.log(this.reservationForm);
      this.isSchedule = true;
    }
  }

  finaliseReservation(form) {
    console.log(form);
    if(form.valid) {
        console.log(form.value);
    }
  }
}

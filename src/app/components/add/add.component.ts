import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  @Output() saveEvent: EventEmitter<any> = new EventEmitter()
  @Output() cancelEvent: EventEmitter<any> = new EventEmitter()
  id: number
  firstName: string
  middleName: string
  lastName: string
  email: string
  phoneNumber: string
  role: string
  address: string
  constructor() { }

  ngOnInit(): void {
  }

  onSave() {
    const data = {
      id: this.id,
      firstname: this.firstName,
      middlename: this.middleName,
      lastname: this.lastName,
      email: this.email,
      phonenumber: this.phoneNumber,
      role: this.role,
      address: this.address
    }
    this.saveEvent.emit(data)
  }
  onCancel() {
    this.cancelEvent.emit()
  }
}

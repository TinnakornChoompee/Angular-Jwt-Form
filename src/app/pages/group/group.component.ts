import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-group',
  templateUrl: './group.component.html',
  styleUrls: ['./group.component.scss']
})
export class GroupComponent implements OnInit {

  profileForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    address: new FormGroup({
      street: new FormControl(''),
      city: new FormControl(''),
      state: new FormControl(''),
      zip: new FormControl('')
    })
  });

  constructor() { }

  ngOnInit() {
  }

  onSubmit() {
    console.warn(this.profileForm.value);
  }

  updateProfile() {
    this.profileForm.patchValue({
      firstName: 'Nancy',
      address: {
        street: '123 Drew Street'
      }
    });
  }

}

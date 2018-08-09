import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  public profileForm: FormGroup;
  public isSubmitDisabled: boolean;

  constructor(private fb: FormBuilder) { }

  get firstName() { return this.profileForm.get('firstName'); }
  get lastName() { return this.profileForm.get('lastName'); }
  get email() { return this.profileForm.get('email'); }
  get branch() { return this.profileForm.get('branch'); }
  get birthday() { return this.profileForm.get('birthday'); }

  ngOnInit() {
    this.isSubmitDisabled = true;
    this.profileForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', Validators.required],
      branch: ['', Validators.required],
      birthday: ['', Validators.required],
      description: [''],
    });

    this.profileForm.statusChanges.subscribe(res => {
      this.isSubmitDisabled = !(res === 'VALID');
    });
  }

  submit() {
    if (this.profileForm.valid) {
      console.log('FORM', this.profileForm.value, this.firstName.value);
    } else {
      console.log('FORM is not valid!');
    }
  }

}

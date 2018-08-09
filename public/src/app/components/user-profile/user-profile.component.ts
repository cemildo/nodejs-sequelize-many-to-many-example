import { Component, OnInit, Input } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { TeacherService } from '../../services/teacher.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';


@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  public profileForm: FormGroup;
  public isSubmitDisabled: boolean;
  @Input() teacherId: number;

  constructor(private fb: FormBuilder,
    private router: Router, private route: ActivatedRoute,
    private teacherService: TeacherService) { }

  get firstName() { return this.profileForm.get('firstName'); }
  get lastName() { return this.profileForm.get('lastName'); }
  get email() { return this.profileForm.get('email'); }
  get branch() { return this.profileForm.get('branch'); }
  get birthday() { return this.profileForm.get('birthday'); }

  ngOnInit() {
    this.isSubmitDisabled = true;
    this.profileForm = this.fb.group({
      teacherNumber: [''],
      first_name: ['', Validators.required],
      last_name: ['', Validators.required],
      email: ['', Validators.required],
      branch: ['', Validators.required],
      birthday: ['', Validators.required],
      description: [''],
    });

    this.profileForm.statusChanges.subscribe(res => {
      this.isSubmitDisabled = !(res === 'VALID');
    });

    if (this.teacherId) {
      this.teacherService.getById(this.teacherId).subscribe(result => {
        this.profileForm.setValue(result);
      });
    }
  }

  submit() {
    if (this.profileForm.valid) {
      console.log('lskd-alskdn', this.profileForm.get('teacherNumber').value);
      if (this.profileForm.get('teacherNumber').value) {
        this.teacherService.update(this.profileForm.value).subscribe(respond => {
          this.router.navigate(['layout', 'teachers', 'all']);
        });
      } else {
        this.teacherService.add(this.profileForm.value).subscribe(respond => {
          this.router.navigate(['layout', 'teachers', 'all']);
        });
      }
    } else {
      console.log('FORM is not valid!');
    }
  }

}

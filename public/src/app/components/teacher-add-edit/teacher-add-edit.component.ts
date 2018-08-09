import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { TeacherService } from '../../services/teacher.service';

@Component({
  selector: 'app-teacher-add-edit',
  templateUrl: './teacher-add-edit.component.html',
  styleUrls: ['./teacher-add-edit.component.scss']
})
export class TeacherAddEditComponent implements OnInit {
  private teacherId: number;

  constructor(private router: Router, private activatedRoute: ActivatedRoute,
   private teacherService: TeacherService
  ) { }

  ngOnInit() {
    this.teacherId = +this.activatedRoute.snapshot.paramMap.get('id');
  }

}

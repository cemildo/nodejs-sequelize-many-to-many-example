import { Component, OnInit } from '@angular/core';
import { TeacherService } from '../../services/teacher.service';

@Component({
  selector: 'app-list-all',
  templateUrl: './list-all.component.html',
  styleUrls: ['./list-all.component.scss']
})
export class ListAllComponent implements OnInit {
  public allTeachers: any[];

  constructor(private teacherService: TeacherService) { }

  ngOnInit() {
    this.teacherService.getAll().subscribe(data => {
      this.allTeachers = data;
    });
  }

}

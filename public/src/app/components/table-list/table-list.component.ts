import { Component, OnInit, Input } from '@angular/core';
import { TeacherService } from '../../services/teacher.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-table-list',
  templateUrl: './table-list.component.html',
  styleUrls: ['./table-list.component.css']
})
export class TableListComponent implements OnInit {
  @Input() data: any;

  constructor(private teacherService: TeacherService,
    private router: Router, private route: ActivatedRoute) { }

  ngOnInit() { }

  editItem(id) {
    this.router.navigate(['..', 'edit', id], { relativeTo: this.route });
  }

  deleteItem(id) {
    this.teacherService.deleteById(id).subscribe(data => {
      console.log(`Teacher with ${id} is deleted!`);
      this.getItems();
    });
  }

  getItems() {
    this.teacherService.getAll().subscribe(data => {
      this.data = data;
    });
  }

}

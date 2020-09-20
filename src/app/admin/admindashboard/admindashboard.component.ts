import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admindashboard',
  templateUrl: './admindashboard.component.html',
  styleUrls: ['./admindashboard.component.css']
})
export class AdmindashboardComponent implements OnInit {
  opened=false;
  constructor(private router:Router) { }

  ngOnInit(): void {
    this.router.navigate(["/admin/profile"])
  }

}

import { Component, OnInit } from '@angular/core';
import { DataService } from './../../core/services/data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})

export class HomeComponent implements OnInit {
  constructor(
    private dataService: DataService,
  ) { }

  jobs: any;
  searchText: string="";

  ngOnInit(): void {
    this.dataService.getJobs().subscribe((resp) => {
      this.jobs = resp.results;
    });
  }

  search(value): void {
    this.searchText = value;
    this.dataService.getSearchJobs(value).subscribe((resp) => {
      console.log(resp)

      this.jobs = resp.results;
    });
  }
}

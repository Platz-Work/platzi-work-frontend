import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { DataService } from '../../../core/services/data.service';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.scss']
})


export class FiltersComponent implements OnInit {

  min:string;
  max:string;

  categorySelected:string

  countries:any;
  categories:any;


  constructor(
    private dataService: DataService,
  ) { }

  ngOnInit(): void {

    this.dataService.getCategories().subscribe((resp) => {
      this.categories=resp.results;
      console.log(resp.results)
    });

    this.dataService.getCountries().subscribe((resp) => {
      this.countries=resp.results
      console.log(resp.results);
    });

  }
  private filterData(): void {
    alert(this.min)
  }


}

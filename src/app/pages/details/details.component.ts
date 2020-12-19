import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { DataService } from './../../core/services/data.service';


@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  constructor(
    private _location: Location,
    private activatedRoute: ActivatedRoute,
    private dataService: DataService
  ) { }

  job:any

  ngOnInit(): void {

    let id = this.activatedRoute.snapshot.params.id;

    //Subscription Method
    this.activatedRoute.paramMap.subscribe(params => {
      id = params.get('id');
      this.dataService.getJob(id).subscribe((resp) => {
        this.job=resp;
        console.log(this.job)
      });

    });

  }

  back(): void {
    this._location.back();
  }

}

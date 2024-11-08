import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-sales',
  templateUrl: './sales.component.html',
  styleUrl: './sales.component.scss'
})
export class SalesComponent implements OnInit, OnDestroy {

  search: string = "";
  private sub: any;

  constructor(private route: ActivatedRoute){}
  
  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
       this.search = params['search'];

       console.log("Search option: ", this.search);
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}

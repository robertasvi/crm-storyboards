import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit, OnDestroy {

  layout: string = "";
  private sub: any;

  constructor(private route: ActivatedRoute){}
  
  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
       this.layout = params['layout'];

       console.log("Layout option: ", this.layout);
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}

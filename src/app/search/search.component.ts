import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { SearchService } from '../search.service';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  searchForm: FormGroup;
  randBusiness: any;

  constructor(
    private formBuilder: FormBuilder,
    private searchService: SearchService
  ) { }

  ngOnInit() {
    this.searchForm = this.formBuilder.group({
      price: new FormControl(),
      city: new FormControl(),
      state: new FormControl()
    });
  }

  onSubmit() {
    this.searchService.getResults(this.searchForm.value.price, this.searchForm.value.city, this.searchForm.value.state)
      .subscribe(data => {
       this.randomize(data);
      });
  }

  randomize(data) {
    let businesses = data.businesses;
    let randBusiness = businesses[Math.floor(Math.random()*businesses.length)];
    this.randBusiness = randBusiness;
  }

}
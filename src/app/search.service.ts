import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const endpoint = 'https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=restaurants&limit=50&open_now=true';
const httpOptions = {
  headers: new HttpHeaders({
    'Authorization': 'Bearer 0hE8UGEsE-yRNZCXdsvS6DX-ssMXAT5dtqUg3B8OVKG_2AoSxeUYRNu-ZgBsFMNz6j_EohOB1qxtPZnnuecC_32Zhtu-XC5FhwCT0tRCCupRNwImyYh_Y74HFpcaXHYx'
  })
}
@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor(private http: HttpClient) { }

  getResults(price: string, city: string, state: string) {
    return this.http.get(`${endpoint}&location=${city}_${state}&price=${price}`, httpOptions);
  }
}

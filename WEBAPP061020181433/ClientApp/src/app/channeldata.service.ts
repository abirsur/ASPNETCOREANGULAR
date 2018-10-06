import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ChanneldataService {

  constructor(private http: HttpClient) {

  }

  getChannels() {
    return this.http.get('/api/values');
  }
}

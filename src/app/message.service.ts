import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class MessageService {
  constructor(private http: HttpClient) {}

  sendMessage (body) {
    return this.http.post('http://localhost:5000/formulario', body);

  }


}

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../models/user';

const BASE_URL = 'https://localhost:7199/api';

@Injectable({ providedIn: 'root' })
export class ApiService {
  constructor(private http: HttpClient) {}

  public createUser = (user: User) => {
    return this.http.post<User>(
      this.createCompleteRoute(BASE_URL, 'User'),
      user,
      this.generateHeaders()
    );
  };

  public getUsers = () => {
    return this.http.get<User[]>(this.createCompleteRoute(BASE_URL, 'User'));
  };

  private createCompleteRoute = (envAddress: string, route: string) => {
    return `${envAddress}/${route}`;
  };
  private generateHeaders = () => {
    return {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
    };
  };
}

import { Injectable } from '@angular/core';
import{ HttpClient } from '@angular/common/http';
import{ IStudent } from './student';
import {Observable } from 'rxjs/Observable';
import { map, tap} from "rxjs/operators";

export interface LoginForm{
  email:string;
  password: string;
};
export interface User{
  name:string;
  username:string;
  email:string;
  password:string;
  passwordConfirm:string;

};

@Injectable({
  providedIn: 'root'
})
export class DatalistService {

cseurl= "http://localhost:3000/cseStudents";
  constructor(
    private http: HttpClient
  ) { }

  login(loginForm: LoginForm){

    return this.http.post<any>(' http://localhost:3000/login',{email: loginForm.email, password:loginForm.password});
  }

// getLogin():Observable<LoginForm[]>{
//   return this.http.get<LoginForm[]>("http://localhost:3000/login");
// }
  register(user: User){
    return this.http.post<any>("http://localhost:3000/register", user).pipe(
      map(user=>user)
    );
  }

  getCseStudentDetails(): Observable<IStudent[]>{
    return this.http.get<IStudent[]>("http://localhost:3000/cseStudents");
  }
  getEceStudents(): Observable<IStudent[]>{
    return this.http.get<IStudent[]>("http://localhost:3000/eceStudents");
  }
  getEeeStudents(): Observable<IStudent[]>{
    return this.http.get<IStudent[]>("http://localhost:3000/eeeStudents");
  }
  getMechStudents(): Observable<IStudent[]>{
    return this.http.get<IStudent[]>("http://localhost:3000/mechStudents");
  }
  addStudent(student: IStudent): Observable<IStudent> {
  return this.http.post<IStudent>('http://localhost:3000/cseStudents', student);

}
// deleteStudent(id: number): Observable<IStudent> {
//   const url = `${this.cseurl}/${id}`; // DELETE api/heroes/42
//   return this.http.delete(this.cseurl);
// }

}

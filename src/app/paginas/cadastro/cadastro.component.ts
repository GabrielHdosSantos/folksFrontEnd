import { Component, OnInit } from '@angular/core';
import { AlunoClass } from './aluno';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent{

  Aluno = new AlunoClass;

  url = 'http://localhost:8080/student/add';
  headers = new HttpHeaders().set(
    'Content-Type',
    'application/json;charset=UTF-8'
  );

  constructor(private http: HttpClient) { }

  addAluno() {
    let options = { headers: this.headers };
    let name = this.Aluno.name;
    let secondName = this.Aluno.secondName;
    let age = this.Aluno.age;
    let cpf = this.Aluno.cpf;
    let birthday = this.Aluno.birthday;
    let registration = this.Aluno.registration;

    this.http.post(this.url, { name, secondName, age, cpf, birthday, registration, options }).toPromise().then((data:any) => {
      console.log(data);
    });

  }

  

}

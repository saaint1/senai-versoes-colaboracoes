import { Component, OnInit } from '@angular/core';
import * as $ from "jquery";
import { User } from 'src/app/model/user';
import { UserService } from 'src/app/services/user.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor( private userService: UserService) { }

  ngOnInit(): void {
  }

}

$(document).ready(function(){
 $("button").click(function(){
  if ($("#username").val() == "admin" && $("#password").val() == "password") {
    alert("You are a valid user");
  } else {
    alert("You are not a valid user");
  }
 })
});

userModel = new User()

receberDados(){
  console.log(this.userModel);
  this.userService.logarUsuario(this.userModel).subscribe({
    next: (response) => {
      console.log ("Deu Certo");
      console.log (sucesso);
      this.mensagem = "Logido com sucesso";

    },
    error: (err) => {
      console.log("Deu erro");
      console.log (err);
      this.mensagem = "Email ou Senha inválido";
    }
  })
}




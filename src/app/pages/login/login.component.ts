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

validarLogin(): boolean {

  let blackList = ["SELECT", "OR", ' ""="" ', "-- ", ";", "1 = 1", "1=1", "DROP", "\"\"=\"\"", "'='"];//lista de palavras chave

  let ataque = 0;

  blackList.forEach((palavra) => {//passa por cada palavra - parecido com um form
    if (this.userModel.email?.toUpperCase().includes(palavra)) {//se o que foi digitado é igual à palavra da balcklist
      ataque++;//conta mais uma palavra proibida
    }
  })


  if (
    ataque > 0 ||
    this.userModel.email === "" || this.userModel.email === undefined ||
    this.userModel.password === "" || this.userModel.password === undefined
  ) {//não pode logar/ chamar a api
    return false;
  } else {
    return true;
  }

}



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




import { Component, OnInit } from '@angular/core';
import * as $ from "jquery";
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }

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



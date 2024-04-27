import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {

  title = 'password-generator';
  useLetters: boolean = false;
  useNumbers: boolean = false;
  useSymbols: boolean = false;
  length : number=0;
  password : String="";
  generatePassword() {
    let result = '';
    let characters = '';
    if(this.useLetters) characters += 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    if (this.useNumbers) characters += '0123456789';
    if (this.useSymbols) characters += '!@#$%^&*()_+{}[];:<>,.?/';
    const charactersLength = characters.length;
    for (let i = 0; i < this.length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    this.password=result;
  }

}

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'concept';

  nome = '';

  onNameChange(nome: string){
    this.nome = nome;
  }
}

import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-componente2',
  templateUrl: './componente2.component.html',
  styleUrls: ['./componente2.component.css']
})
export class Componente2Component implements OnInit {

  @Input() nome: string;

  constructor() {  
    this.nome = '';
   }

  ngOnInit(): void {
  }

}

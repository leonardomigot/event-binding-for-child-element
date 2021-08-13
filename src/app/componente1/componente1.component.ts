import { Component, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-componente1',
  templateUrl: './componente1.component.html',
  styleUrls: ['./componente1.component.css']
})
export class Componente1Component implements OnInit {

  nome: string;

  @Output() onNameChangeC = new EventEmitter<string>();

  constructor() {
    this.nome = '';
  }

  ngOnInit(): void {
  }

  keyPress(event: any) {
    this.onNameChangeC.emit(event.target.value);
  }

}

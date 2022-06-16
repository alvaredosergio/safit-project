import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-objetives',
  templateUrl: './objetives.page.html',
  styleUrls: ['./objetives.page.scss'],
})
export class ObjetivesPage implements OnInit {

  objetivo1 = 'Perder peso';
  objetivo2 = 'Ganar musculatura';
  objetivo3 = 'Aumentar fuerza';
  objetivo4 = 'Mantener linea';

  constructor() { }

  ngOnInit() {
  }

  guardarObjetivo1(){
    localStorage.setItem('objetivo',this.objetivo1)
  }
  guardarObjetivo2(){
    localStorage.setItem('objetivo',this.objetivo2)
  }
  guardarObjetivo3(){
    localStorage.setItem('objetivo',this.objetivo3)
  }
  guardarObjetivo4(){
    localStorage.setItem('objetivo',this.objetivo4)
  }

}

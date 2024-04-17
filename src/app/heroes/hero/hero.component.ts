import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {

  public name:string = 'Ironman';
  public age:number = 45;
  public boton1:boolean = true;


  get capitalizedName():string{
    return this.name.toUpperCase()
  }

  getHeroDescription():string{
    return `${this.name} - ${this.age}`;
  }

  changeHero():void{
    this.name = 'SpiderMan';

  }

  changeAge():void{
    this.age = 20;
  }

  resetForm():void{
    this.name = 'Ironman';
    this.age = 45;
  }

}

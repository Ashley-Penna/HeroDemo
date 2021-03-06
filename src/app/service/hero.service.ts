import {Injectable} from '@angular/core';
import {Hero} from '../model/hero';

@Injectable()
export class HeroService {

  // angular will create a singleton(one and only one copy in memory
  // service object. use dependency injection to get and use the object.

  HEROES: Hero[] = [
    {id: 11, name: 'Mr. Nice'},
    {id: 12, name: 'Narco'},
    {id: 13, name: 'Bombasto'},
    {id: 14, name: 'Celeritas'},
    {id: 15, name: 'Magneta'},
    {id: 16, name: 'RubberMan'},
    {id: 17, name: 'Dynama'},
    {id: 18, name: 'Dr IQ'},
    {id: 19, name: 'Magma'},
    {id: 20, name: 'Tornado'}
  ];

  getHeroes(): Hero[] {
    return this.HEROES;
  }

  getHero(id: number): Hero {
    return this.HEROES.find(hero => id === hero.id);
  }
}

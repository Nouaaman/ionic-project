import { Component, OnInit } from '@angular/core';
import { Fighter } from '../models/fighter.model';
import { FighterService } from '../services/fighter/fighter.service';

@Component({
  selector: 'app-fighter-add',
  templateUrl: 'fighter-add.page.html',
  styleUrls: ['fighter-add.page.scss']
})
export class FighterAddPage implements OnInit {
  public fighter!: Fighter;
  added = false;
  // eslint-disable-next-line @typescript-eslint/naming-convention
  constructor(private Fighter: FighterService) { }
  ngOnInit(): void {
    this.fighter = new Fighter();
  }

  add() {
    this.Fighter.saveNewFighter(this.fighter).subscribe(() => {
      this.fighter = new Fighter();
      this.added = true;
      setTimeout(() => {
        this.added = false;
      }, 5000);
    });

  }
}

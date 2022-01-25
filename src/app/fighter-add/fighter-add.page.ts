import { Component, OnInit } from '@angular/core';
import { Toast } from '@capacitor/toast';
import { Fighter } from '../models/fighter.model';
import { FighterService } from '../services/fighter/fighter.service';

@Component({
  selector: 'app-fighter-add',
  templateUrl: 'fighter-add.page.html',
  styleUrls: ['fighter-add.page.scss']
})
export class FighterAddPage implements OnInit {
  public fighter!: Fighter;

  constructor(
    // eslint-disable-next-line @typescript-eslint/naming-convention
    private Fighter: FighterService
  ) { }
  ngOnInit(): void {
    this.fighter = new Fighter();
  }

  showToast = async () => {
    await Toast.show({
      text: 'Added successfully.',
    });
  };

  add() {
    this.Fighter.saveNewFighter(this.fighter).subscribe(() => {
      this.fighter = new Fighter();
      this.showToast();
    });

  }
}

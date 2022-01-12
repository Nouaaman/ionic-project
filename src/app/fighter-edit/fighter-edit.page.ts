import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { FighterService } from '../services/fighter/fighter.service';

@Component({
  selector: 'app-fighter-edit',
  templateUrl: './fighter-edit.page.html',
  styleUrls: ['./fighter-edit.page.scss'],
})
export class FighterEditPage implements OnInit {
  @Input() id: string;
  fighter: any = null;
  change = false;

  constructor(
    // eslint-disable-next-line @typescript-eslint/naming-convention
    private Fighter: FighterService,
    private modalCtr: ModalController,
  ) { }

  ngOnInit() {
    const id = this.id;
    this.Fighter.get(id).subscribe((value: any) => {
      this.fighter = value;
    });
  }

  async close() {
    await this.modalCtr.dismiss();
  }

  edit() {
    this.Fighter.update(this.fighter).subscribe(() => {
      this.change = true;
      setTimeout(() => {
        this.change = false;
      }, 3000);
    });
  }

}

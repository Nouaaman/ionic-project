import { Component, Input, OnInit } from '@angular/core';
import { FighterService } from '../services/fighter/fighter.service';
import { FighterEditPage } from '../fighter-edit/fighter-edit.page';
import { ModalController } from '@ionic/angular';
import { AppLauncher } from '@capacitor/app-launcher';

@Component({
  selector: 'app-fighter',
  templateUrl: './fighter.component.html',
  styleUrls: ['./fighter.component.scss'],
})
export class FighterComponent implements OnInit {
  @Input() id?: string;
  @Input() fighterFullName?: string;
  @Input() fighterAge?: string;
  @Input() fighterPicture?: string;
  @Input() fighterCountry?: string;
  @Input() fighterRecord?: string;
  @Input() fighterWeightclass?: string;


  constructor(
    // eslint-disable-next-line @typescript-eslint/naming-convention
    private Fighter: FighterService,
    public modalCtrl: ModalController
  ) { }

  ngOnInit(): void {
  }

  delete(): void {
    this.Fighter.delete(this.id);
  }

  async initModal() {
    const modal = await this.modalCtrl.create({
      component: FighterEditPage,
      componentProps: {
        id: this.id
      }
    });
    return await modal.present();
  }

  async openYoutube() {
    window.open('https://www.youtube.com/results?search_query=' + this.fighterFullName, '_system');
  }
};




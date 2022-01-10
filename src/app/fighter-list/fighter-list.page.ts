import { Component, OnInit } from '@angular/core';
import { FighterService } from '../services/fighter/fighter.service';

@Component({
  selector: 'app-fighter-list',
  templateUrl: 'fighter-list.page.html',
  styleUrls: ['fighter-list.page.scss']
})
export class FighterListPage implements OnInit {
  fighters!: any;
  constructor(
    private fighter: FighterService
  ) { }

  ngOnInit(): void {
    this.fighter.getAllFighters().subscribe((data: any) => {
      this.fighters = data;
    });
  }
}

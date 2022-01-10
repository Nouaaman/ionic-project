import { Injectable } from '@angular/core';
import { Observable, of, Subject } from 'rxjs';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Fighter } from 'src/app/models/fighter.model';
import { map } from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})
export class FighterService {
  fightersRef: AngularFirestoreCollection<Fighter>;
  private dbPath = '/fighters';

  constructor(
    private db: AngularFirestore
  ) {
    this.fightersRef = db.collection(this.dbPath, ref =>
      ref.orderBy('record', 'asc'));
  }

  getAllFighters(): any {
    return this.fightersRef.snapshotChanges().pipe(
      map((changes: any) => changes.map((doc: any) => ({ id: doc.payload.doc.id, ...doc.payload.doc.data() })))
    );
  }

  saveNewFighter(fighter: Fighter): any {
    return new Observable(obs => {
      this.fightersRef.add({ ...fighter }).then(() => {
        obs.next();
      });
    });
  }

  get(id: any): any {
    return new Observable(obs => {
      this.fightersRef.doc(id).get().subscribe(res => {
        obs.next({ id: res.id, ...res.data() });
      });
    });
  }

  update(fighter: Fighter) {
    return new Observable(obs => {
      this.fightersRef.doc(fighter.id).update(fighter);
      obs.next();
    });
  }

  delete(id: any) {
    this.db.doc(`fighters/${id}`).delete();
  }

}

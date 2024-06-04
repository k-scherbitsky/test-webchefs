import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LeftMenuService {

  private _showMenu$: BehaviorSubject<boolean> = new BehaviorSubject(true);

  constructor() {
  }

  public set showMenu(isShow: boolean) {
    this._showMenu$.next(isShow);
  }

  public get showMenu$(): Observable<boolean> {
    return this._showMenu$.asObservable();
  }
}

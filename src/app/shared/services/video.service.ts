import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VideoService {
  private videoPathSubject = new BehaviorSubject<string>('pt');
  videoPath$ = this.videoPathSubject.asObservable();

  constructor() { }

  setVideoPath(path: string) {
    this.videoPathSubject.next(path);
  }
}

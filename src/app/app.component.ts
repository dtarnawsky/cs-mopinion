import { Component, OnInit } from '@angular/core';
import { IonApp, IonRouterOutlet } from '@ionic/angular/standalone';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  standalone: true,
  imports: [IonApp, IonRouterOutlet],
})
export class AppComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {
    const MopinionSDK = (window as any).MopinionSDK;
    MopinionSDK.load(
      'x0W6z2F8gnJ6TdefIak95Wk4Ot4qNAz5dzxAnyuD',
      true,
      function (result: any) {
        console.log('OK');

      },
      function (err: any) {
        console.log('Error');

      }
    );
  }
}

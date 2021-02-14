import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: `yokai-root`,
  templateUrl: `./app.component.html`,
  styleUrls: [`./app.component.scss`],
})
export class AppComponent {}

import { AppComponent } from './app.component';
import { RouterTestingModule } from '@angular/router/testing';
import { Spectator, createComponentFactory } from '@ngneat/spectator/jest';

describe(`AppComponent`, (): void => {
  let spectator: Spectator<AppComponent>;
  const createComponent = createComponentFactory({
    component: AppComponent,
    imports: [RouterTestingModule],
  });

  beforeEach((): void => {
    spectator = createComponent();
  });

  it(`should create the app`, (): void => {
    expect.assertions(1);

    expect(spectator).toBeTruthy();
  });
});

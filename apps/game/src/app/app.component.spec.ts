import { AppComponent } from './app.component';
import { TestBed } from '@angular/core/testing';

describe(`AppComponent`, (): void => {
  beforeEach(
    async (): Promise<any> => {
      await TestBed.configureTestingModule({
        declarations: [AppComponent],
      }).compileComponents();
    }
  );

  it(`should create the app`, (): void => {
    expect.assertions(1);
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});

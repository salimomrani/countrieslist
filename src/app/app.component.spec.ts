import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {RouterTestingModule} from '@angular/router/testing';
import {AppComponent} from './app.component';

describe('AppComponent', () => {
  let fixture: ComponentFixture<AppComponent>;
  let componont: AppComponent;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents();
    fixture = TestBed.createComponent(AppComponent);
    componont = fixture.componentInstance;
  }));

  it('should be created', function () {
    expect(componont).toBeTruthy();
  });

});

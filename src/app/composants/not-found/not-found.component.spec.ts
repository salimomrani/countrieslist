import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {NotFoundComponent} from './not-found.component';
import {By} from '@angular/platform-browser';

describe('NotFoundComponent', () => {
  let component: NotFoundComponent;
  let fixture: ComponentFixture<NotFoundComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [NotFoundComponent]
    });
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotFoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display message 404', function () {
    const message = fixture.debugElement.query(By.css('h1')).nativeElement.textContent;
    expect(message).toEqual('404 error - Not Found');
  });
});

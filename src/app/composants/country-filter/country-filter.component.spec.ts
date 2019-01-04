import {async, ComponentFixture, fakeAsync, flush, flushMicrotasks, TestBed, tick} from '@angular/core/testing';
import {debounceTime} from 'rxjs/operators';
import {Filter} from '../../model/filter';

import {CountryFilterComponent} from './country-filter.component';
import {ReactiveFormsModule} from '@angular/forms';
import {By} from '@angular/platform-browser';

describe('CountryFilterComponent', () => {
  let component: CountryFilterComponent;
  let fixture: ComponentFixture<CountryFilterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CountryFilterComponent],
      imports: [ReactiveFormsModule]
    });
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CountryFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(true).toBeTruthy();
  });

  it('should display filter', function () {
    const headingContent = fixture.debugElement.query(By.css('h1')).nativeElement.textContent;
    expect(headingContent).toMatch('filter');
  });

  it('form invalid when empty', () => {
    component.filterForm.controls['category'].setValue(null);
    expect(component.filterForm.valid).toBeFalsy();
  });

  it('it should emit value when typing in query input', fakeAsync(() => {
    spyOn(component.filterChanged, 'emit');
    const inputElement = fixture.debugElement.query(By.css('input'));
    inputElement.nativeElement.value = 'hello';
    inputElement.nativeElement.dispatchEvent(new Event('input'));
    tick(300);
    expect(component.filterChanged.emit).toHaveBeenCalledWith(new Filter('hello',  'id'));
    expect(component.filterForm.value).toEqual({query: 'hello', category: 'id'});
  }));
});

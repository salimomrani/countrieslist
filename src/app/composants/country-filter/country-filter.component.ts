import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {debounceTime} from 'rxjs/operators';
import {Filter} from '../../model/filter';


@Component({
  selector: 'app-country-filter',
  templateUrl: './country-filter.component.html',
  styleUrls: ['./country-filter.component.scss']
})
export class CountryFilterComponent implements OnInit {

  @Output() filterChanged = new EventEmitter<Filter>();
  category = [
    {type: 'id'},
    {type: 'name'},
    {type: 'region'}
  ];
  filterForm: FormGroup;

  constructor() { }

  ngOnInit() {
    this.filterForm = this.buildForm();
    this.filterForm.valueChanges.pipe(
      debounceTime(300),
    ).subscribe((data: Filter) => {
      this.filterChanged.emit(new Filter(data.query, data.category));
    });
  }

  private buildForm() {
    return new FormGroup({
      query: new FormControl(''),
      category: new FormControl(this.category[0].type, Validators.required),
    });
  }
}

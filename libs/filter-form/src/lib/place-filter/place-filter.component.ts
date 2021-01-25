import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'vacgaps-place-filter',
  templateUrl: './place-filter.component.html',
  styleUrls: ['./place-filter.component.scss'],
})
export class PlaceFilterComponent implements OnInit {
  @Output()
  placesUpdated = new EventEmitter<any[]>();

  selectedPlaces = new Set([]);

  @Input()
  label: string;

  @Input()
  places: Map<string, string>;

  @Input()
  set placeList(placesList: Map<string, string>) {
    this.#places = placesList;
    this.filterPlaces('');
  }
  get placeList() {
    return this.#places;
  }

  @ViewChild('placesInput') placesInput: ElementRef<HTMLInputElement>;

  #places: Map<string, string>;
  placesSelectList: Map<string, string>;
  placesFilterTerm: string;
  placesFilterChange = new Subject<string>();

  constructor() {}

  ngOnInit(): void {
    if (!this.#places) {
      this.placeList = this.places;
    }

    this.placesFilterChange
      .pipe(debounceTime(100))
      .subscribe((term) => this.filterPlaces(term));
  }

  filterPlaces(term: string) {
    this.placesSelectList = new Map(this.#places);
    if (term === '') return;
    for (const [key, value] of this.placesSelectList.entries()) {
      if (value.toLowerCase().indexOf(term.toLowerCase()) === -1)
        this.placesSelectList.delete(key);
    }
  }

  addPlace($event: MatAutocompleteSelectedEvent) {
    this.selectedPlaces.add($event.option.value);
    this.placesUpdated.emit([...this.selectedPlaces]);
    this.placesInput.nativeElement.value = this.placesFilterTerm = '';
  }

  removePlace(place: string) {
    this.selectedPlaces.delete(place);
    this.placesUpdated.emit([...this.selectedPlaces]);
  }
}

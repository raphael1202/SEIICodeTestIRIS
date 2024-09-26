import { Component, EventEmitter, OnInit, Output } from "@angular/core";
import { MatSelectChange } from "@angular/material/select";

@Component({
  selector: "app-subdivision-filter",
  templateUrl: "./subdivision-filter.component.html",
  styles: [
    `
      :host {
        padding: 1.5rem;
      }
    `,
  ],
})
export class SubdivisionFilterComponent {
  @Output() filterChange = new EventEmitter<string>();

  filterValue: string = "";

  selectionChanged(event: MatSelectChange): void {
    this.filterChange.emit(event.value);
  }
}

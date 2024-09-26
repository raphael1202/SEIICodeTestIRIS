import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { SubdivisionDataDisplayComponent } from "./components/subdivision-data-display/subdivision-data-display.component";

import { MatTableModule } from "@angular/material/table";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatSelectModule } from "@angular/material/select";
import { MatOptionModule } from "@angular/material/core";
import { HttpClientModule } from "@angular/common/http";
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";
import { MatPaginatorModule } from "@angular/material/paginator";
import { MatSortModule } from "@angular/material/sort";
import { SubdivisionFilterComponent } from "./components/subdivision-filter/subdivision-filter.component";

@NgModule({
  declarations: [SubdivisionDataDisplayComponent, SubdivisionFilterComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    MatTableModule,
    MatFormFieldModule,
    MatSelectModule,
    MatOptionModule,
    MatProgressSpinnerModule,
    MatPaginatorModule,
    MatSortModule,
  ],
  exports: [SubdivisionDataDisplayComponent],
})
export class SubdivisionModule {}

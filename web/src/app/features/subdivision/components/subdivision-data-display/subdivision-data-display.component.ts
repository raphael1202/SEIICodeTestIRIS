import { AfterViewInit, Component, OnInit, ViewChild } from "@angular/core";
import { MatPaginator, PageEvent } from "@angular/material/paginator";
import { MatTableDataSource } from "@angular/material/table";
import { MatSort } from "@angular/material/sort";
import { SubdivisionService } from "../../services/subdivision.service";
import { Subdivision } from "../../models/subdivision.model";
import { finalize } from "rxjs/operators";
import { of } from "rxjs";

@Component({
  selector: "app-subdivision-data-display",
  templateUrl: "./subdivision-data-display.component.html",
  styleUrls: ["./subdivision-data-display.component.css"],
})
export class SubdivisionDataDisplayComponent implements AfterViewInit, OnInit {
  displayedColumns: string[] = ["id", "name", "status", "nearMapImageDate"];
  dataSource = new MatTableDataSource<Subdivision>([]);
  totalRecords = 0;
  pageSize = 10;
  pageIndex = 0;
  loading = false;
  message: string = "";
  filterValue: string = "";

  @ViewChild(MatPaginator, { static: false })
  set paginator(value: MatPaginator) {
    if (this.dataSource) {
      this.dataSource.paginator = value;
    }
  }

  @ViewChild(MatSort, { static: false })
  set sort(value: MatSort) {
    if (this.dataSource) {
      this.dataSource.sort = value;
    }
  }

  constructor(private subdivisionService: SubdivisionService) {}

  ngOnInit(): void {
    this.loadSubdivisions();
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  loadSubdivisions(): void {
    this.loading = true;

    this.subdivisionService
      .getSubdivisions()
      .pipe(
        finalize(() => {
          this.loading = false;
        })
      )
      .subscribe({
        next: (data) => {
          if (data.length) {
            this.totalRecords = data.length;
            this.dataSource.data = data;
          } else {
            this.message = "No data.";
          }
        },
        error: (error) => {
          this.message = "Error fetching subdivisions. Please try again.";
          console.error("Error fetching subdivisions", error);
          return of([]);
        },
      });
  }

  pageChangeEvent(event: PageEvent) {
    this.pageIndex = event.pageIndex;
    this.pageSize = event.pageSize;
    this.loadSubdivisions();
  }

  applyFilter(): void {
    this.dataSource.filter = this.filterValue.trim().toLowerCase();
    this.dataSource.filterPredicate = (data: Subdivision, filter: string) => {
      return data.subdivisionStatusCode.toLowerCase().includes(filter);
    };
  }

  formatDate(dateString: string): string {
    const date = new Date(dateString);
    return `${date.toLocaleDateString()} - ${date.toLocaleTimeString()}`;
  }
}

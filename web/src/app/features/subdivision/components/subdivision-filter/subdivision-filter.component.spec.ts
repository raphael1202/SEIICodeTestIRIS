import { ComponentFixture, TestBed } from "@angular/core/testing";

import { SubdivisionFilterComponent } from "./subdivision-filter.component";
import {
  MatSelectModule,
  MatSelectChange,
  MatSelect,
} from "@angular/material/select";
import { By } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

describe("SubdivisionFilterComponent", () => {
  let component: SubdivisionFilterComponent;
  let fixture: ComponentFixture<SubdivisionFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SubdivisionFilterComponent],
      imports: [MatSelectModule, BrowserAnimationsModule],
    }).compileComponents();

    fixture = TestBed.createComponent(SubdivisionFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  it("should emit filterChange event when selectionChanged is called", () => {
    spyOn(component.filterChange, "emit");

    const select = fixture.debugElement.query(By.css("mat-select"))
      .componentInstance as MatSelect;
    const mockEvent: MatSelectChange = { source: select, value: "testValue" };
    component.selectionChanged(mockEvent);

    expect(component.filterChange.emit).toHaveBeenCalledWith("testValue");
  });

  it("should have initial filterValue as an empty string", () => {
    expect(component.filterValue).toBe("");
  });
});

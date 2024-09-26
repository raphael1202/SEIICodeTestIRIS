import { ComponentFixture, TestBed } from "@angular/core/testing";

import { SubdivisionDataDisplayComponent } from "./subdivision-data-display.component";
import { HttpClientModule } from "@angular/common/http";

describe("SubdivisionDataDisplayComponent", () => {
  let component: SubdivisionDataDisplayComponent;
  let fixture: ComponentFixture<SubdivisionDataDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SubdivisionDataDisplayComponent],
      imports: [HttpClientModule],
    }).compileComponents();

    fixture = TestBed.createComponent(SubdivisionDataDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});

import { SimpleChange } from "@angular/core";
import { ComponentFixture, TestBed } from "@angular/core/testing";
import { NbButtonModule, NbCardModule, NbIconModule, NbListModule, NbProgressBarModule, NbSpinnerModule } from "@nebular/theme";
import { MockModule } from "ng-mocks";

import { DashboardView } from "./dashboard.view";

describe("Dashboard View", () => {
  let component: DashboardView;
  let fixture: ComponentFixture<DashboardView>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DashboardView],
      imports: [
        MockModule(NbButtonModule),
        MockModule(NbCardModule),
        MockModule(NbIconModule),
        MockModule(NbListModule),
        MockModule(NbSpinnerModule),
        MockModule(NbProgressBarModule)
      ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardView);
    component = fixture.componentInstance;
    component.characters = [];
    component.comics = [];
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  it("should set the current page when there's a new search", () => {
    component.ngOnChanges({
      comics: new SimpleChange([], [{ id: 0, title: "comic", issueNumber: "190", isbn: "190", pageCount: 99 }], false),
      characters: new SimpleChange([], [], false)
    });

    component.ngOnChanges({
      characters: new SimpleChange([], [{ id: 0, title: "comic", issueNumber: "190", isbn: "190", pageCount: 99 }], false),
      comics: new SimpleChange([], [], false)
    });

    component.ngOnChanges({
      comics: new SimpleChange([], [{ id: 0, title: "comic", issueNumber: "190", isbn: "190", pageCount: 99 }], false)
    });

    component.ngOnChanges({
      characters: new SimpleChange([], [{ id: 0, title: "comic", issueNumber: "190", isbn: "190", pageCount: 99 }], false)
    });

    component.ngOnChanges({});
    expect(component.currentPage).toBe(1);
  });

  it("should emit a page change [Next]", done => {
    component.changePage.subscribe((page: number) => {
      expect(page).toBeGreaterThan(0);
      done();
    })

    component.emitPageChange();
  });

  it("should emit a page change [Previous]", done => {
    component.changePage.subscribe((page: number) => {
      expect(page).toBeLessThan(1);
      done();
    })

    component.emitPageChange(true);
  });
});

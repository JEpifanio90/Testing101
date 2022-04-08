import { ComponentFixture, TestBed } from "@angular/core/testing";

import { NavActionsView } from "./nav-actions.view";

describe("Nav Actions View", () => {
  let component: NavActionsView;
  let fixture: ComponentFixture<NavActionsView>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NavActionsView]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavActionsView);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from "@angular/core/testing";

import { NavActionsContainer } from "./nav-actions.container";

describe("Nav Actions Container", () => {
  let component: NavActionsContainer;
  let fixture: ComponentFixture<NavActionsContainer>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NavActionsContainer]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavActionsContainer);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});

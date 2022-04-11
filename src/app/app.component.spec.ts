import { ComponentFixture, TestBed } from "@angular/core/testing";
import { RouterTestingModule } from "@angular/router/testing";
import { NbLayoutModule } from "@nebular/theme";
import { MockInstance, MockModule, ngMocks } from "ng-mocks";

import { AppComponent } from "./app.component";

import { NavActionsModule } from "@project/shared/components/nav-actions/nav-actions.module";

describe("App Component", () => {
  ngMocks.faster();
  MockInstance.scope();

  let fixture: ComponentFixture<AppComponent>;
  let component: AppComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
      imports: [
        RouterTestingModule,
        MockModule(NavActionsModule),
        MockModule(NbLayoutModule)
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
  });

  it("should create the app", () => {
    expect(component).toBeTruthy();
  });
});

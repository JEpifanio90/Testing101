import { ComponentFixture, TestBed } from "@angular/core/testing";
import { NbLayoutModule, NbMenuModule } from "@nebular/theme";
import { MockInstance, MockModule, ngMocks } from "ng-mocks";

import { MainLayout } from "@project/core/layout/main.layout";


describe("Main Layout", () => {
  ngMocks.faster();
  MockInstance.scope();

  let component: MainLayout;
  let fixture: ComponentFixture<MainLayout>;

  beforeEach(async () => await TestBed.configureTestingModule({
    declarations: [MainLayout],
    imports: [
      MockModule(NbMenuModule),
      MockModule(NbLayoutModule)
    ]
  }).compileComponents());

  beforeEach(() => {
    fixture = TestBed.createComponent(MainLayout);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});

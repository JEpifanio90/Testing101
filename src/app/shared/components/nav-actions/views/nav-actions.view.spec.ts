import { ComponentFixture, TestBed } from "@angular/core/testing";
import { NbButtonModule, NbIconModule, NbSelectModule } from "@nebular/theme";
import { MockInstance, MockModule, ngMocks } from "ng-mocks";

import { NavActionsView } from "@project/shared/components/nav-actions/views/nav-actions.view";
import { ETheme } from "@project/shared/enums/theme.enum";

describe("Nav Actions View", () => {
  ngMocks.faster();
  MockInstance.scope();
  let component: NavActionsView;
  let fixture: ComponentFixture<NavActionsView>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NavActionsView],
      imports: [MockModule(NbSelectModule), MockModule(NbButtonModule), MockModule(NbIconModule)]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavActionsView);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  it("should emit a change theme event [Light]", done => {
    component.changeTheme.subscribe((theme: ETheme) => {
      expect(theme).toBeTruthy();
      done();
    });

    component.theme = ETheme.dark;
    component.emitChangeTheme();
  });

  it("should emit a change theme event [Dark]", done => {
    component.changeTheme.subscribe((theme: ETheme) => {
      expect(theme).toBeTruthy();
      done();
    });

    component.theme = ETheme.light;
    component.emitChangeTheme();
  });

  it("should emit a update query event", done => {
    component.updateQuery.subscribe((query: string) => {
      expect(query).toBeTruthy();
      done();
    });

    component.emitSearch();
  });
});

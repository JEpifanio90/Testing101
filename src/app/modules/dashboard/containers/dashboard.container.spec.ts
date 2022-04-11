import { ComponentFixture, TestBed } from "@angular/core/testing";
import { MemoizedSelector } from "@ngrx/store";
import { MockStore, provideMockStore } from "@ngrx/store/testing";
import { MockComponent } from "ng-mocks";

import { DashboardContainer } from "@project/modules/dashboard/containers/dashboard.container";
import { fromDashboard } from "@project/modules/dashboard/store";
import { selectDashboardWithQuery } from "@project/modules/dashboard/store/selectors/dashboard.selectors";
import { DashboardView } from "@project/modules/dashboard/views/dashboard.view";
import { fromCore } from "@project/store/core.index";


describe("Dashboard Container", () => {
  let store: MockStore;
  let selector: MemoizedSelector<{ [fromDashboard.featureKey]: fromDashboard.State, [fromCore.featureKey]: fromCore.State }, { state: fromDashboard.State, query: string }>
  let component: DashboardContainer;
  let fixture: ComponentFixture<DashboardContainer>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DashboardContainer, MockComponent(DashboardView)],
      providers: [
        provideMockStore({ initialState: { [fromDashboard.featureKey]: fromDashboard.initialState, [fromCore.featureKey]: fromCore.initialState } })
      ]
    }).compileComponents();

    store = TestBed.inject(MockStore);
    selector = store.overrideSelector(selectDashboardWithQuery, { state: fromDashboard.initialState, query: "comics" })
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardContainer);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  it("Should dispatch a fetch characters action", () => {
    selector.setResult({ state: fromDashboard.initialState, query: "characters" });
    store.refreshState();

    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from "@angular/core/testing";
import { MemoizedSelector } from "@ngrx/store";
import { MockStore, provideMockStore } from "@ngrx/store/testing";
import { MockInstance, ngMocks } from "ng-mocks";

import { NavActionsContainer } from "@project/shared/components/nav-actions/containers/nav-actions.container";
import { ETheme } from "@project/shared/enums/theme.enum";
import { CoreActions, CoreSelectors, fromCore } from "@project/store/core.index";


describe("Nav Actions Container", () => {
  ngMocks.faster();
  MockInstance.scope();
  let store: MockStore<fromCore.State>;
  let selector: MemoizedSelector<fromCore.State, fromCore.State>;
  let component: NavActionsContainer;
  let fixture: ComponentFixture<NavActionsContainer>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NavActionsContainer],
      imports: [provideMockStore({ initialState: fromCore.initialState, selectors: [{ selector: CoreSelectors.selectCoreState, value: { theme: ETheme.dark } }] })]
    }).compileComponents();

    store = TestBed.inject(MockStore);
    selector = store.overrideSelector(CoreSelectors.selectCoreState, { theme: ETheme.light, query: "" });
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavActionsContainer);
    fixture.detectChanges();

    component = fixture.componentInstance;
  });

  it("should create", () => {
    selector.setResult({ theme: ETheme.light, query: "" });
    store.refreshState();

    expect(component).toBeTruthy();
  });

  it("should dispatch a change theme action", () => {
    component.dispatchThemeAction(ETheme.light);

    expect(store.dispatch).toHaveBeenCalledOnceWith(CoreActions.changeTheme({ theme: ETheme.light }));
  });

  it("should dispatch an update query action", () => {
    component.dispatchUpdateQuery("comics");

    expect(store.dispatch).toHaveBeenCalledOnceWith(CoreActions.updateQuery({ query: "comics" }));
  });
});

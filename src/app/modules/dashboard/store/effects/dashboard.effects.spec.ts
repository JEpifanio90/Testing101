import { TestBed } from "@angular/core/testing";
import { provideMockActions } from "@ngrx/effects/testing";
import { Action } from "@ngrx/store";
import { MockInstance, ngMocks } from "ng-mocks";
import { Observable, of } from "rxjs";

import { DashboardEffects } from "@project/modules/dashboard/store";

describe("Dashboard Effects", () => {
  ngMocks.faster();
  MockInstance.scope();
  let actions$: Observable<Action>;
  let effects: DashboardEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        DashboardEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.inject(DashboardEffects);
    actions$ = of();
  });

  it("should be created", () => {
    expect(effects).toBeTruthy();
  });
});

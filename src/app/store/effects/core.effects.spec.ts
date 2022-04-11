import { TestBed } from "@angular/core/testing";
import { NbThemeService } from "@nebular/theme";
import { provideMockActions } from "@ngrx/effects/testing";
import { Action } from "@ngrx/store";
import { MockInstance, ngMocks } from "ng-mocks";
import { Observable, of } from "rxjs";

import { ETheme } from "@project/shared/enums/theme.enum";
import { CoreActions } from "@project/store/core.index";
import { CoreEffects } from "@project/store/effects/core.effects";

describe("Core Effects", () => {
  ngMocks.faster();
  MockInstance.scope();
  let spy = { changeTheme: jest.fn() };
  let actions$: Observable<Action>;
  let effects: CoreEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        CoreEffects,
        provideMockActions(() => actions$),
        { provide: NbThemeService, useValue: spy }
      ]
    });

    effects = TestBed.inject(CoreEffects);
    actions$ = of();
  });

  it("should be created", () => {
    expect(effects).toBeTruthy();
  });

  describe("Change Theme Effect", () => {
    it("should dispatch a success effect", done => {
      actions$ = of(CoreActions.changeTheme({ theme: ETheme.light }));

      effects.themeManager$.subscribe(() => {
        expect(effects).toBeTruthy();
        done();
      });
    });
  });
});

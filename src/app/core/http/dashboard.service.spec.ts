import { HttpClient } from "@angular/common/http";
import { TestBed } from "@angular/core/testing";
import { MockInstance, ngMocks } from "ng-mocks";

import { DashboardService } from "@project/core/http/dashboard.service";
import { Character, Comic } from "@project/shared/models/common";

describe("Dashboard Service", () => {
  ngMocks.faster();
  MockInstance.scope();
  const spy = jasmine.createSpyObj("httpClient", ["get"])
  let service: DashboardService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [{ provide: HttpClient, useValue: spy }]
    });
    service = TestBed.inject(DashboardService);
  });

  it("should be created", () => {
    expect(service).toBeTruthy();
  });

  it("should get the commics", done => {
    spy.get.and.returnValue({ data: { results: [] } });
    service.getComics(1).subscribe((comics: Array<Comic>) => {
      expect(comics).toBe([]);
      done();
    })
  });

  it("should get the characters", done => {
    spy.get.and.returnValue({ data: { results: [] } });
    service.getCharacters(1).subscribe((characters: Array<Character>) => {
      expect(characters).toBe([]);
      done();
    })
  });
});

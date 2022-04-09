import { ChangeDetectionStrategy, Component, Input } from "@angular/core";

import { Character, Comic } from "@project/shared/models/common";

@Component({
  selector: "ng-dashboard-view",
  templateUrl: "./dashboard.view.html",
  styleUrls: ["./dashboard.view.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DashboardView {
  @Input() loading!: boolean;
  @Input() comics!: Array<Comic>;
  @Input() characters!: Array<Character>;
  currentPage = 1;

  constructor() {
  }
}

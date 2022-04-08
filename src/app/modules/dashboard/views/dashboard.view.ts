import { ChangeDetectionStrategy, Component } from "@angular/core";

@Component({
  selector: "ng-dashboard",
  templateUrl: "./dashboard.view.html",
  styleUrls: ["./dashboard.view.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DashboardView {

  constructor() {
  }
}

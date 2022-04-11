import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from "@angular/core";

import { Character, Comic } from "@project/shared/models/common";

@Component({
  selector: "ng-dashboard-view",
  templateUrl: "./dashboard.view.html",
  styleUrls: ["./dashboard.view.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DashboardView implements OnChanges {
  @Input() loading!: boolean;
  @Input() comics!: Array<Comic>;
  @Input() characters!: Array<Character>;
  @Output() changePage: EventEmitter<number> = new EventEmitter<number>();
  currentPage = 1;

  constructor() {
  }

  ngOnChanges(changes: SimpleChanges): void {
    // console.warn(changes["comics"]?.currentValue.length > 0 && changes["characters"]?.currentValue.legnth === 0, changes["comics"]?.currentValue);
    if (
      (changes["comics"]?.currentValue.length > 0 && changes["characters"]?.currentValue.length === 0) ||
      (changes["characters"]?.currentValue.length > 0 && changes["comics"]?.currentValue.legnth === 0)
    ) {
      this.currentPage = 1;
    }
  }

  /**
   * Emit Page Change
   *
   * @summary emits a page change event
   * @param $back: boolean = false
   * @returns void
   */
  emitPageChange($back: boolean = false): void {
    if ($back) {
      this.currentPage--;
    } else {
      this.currentPage++;
    }

    this.changePage.emit(this.currentPage);
  }
}

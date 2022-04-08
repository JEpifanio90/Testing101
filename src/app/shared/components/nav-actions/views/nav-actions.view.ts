import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from "@angular/core";

import { ETheme } from "@project/shared/enums/theme.enum";

@Component({
  selector: "ng-nav-actions-view",
  templateUrl: "./nav-actions.view.html",
  styleUrls: ["./nav-actions.view.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavActionsView {
  @Input() theme!: ETheme;
  @Output() changeTheme: EventEmitter<ETheme> = new EventEmitter<ETheme>();

  constructor() {
  }

  /**
   * Emit Change Theme
   *
   * @summary Emit a change theme output event
   * @returns void
   */
  emitChangeTheme(): void {
    this.changeTheme.emit((this.theme === ETheme.dark) ? ETheme.light : ETheme.dark);
  }
}

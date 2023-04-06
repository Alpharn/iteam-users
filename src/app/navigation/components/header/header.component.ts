import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {
  @Output() toggleSideNav: EventEmitter<void> = new EventEmitter();
  @Input() title = '';

  onToggleSideNav(): void {
    this.toggleSideNav.emit();
  }
}

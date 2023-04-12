import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { map, take } from 'rxjs';
import { EditDescriptionModalComponent } from 'src/app/user/components/user-edit/edit-description-modal/edit-description-modal.component';

import { UserStore } from 'src/app/user/components/user/user.store';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [UserStore],
})
export class UserComponent implements OnInit {
  user$ = this._userStore.vm$;

  constructor(
    private route: ActivatedRoute,
    private readonly _userStore: UserStore,
    private dialog: MatDialog,
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.params['id'];
    this._userStore.getUser(id);
  }

  onEditDescription(): void {
    const dialogRef = this.dialog.open(EditDescriptionModalComponent, {
      restoreFocus: false,
      autoFocus: false,
      data: this.user$.pipe(
        map(({ user }) => ({ positionDescription: user?.positionDescription })),
      ),
    });
    dialogRef
      .afterClosed()
      .pipe(take(1))
      .subscribe((data) => {
        if (data) {
          this._userStore.updateUserInfo(data);
        }
      });
  }
}

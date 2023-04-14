import { ChangeDetectionStrategy, Component } from '@angular/core';

import { UserStore } from 'src/app/user/components/user-profile/user-profile.store';
import { userBankInfoTitles } from 'src/app/user/components/user-profile/constants/user-bank-info-titles';
import { UserSocialLinksTitles } from 'src/app/user/components/user-profile/constants/social-links';
import { MatDialog } from '@angular/material/dialog';
import { EditContactsModalComponent } from 'src/app/user/components/user-profile/user-edit/edit-contacts/edit-contacts-modal.component';
import { map, take } from 'rxjs';

@Component({
  selector: 'app-user-education-contacts',
  templateUrl: './user-education-contacts.component.html',
  styleUrls: [
    './user-education-contacts.component.scss',
    '../user-profile.component.scss',
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserEducationContactsComponent {
  userEducationData$ = this._userStore.user$.pipe(
    map((user) => ({
      educationInfo: user?.educationInfo,
    })),
  );
  userContactsData$ = this._userStore.user$.pipe(
    map((user) => ({
      address: user?.address,
      city: user?.city,
    })),
  );

  userBankInfoTitles = userBankInfoTitles;
  socialLinksData = UserSocialLinksTitles;

  constructor(
    private readonly _userStore: UserStore,
    private dialog: MatDialog,
  ) {}

  onEditContacts(): void {
    const dialogRef = this.dialog.open(EditContactsModalComponent, {
      restoreFocus: false,
      autoFocus: false,
      data: this.userContactsData$,
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

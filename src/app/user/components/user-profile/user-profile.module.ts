import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ClipboardModule } from '@angular/cdk/clipboard';
import { MatChipsModule } from '@angular/material/chips';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { RouterModule } from '@angular/router';

import { SharedModule } from 'src/app/shared/shared.module';
import { UserBankAndSocialsInfoComponent } from 'src/app/user/components/user-profile/user-bank-and-socials-info/user-bank-and-socials-info.component';
import { UserProfileComponent } from 'src/app/user/components/user-profile/user-profile.component';
import { EmptyMessageComponent } from 'src/app/user/components/user-profile/empty-message/empty-message.component';
import { UserEducationContactsComponent } from 'src/app/user/components/user-profile/user-education-contacts/user-education-contacts.component';
import { UserPersonalInfoComponent } from 'src/app/user/components/user-profile/user-personal-info/user-personal-info.component';
import { UserSkillsComponent } from 'src/app/user/components/user-profile/user-skills/user-skills.component';
import { UserWorkInfoComponent } from 'src/app/user/components/user-profile/user-work-info/user-work-info.component';
import { EditDescriptionModalComponent } from 'src/app/user/components/user-profile/user-edit/edit-description-modal/edit-description-modal.component';
import { EditContactsModalComponent } from 'src/app/user/components/user-profile/user-edit/edit-contacts/edit-contacts-modal.component';
import { EditSocialsModalComponent } from 'src/app/user/components/user-profile/user-edit/edit-socials-modal/edit-socials-modal.component';
import { EditBankInfoModalComponent } from 'src/app/user/components/user-profile/user-edit/edit-bank-info-modal/edit-bank-info-modal.component';

const routes = [
  {
    path: '',
    component: UserProfileComponent,
  },
];
@NgModule({
  declarations: [
    UserProfileComponent,
    UserPersonalInfoComponent,
    UserEducationContactsComponent,
    UserWorkInfoComponent,
    EmptyMessageComponent,
    UserSkillsComponent,
    UserBankAndSocialsInfoComponent,
    EditDescriptionModalComponent,
    EditContactsModalComponent,
    EditSocialsModalComponent,
    EditBankInfoModalComponent,
  ],
  imports: [
    MatInputModule,
    MatFormFieldModule,
    MatDialogModule,
    MatChipsModule,
    SharedModule,
    HttpClientModule,
    ClipboardModule,
    [RouterModule.forChild(routes)],
  ],
})
export class UserProfileModule {}

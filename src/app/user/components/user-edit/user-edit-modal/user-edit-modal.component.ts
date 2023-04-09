import {
  ChangeDetectionStrategy,
  Component,
  Inject,
  OnInit,
} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { UserProfileInfoSections } from 'src/app/user/models.ts/user-profile-info-sections';

export interface DialogData {
  section: UserProfileInfoSections;
}
@Component({
  selector: 'app-user-edit-modal',
  templateUrl: './user-edit-modal.html',
  styleUrls: ['./user-edit-modal.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserEditModalComponent implements OnInit {
  userEditForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<UserEditModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
  ) {}
  ngOnInit(): void {
    this.createForm();
  }

  private createForm(): void {
    this.userEditForm = this.fb.group({
      customControl: [this.data.section, Validators.required],
    });
  }

  onSubmit(): void {
    this.dialogRef.close();
  }
}

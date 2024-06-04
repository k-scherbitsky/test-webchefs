import { FormArray, FormControl, FormGroup } from '@angular/forms';

export interface AttachFormStructure {
  firstName: FormControl<string>;
  lastName: FormControl<string>;
  email: FormControl<string>;
  birthday: FormControl<Date>;
  citizenship: FormControl<string[]>;
  instagram: FormControl<string>;
  tweeter: FormControl<string>;
  facebook: FormControl<string>;
  files: FormControl<File[]>;
  permissions: FormArray<FormGroup<PermissionFormStructure>>;
}

export interface PermissionFormStructure {
  id: FormControl<number | null>;
  objectName: FormControl<string | null>;
  create: FormControl<boolean | null>;
  read: FormControl<boolean | null>;
  update: FormControl<boolean | null>;
  delete: FormControl<boolean | null>;
}
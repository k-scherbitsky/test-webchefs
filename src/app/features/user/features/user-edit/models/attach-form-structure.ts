import { FormControl } from '@angular/forms';

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
}
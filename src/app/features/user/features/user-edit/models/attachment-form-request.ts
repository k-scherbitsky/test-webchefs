import { Permission } from 'src/app/features/user/features/user-edit/models/permission';

export interface AttachmentFormRequest {
  firstName: string;
  lastName: string;
  email: string;
  birthday: Date;
  citizenship: string[];
  instagram: string;
  tweeter: string;
  facebook: string;
  files: File[];
  permissions: Permission[];
}
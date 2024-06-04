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
}
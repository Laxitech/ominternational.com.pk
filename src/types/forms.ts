export interface EnquiryInput {
  name: string;
  email: string;
  phone: string;
  programme?: string;
  message: string;
}

export interface ContactFormInput {
  name: string;
  email: string;
  phone?: string;
  subject: string;
  message: string;
}

export interface ApplyInput {
  name: string;
  email: string;
  phone: string;
  programme: string;
  message: string;
}

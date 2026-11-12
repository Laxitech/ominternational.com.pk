export interface Center {
  id: string;
  slug: string;
  city: string;
  country: string;
  name: string;
  role: string;
  summary?: string;
  address?: string;
  contactName?: string;
  phone?: string;
  phones?: string[];
  whatsapp?: string;
  email?: string;
  emails?: string[];
  isInternational?: boolean;
}

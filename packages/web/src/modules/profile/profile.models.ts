export interface User {
  id: string;
  username: string;
  email: string;
  confirmed: boolean;
  picture: string | null;
  creditCard: string | null;
  phone: string | null;
}

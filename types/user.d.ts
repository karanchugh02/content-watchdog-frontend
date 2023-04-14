export type UserType = {
  id: number;
  name: string;
  email: string;
  token: string;
  expirationTime: Date;
} | null;

export interface User {
  id: string;
  username: string;
  email: string;
  confirmed: boolean;
  picture: string | null;
  creditCard: string | null;
  phone: string | null;
}

export interface ActivitiesList {
  worker: ActivityItemModel[];
  recruter: ActivityItemModel[];
  reviews: ActivityItemModel[];
}

export interface ActivityItemModel {
  id: string;
  picture: string | null;
  title: string;
  description: string;
}

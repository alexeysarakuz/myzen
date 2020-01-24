interface Tag {
  title: string;
}

export interface ResultItem {
  _id: string;
  account_id: string;
  profile_picture: string;
  name: string;
  surname: string;
  rating: number;
  tags: Tag[];
}

export interface StepsModels {
  create_account: boolean;
  add_payment: boolean;
  find_job: boolean;
  hire_freelancer: boolean;
}

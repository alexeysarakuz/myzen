interface Tag {
  title: string;
}

export interface ResultItem {
  id: string;
  username: string;
  profilePicture: string;
  rating: number;
  tags: Tag[];
}

export interface StepsModels {
  create_account: boolean;
  add_payment: boolean;
  find_job: boolean;
  hire_freelancer: boolean;
}

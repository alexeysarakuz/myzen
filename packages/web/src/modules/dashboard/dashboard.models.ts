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

export type Album = {
  userId: number;
  id: number;
  title: string;
};

export type User = {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: any;
  };
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
};

type SpotifyImage = {
  height: number;
  width: number;
  url: string;
}
export type Artist =
  {
    followers: {
      href: null | string,
      total: number,
    },
    genres: string[],
    id: string,
    images: SpotifyImage[],
    name: string,
    popularity: number,
    type: string,
}
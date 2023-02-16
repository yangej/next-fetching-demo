import type { Album, User } from "./types";

export const getAlbums = async (): Promise<Album[]> => {
  const response = await fetch("https://jsonplaceholder.typicode.com/albums", { next: { revalidate: 2 } });
  return response.json();
};

export const getUsers = async (): Promise<User[]> => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users", { next: { revalidate: 5 } });
  return response.json();
};

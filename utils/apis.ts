import type { Album, Artist, User } from "./types";

export const getAlbums = async (): Promise<Album[]> => {
  const response = await fetch("https://jsonplaceholder.typicode.com/albums", { next: { revalidate: 2 } });
  return response.json();
};

export const getUsers = async (): Promise<User[]> => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users", { next: { revalidate: 5 } });
  return response.json();
};

const headersForApiLayer = new Headers();
headersForApiLayer.append('apikey', process.env.API_LAYER_API_KEY || '');
export const getArtist = async (id: string): Promise<Artist> => {
  const response = await fetch(`https://api.apilayer.com/spotify/artists?ids=${id}`, { headers: headersForApiLayer, next: { revalidate: 5 } });
  return (await response.json()).artists[0];
}
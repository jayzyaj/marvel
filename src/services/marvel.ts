import { environment } from '../constants/environment';

const LIMIT_OF_REQUEST = 15; // default

export async function getAllMarvelHeroes() {
  const res = fetch(
    `${environment.baseUrl}/characters?apikey=${environment.marvelPublicApiKey}&hash=${
      environment.hash
    }&ts=${1551753938878}&limit=${LIMIT_OF_REQUEST}&offset=${0}`
  );
  const json = await (await res).json();
  return json;
}

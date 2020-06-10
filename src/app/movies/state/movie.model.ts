export interface Movie {
  id: number | string;
  title: string;
}

export function createMovie(params: Partial<Movie>) {
  return {
    id: 1,
    title: 'BIG BANG!'
  } as Movie;
}

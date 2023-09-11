interface GenresData {
  genre_name: string;
  genre_id: number;
}

const genresData: GenresData[] = [
  { genre_name: "Action", genre_id: 28 },
  { genre_name: "Adventure", genre_id: 12 },
  { genre_name: "Animation", genre_id: 16 },
  { genre_name: "Comedy", genre_id: 35 },
  { genre_name: "Crime", genre_id: 80 },
  { genre_name: "Documentary", genre_id: 99 },
  { genre_name: "Drama", genre_id: 18 },
  { genre_name: "Family", genre_id: 10751 },
  { genre_name: "Fantasy", genre_id: 14 },
  { genre_name: "History", genre_id: 36 },
  { genre_name: "Horror", genre_id: 27 },
  { genre_name: "Music", genre_id: 10402 },
  { genre_name: "Mystery", genre_id: 9648 },
  { genre_name: "Romance", genre_id: 10749 },
  { genre_name: "Science Fiction", genre_id: 878 },
  { genre_name: "TV Movie", genre_id: 10770 },
  { genre_name: "Thriller", genre_id: 53 },
  { genre_name: "War", genre_id: 10752 },
  { genre_name: "Western", genre_id: 37 },
];

export const getGenreName = (genreIds: number[]): string[] => {
  const genreNames: string[] = [];
  for (const genreId of genreIds) {
    const filteredGenData = genresData.filter((genre) => genre.genre_id === genreId)[0];
    genreNames.push(filteredGenData.genre_name);
  }

  return genreNames;
};

export const checkForLastGenre = (genreId: number, allGenresLength: number[]): boolean => {
  if (genreId === allGenresLength.length - 1) return true;
  return false;
};

export const NETFLIX_LOGO_URL =
  "https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production_2025-07-24/consent/87b6a5c0-0104-4e96-a291-092c11350111/019808e2-d1e7-7c0f-ad43-c485b7d9a221/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png";

export const USER_AVATAR_URL =
  "https://www.reshot.com/preview-assets/icons/NC83A9ZR6U/sofa-user-NC83A9ZR6U.svg";

export const TMDB_API_OPTIONS = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiYWNiNzQwZjhmNDRmY2Y5NjJlYTAwNWQ1MzJjZjdjYiIsIm5iZiI6MTc1NDA1MzcxNy42NDUsInN1YiI6IjY4OGNiYzU1MzViZTY4NWUzOGI3ZTc2MyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ._Hxb0S6xBGkOAugMnFlBxKkH9dDxqTPmwypQtGKYC7c",
  },
};

const TMDB_BASE_URL = "https://api.themoviedb.org/3";

export const TMDB_IMAGE_BASE_URL = "https://image.tmdb.org/t/p/original";

export const TMDB_POPULAR_MOVIES_URL = `${TMDB_BASE_URL}/movie/popular?language=en-US&page=1`;

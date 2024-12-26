interface Movie {
    id: string;
    title: string;
    genre: string;
    rating: number;
    link: string;
}

interface User {
    id: string;
    username: string;
    role: 'admin' | 'basic';
}

export const movies: Movie[] = [
        {
            "id": "1",
            "title": "Movie 1",
            "genre": "Comedy",
            "rating": 8.8,
            "link": "https://example.com/movie-1"
        },
        {
            "id": "2",
            "title": "Movie 2",
            "genre": "Drama",
            "rating": 8.7,
            "link": "https://example.com/movie-2"
        },
        {
            "id": "3",
            "title": "Movie 3",
            "genre": "Fantasy",
            "rating": 5.7,
            "link": "https://example.com/movie-3"
        },
        {
            "id": "4",
            "title": "Movie 4",
            "genre": "Sci-Fi",
            "rating": 6.8,
            "link": "https://example.com/movie-4"
        },
        {
            "id": "5",
            "title": "Movie 5",
            "genre": "Romance",
            "rating": 7.1,
            "link": "https://example.com/movie-5"
        },
        {
            "id": "6",
            "title": "Movie 6",
            "genre": "Fantasy",
            "rating": 6.0,
            "link": "https://example.com/movie-6"
        },
        {
            "id": "7",
            "title": "Movie 7",
            "genre": "Fantasy",
            "rating": 7.6,
            "link": "https://example.com/movie-7"
        },
        {
            "id": "8",
            "title": "Movie 8",
            "genre": "Sci-Fi",
            "rating": 7.6,
            "link": "https://example.com/movie-8"
        },
        {
            "id": "9",
            "title": "Movie 9",
            "genre": "Romance",
            "rating": 7.0,
            "link": "https://example.com/movie-9"
        },
        {
            "id": "10",
            "title": "Movie 10",
            "genre": "Fantasy",
            "rating": 8.3,
            "link": "https://example.com/movie-10"
        },
        {
            "id": "11",
            "title": "Movie 11",
            "genre": "Romance",
            "rating": 7.5,
            "link": "https://example.com/movie-11"
        },
        {
            "id": "12",
            "title": "Movie 12",
            "genre": "Action",
            "rating": 7.7,
            "link": "https://example.com/movie-12"
        },
        {
            "id": "13",
            "title": "Movie 13",
            "genre": "Drama",
            "rating": 8.6,
            "link": "https://example.com/movie-13"
        },
        {
            "id": "14",
            "title": "Movie 14",
            "genre": "Romance",
            "rating": 7.2,
            "link": "https://example.com/movie-14"
        },
        {
            "id": "15",
            "title": "Movie 15",
            "genre": "Thriller",
            "rating": 8.2,
            "link": "https://example.com/movie-15"
        },
        {
            "id": "16",
            "title": "Movie 16",
            "genre": "Comedy",
            "rating": 6.5,
            "link": "https://example.com/movie-16"
        },
        {
            "id": "17",
            "title": "Movie 17",
            "genre": "Horror",
            "rating": 6.9,
            "link": "https://example.com/movie-17"
        },
        {
            "id": "18",
            "title": "Movie 18",
            "genre": "Thriller",
            "rating": 5.9,
            "link": "https://example.com/movie-18"
        },
        {
            "id": "19",
            "title": "Movie 19",
            "genre": "Horror",
            "rating": 8.8,
            "link": "https://example.com/movie-19"
        },
        {
            "id": "20",
            "title": "Movie 20",
            "genre": "Horror",
            "rating": 8.4,
            "link": "https://example.com/movie-20"
        },
        {
            "id": "21",
            "title": "Movie 21",
            "genre": "Fantasy",
            "rating": 5.1,
            "link": "https://example.com/movie-21"
        },
        {
            "id": "22",
            "title": "Movie 22",
            "genre": "Comedy",
            "rating": 8.2,
            "link": "https://example.com/movie-22"
        },
        {
            "id": "23",
            "title": "Movie 23",
            "genre": "Thriller",
            "rating": 8.6,
            "link": "https://example.com/movie-23"
        },
        {
            "id": "24",
            "title": "Movie 24",
            "genre": "Romance",
            "rating": 5.4,
            "link": "https://example.com/movie-24"
        },
        {
            "id": "25",
            "title": "Movie 25",
            "genre": "Thriller",
            "rating": 5.1,
            "link": "https://example.com/movie-25"
        },
        {
            "id": "26",
            "title": "Movie 26",
            "genre": "Thriller",
            "rating": 6.0,
            "link": "https://example.com/movie-26"
        },
        {
            "id": "27",
            "title": "Movie 27",
            "genre": "Horror",
            "rating": 5.3,
            "link": "https://example.com/movie-27"
        },
        {
            "id": "28",
            "title": "Movie 28",
            "genre": "Romance",
            "rating": 6.7,
            "link": "https://example.com/movie-28"
        },
        {
            "id": "29",
            "title": "Movie 29",
            "genre": "Sci-Fi",
            "rating": 7.5,
            "link": "https://example.com/movie-29"
        },
        {
            "id": "30",
            "title": "Movie 30",
            "genre": "Horror",
            "rating": 8.1,
            "link": "https://example.com/movie-30"
        },
        {
            "id": "31",
            "title": "Movie 31",
            "genre": "Thriller",
            "rating": 6.6,
            "link": "https://example.com/movie-31"
        },
        {
            "id": "32",
            "title": "Movie 32",
            "genre": "Comedy",
            "rating": 7.5,
            "link": "https://example.com/movie-32"
        },
        {
            "id": "33",
            "title": "Movie 33",
            "genre": "Comedy",
            "rating": 7.2,
            "link": "https://example.com/movie-33"
        },
        {
            "id": "34",
            "title": "Movie 34",
            "genre": "Fantasy",
            "rating": 6.0,
            "link": "https://example.com/movie-34"
        },
        {
            "id": "35",
            "title": "Movie 35",
            "genre": "Drama",
            "rating": 7.7,
            "link": "https://example.com/movie-35"
        },
        {
            "id": "36",
            "title": "Movie 36",
            "genre": "Comedy",
            "rating": 8.6,
            "link": "https://example.com/movie-36"
        },
        {
            "id": "37",
            "title": "Movie 37",
            "genre": "Comedy",
            "rating": 7.3,
            "link": "https://example.com/movie-37"
        },
        {
            "id": "38",
            "title": "Movie 38",
            "genre": "Romance",
            "rating": 6.2,
            "link": "https://example.com/movie-38"
        },
        {
            "id": "39",
            "title": "Movie 39",
            "genre": "Drama",
            "rating": 6.0,
            "link": "https://example.com/movie-39"
        },
        {
            "id": "40",
            "title": "Movie 40",
            "genre": "Comedy",
            "rating": 6.4,
            "link": "https://example.com/movie-40"
        },
        {
            "id": "41",
            "title": "Movie 41",
            "genre": "Action",
            "rating": 5.1,
            "link": "https://example.com/movie-41"
        },
        {
            "id": "42",
            "title": "Movie 42",
            "genre": "Fantasy",
            "rating": 6.1,
            "link": "https://example.com/movie-42"
        },
        {
            "id": "43",
            "title": "Movie 43",
            "genre": "Sci-Fi",
            "rating": 8.6,
            "link": "https://example.com/movie-43"
        },
        {
            "id": "44",
            "title": "Movie 44",
            "genre": "Comedy",
            "rating": 7.7,
            "link": "https://example.com/movie-44"
        },
        {
            "id": "45",
            "title": "Movie 45",
            "genre": "Horror",
            "rating": 8.2,
            "link": "https://example.com/movie-45"
        },
        {
            "id": "46",
            "title": "Movie 46",
            "genre": "Romance",
            "rating": 7.1,
            "link": "https://example.com/movie-46"
        },
        {
            "id": "47",
            "title": "Movie 47",
            "genre": "Thriller",
            "rating": 7.6,
            "link": "https://example.com/movie-47"
        },
        {
            "id": "48",
            "title": "Movie 48",
            "genre": "Thriller",
            "rating": 5.6,
            "link": "https://example.com/movie-48"
        },
        {
            "id": "49",
            "title": "Movie 49",
            "genre": "Comedy",
            "rating": 5.6,
            "link": "https://example.com/movie-49"
        },
        {
            "id": "50",
            "title": "Movie 50",
            "genre": "Horror",
            "rating": 7.4,
            "link": "https://example.com/movie-50"
        },
        {
            "id": "51",
            "title": "Movie 51",
            "genre": "Comedy",
            "rating": 7.8,
            "link": "https://example.com/movie-51"
        },
        {
            "id": "52",
            "title": "Movie 52",
            "genre": "Thriller",
            "rating": 5.5,
            "link": "https://example.com/movie-52"
        },
        {
            "id": "53",
            "title": "Movie 53",
            "genre": "Horror",
            "rating": 6.3,
            "link": "https://example.com/movie-53"
        },
        {
            "id": "54",
            "title": "Movie 54",
            "genre": "Action",
            "rating": 7.5,
            "link": "https://example.com/movie-54"
        },
        {
            "id": "55",
            "title": "Movie 55",
            "genre": "Fantasy",
            "rating": 6.5,
            "link": "https://example.com/movie-55"
        },
        {
            "id": "56",
            "title": "Movie 56",
            "genre": "Action",
            "rating": 5.2,
            "link": "https://example.com/movie-56"
        },
        {
            "id": "57",
            "title": "Movie 57",
            "genre": "Thriller",
            "rating": 6.0,
            "link": "https://example.com/movie-57"
        },
        {
            "id": "58",
            "title": "Movie 58",
            "genre": "Drama",
            "rating": 6.6,
            "link": "https://example.com/movie-58"
        },
        {
            "id": "59",
            "title": "Movie 59",
            "genre": "Sci-Fi",
            "rating": 7.5,
            "link": "https://example.com/movie-59"
        },
        {
            "id": "60",
            "title": "Movie 60",
            "genre": "Action",
            "rating": 6.9,
            "link": "https://example.com/movie-60"
        },
        {
            "id": "61",
            "title": "Movie 61",
            "genre": "Thriller",
            "rating": 7.9,
            "link": "https://example.com/movie-61"
        },
        {
            "id": "62",
            "title": "Movie 62",
            "genre": "Fantasy",
            "rating": 5.9,
            "link": "https://example.com/movie-62"
        },
        {
            "id": "63",
            "title": "Movie 63",
            "genre": "Romance",
            "rating": 8.3,
            "link": "https://example.com/movie-63"
        },
        {
            "id": "64",
            "title": "Movie 64",
            "genre": "Thriller",
            "rating": 5.5,
            "link": "https://example.com/movie-64"
        },
        {
            "id": "65",
            "title": "Movie 65",
            "genre": "Fantasy",
            "rating": 8.9,
            "link": "https://example.com/movie-65"
        },
        {
            "id": "66",
            "title": "Movie 66",
            "genre": "Sci-Fi",
            "rating": 7.9,
            "link": "https://example.com/movie-66"
        },
        {
            "id": "67",
            "title": "Movie 67",
            "genre": "Sci-Fi",
            "rating": 6.8,
            "link": "https://example.com/movie-67"
        },
        {
            "id": "68",
            "title": "Movie 68",
            "genre": "Comedy",
            "rating": 5.7,
            "link": "https://example.com/movie-68"
        },
        {
            "id": "69",
            "title": "Movie 69",
            "genre": "Action",
            "rating": 6.0,
            "link": "https://example.com/movie-69"
        },
        {
            "id": "70",
            "title": "Movie 70",
            "genre": "Thriller",
            "rating": 5.1,
            "link": "https://example.com/movie-70"
        },
        {
            "id": "71",
            "title": "Movie 71",
            "genre": "Sci-Fi",
            "rating": 6.7,
            "link": "https://example.com/movie-71"
        },
        {
            "id": "72",
            "title": "Movie 72",
            "genre": "Fantasy",
            "rating": 8.8,
            "link": "https://example.com/movie-72"
        },
        {
            "id": "73",
            "title": "Movie 73",
            "genre": "Sci-Fi",
            "rating": 5.0,
            "link": "https://example.com/movie-73"
        },
        {
            "id": "74",
            "title": "Movie 74",
            "genre": "Action",
            "rating": 6.2,
            "link": "https://example.com/movie-74"
        },
        {
            "id": "75",
            "title": "Movie 75",
            "genre": "Romance",
            "rating": 6.6,
            "link": "https://example.com/movie-75"
        },
        {
            "id": "76",
            "title": "Movie 76",
            "genre": "Action",
            "rating": 7.3,
            "link": "https://example.com/movie-76"
        },
        {
            "id": "77",
            "title": "Movie 77",
            "genre": "Action",
            "rating": 5.8,
            "link": "https://example.com/movie-77"
        },
        {
            "id": "78",
            "title": "Movie 78",
            "genre": "Fantasy",
            "rating": 8.3,
            "link": "https://example.com/movie-78"
        },
        {
            "id": "79",
            "title": "Movie 79",
            "genre": "Sci-Fi",
            "rating": 8.2,
            "link": "https://example.com/movie-79"
        },
        {
            "id": "80",
            "title": "Movie 80",
            "genre": "Drama",
            "rating": 8.5,
            "link": "https://example.com/movie-80"
        },
        {
            "id": "81",
            "title": "Movie 81",
            "genre": "Fantasy",
            "rating": 8.9,
            "link": "https://example.com/movie-81"
        },
        {
            "id": "82",
            "title": "Movie 82",
            "genre": "Sci-Fi",
            "rating": 5.9,
            "link": "https://example.com/movie-82"
        },
        {
            "id": "83",
            "title": "Movie 83",
            "genre": "Thriller",
            "rating": 8.9,
            "link": "https://example.com/movie-83"
        },
        {
            "id": "84",
            "title": "Movie 84",
            "genre": "Romance",
            "rating": 7.7,
            "link": "https://example.com/movie-84"
        },
        {
            "id": "85",
            "title": "Movie 85",
            "genre": "Fantasy",
            "rating": 5.5,
            "link": "https://example.com/movie-85"
        },
        {
            "id": "86",
            "title": "Movie 86",
            "genre": "Horror",
            "rating": 6.8,
            "link": "https://example.com/movie-86"
        },
        {
            "id": "87",
            "title": "Movie 87",
            "genre": "Drama",
            "rating": 5.8,
            "link": "https://example.com/movie-87"
        },
        {
            "id": "88",
            "title": "Movie 88",
            "genre": "Sci-Fi",
            "rating": 7.0,
            "link": "https://example.com/movie-88"
        },
        {
            "id": "89",
            "title": "Movie 89",
            "genre": "Drama",
            "rating": 5.3,
            "link": "https://example.com/movie-89"
        },
        {
            "id": "90",
            "title": "Movie 90",
            "genre": "Fantasy",
            "rating": 7.8,
            "link": "https://example.com/movie-90"
        },
        {
            "id": "91",
            "title": "Movie 91",
            "genre": "Romance",
            "rating": 8.3,
            "link": "https://example.com/movie-91"
        },
        {
            "id": "92",
            "title": "Movie 92",
            "genre": "Romance",
            "rating": 5.5,
            "link": "https://example.com/movie-92"
        },
        {
            "id": "93",
            "title": "Movie 93",
            "genre": "Fantasy",
            "rating": 8.1,
            "link": "https://example.com/movie-93"
        },
        {
            "id": "94",
            "title": "Movie 94",
            "genre": "Action",
            "rating": 8.1,
            "link": "https://example.com/movie-94"
        },
        {
            "id": "95",
            "title": "Movie 95",
            "genre": "Drama",
            "rating": 7.9,
            "link": "https://example.com/movie-95"
        },
        {
            "id": "96",
            "title": "Movie 96",
            "genre": "Comedy",
            "rating": 8.8,
            "link": "https://example.com/movie-96"
        },
        {
            "id": "97",
            "title": "Movie 97",
            "genre": "Sci-Fi",
            "rating": 7.4,
            "link": "https://example.com/movie-97"
        },
        {
            "id": "98",
            "title": "Movie 98",
            "genre": "Romance",
            "rating": 6.4,
            "link": "https://example.com/movie-98"
        },
        {
            "id": "99",
            "title": "Movie 99",
            "genre": "Thriller",
            "rating": 6.1,
            "link": "https://example.com/movie-99"
        },
        {
            "id": "100",
            "title": "Movie 100",
            "genre": "Horror",
            "rating": 6.4,
            "link": "https://example.com/movie-100"
        }
];

export const users: User[] = [
    { id: '1', username: 'admin', role: 'admin' },
    { id: '2', username: 'user', role: 'basic' }
];

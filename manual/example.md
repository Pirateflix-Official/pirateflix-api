# Example

In this example section you can read about the routes that are provided by pirateflix API.

## Status

**GET - `https://pirateflix.app some basic information about the server on which the API is running on.

**Example output:**

```javascript
{
  "repo": "https://pirateflix.app  "server": "serv01",
  "status": "Scraping EZTV",
  "totalAnimes": 623,
  "totalMovies": 5593,
  "totalShows": 1482,
  "updated": 1470233725,
  "uptime": 9,
  "version": "2.1.0",
  "commit": "ad78dd1"
}
```

## Logs

**GET - `https://pirateflix.app the error log. Each message will be in JSON format.

## Export

**GET - `https://pirateflix.app the contents a collection in a JSON file. Possible collections are:
 - anime
 - movie
 - shows

## Anime

**GET - `https://pirateflix.app an array of anime shows. The array has a has a maximum length of 50 anime shows per page.

**Example output:**
```javascript
[
  {
    "_id": "5646",
    "mal_id": "9253",
    "title": "Steins;Gate",
    "year": "2011",
    "slug": "steins-gate",
    "type": "show",
    "genres": [
      "Comedy",
      "Sci-Fi",
      "Mystery",
      "Thriller",
      "Drama"
    ],
    "images": {
      "banner": "https://pirateflix.app      "fanart": "https://pirateflix.app      "poster": "https://pirateflix.app    },
    "rating": {
      "hated": 100,
      "loved": 100,
      "votes": 0,
      "watching": 0,
      "percentage": 92
    }
  },
  ...
]
```

**GET - `https://pirateflix.app information about a single anime show based on the given id.

**Example output:**

```javascript
{
  "_id": "5646",
  "mal_id": "9253",
  "title": "Steins;Gate",
  "year": "2011",
  "slug": "steins-gate",
  "synopsis": "Steins;Gate is set in the summer of 2010, approximately one year after the events that took place in Chaos;Head, in Akihabara.\n\nSteins;Gate is about a group of friends who have customized their microwave into a device that can send emails to the past (known as D-mails). As they perform different experiments, an organization named SERN, who has been doing their own research on time travel, tracks them down and now the characters have to find a way to avoid being captured by them.\n\n(Sources: VNDB, Wikipedia)",
  "runtime": "24",
  "status": "Finished Airing",
  "type": "show",
  "num_seasons": 1,
  "last_updated": 1469804168091,
  "__v": 0,
  "episodes": [
    {
      "title": "Episode 13",
      "torrents": {
        "0": {
          "url": "magnet:?xt=urn:btih:IEQGMZOUZJQ5FJJZNURKTTND3KUHBAHT&tr=https://pirateflix.app          "seeds": 0,
          "peers": 0,
          "provider": "HorribleSubs"
        },
        "480p": {
          "url": "magnet:?xt=urn:btih:IEQGMZOUZJQ5FJJZNURKTTND3KUHBAHT&tr=https://pirateflix.app          "seeds": 0,
          "peers": 0,
          "provider": "HorribleSubs"
        },
        "720p": {
          "url": "magnet:?xt=urn:btih:MCZBSUZP4YX2O4SBMBBXLFWBIQCEPOZF&tr=https://pirateflix.app          "seeds": 0,
          "peers": 0,
          "provider": "HorribleSubs"
        }
      },
      "season": "1",
      "episode": "13",
      "overview": "We still don't have single episode overviews for anime… Sorry",
      "tvdb_id": ""
    },
    ...
  ],
  "genres": [
    "Comedy",
    "Sci-Fi",
    "Mystery",
    "Thriller",
    "Drama"
  ],
  "images": {
    "banner": "https://pirateflix.app    "fanart": "https://pirateflix.app    "poster": "https://pirateflix.app  },
  "rating": {
    "hated": 100,
    "loved": 100,
    "votes": 0,
    "watching": 0,
    "percentage": 92
  }
}
```

**GET - `https://pirateflix.app a random anime from the database. The output will be similar to the on directly above.

## Movie

**GET - `https://pirateflix.app an array of movies. The array has a has a maximum length of 50 movies per page.

**Example output:**

```javascript
[
  {
    "_id": "tt1375666",
    "imdb_id": "tt1375666",
    "title": "Inception",
    "year": "2010",
    "synopsis": "Cobb, a skilled thief who commits corporate espionage by infiltrating the subconscious of his targets is offered a chance to regain his old life as payment for a task considered to be impossible: \"inception\", the implantation of another person's idea into a target's subconscious.",
    "runtime": "148",
    "released": 1279238400,
    "trailer": "https://pirateflix.app    "certification": "PG-13",
    "torrents": {
      "en": {
        "1080p": {
          "url": "magnet:?xt=urn:btih:224BF45881252643DFC2E71ABC7B2660A21C68C4&tr=udp://glotorrents.pw:6969/announce&tr=udp://tracker.opentrackr.org:1337/announce&tr=udp://torrent.gresille.org:80/announce&tr=udp://tracker.openbittorrent.com:80&tr=udp://tracker.coppersurfer.tk:6969&tr=udp://tracker.leechers-paradise.org:6969&tr=udp://p4p.arenabg.ch:1337&tr=udp://tracker.internetwarriors.net:1337",
          "seed": 927,
          "peer": 82,
          "size": 1986422374,
          "filesize": "1.85 GB",
          "provider": "YTS"
        },
        "720p": {
          "url": "magnet:?xt=urn:btih:CE9156EB497762F8B7577B71C0647A4B0C3423E1&tr=udp://glotorrents.pw:6969/announce&tr=udp://tracker.opentrackr.org:1337/announce&tr=udp://torrent.gresille.org:80/announce&tr=udp://tracker.openbittorrent.com:80&tr=udp://tracker.coppersurfer.tk:6969&tr=udp://tracker.leechers-paradise.org:6969&tr=udp://p4p.arenabg.ch:1337&tr=udp://tracker.internetwarriors.net:1337",
          "seed": 571,
          "peer": 47,
          "size": 1148903752,
          "filesize": "1.07 GB",
          "provider": "YTS"
        }
      }
    },
    "genres": [
      "action",
      "adventure",
      "mystery",
      "science-fiction",
      "thriller"
    ],
    "images": {
      "poster": "https://pirateflix.app      "fanart": "https://pirateflix.app      "banner": "https://pirateflix.app    },
    "rating": {
      "percentage": 88,
      "watching": 2,
      "votes": 25134,
      "loved": 100,
      "hated": 100
    }
  },
  ...
]
```

**GET - `https://pirateflix.app information about a single movie based on the given imdb id.

**Example output:**

```javascript
{
  "_id": "tt1375666",
  "imdb_id": "tt1375666",
  "title": "Inception",
  "year": "2010",
  "synopsis": "Cobb, a skilled thief who commits corporate espionage by infiltrating the subconscious of his targets is offered a chance to regain his old life as payment for a task considered to be impossible: \"inception\", the implantation of another person's idea into a target's subconscious.",
  "runtime": "148",
  "released": 1279238400,
  "trailer": "https://pirateflix.app  "certification": "PG-13",
  "torrents": {
    "en": {
      "1080p": {
        "url": "magnet:?xt=urn:btih:224BF45881252643DFC2E71ABC7B2660A21C68C4&tr=udp://glotorrents.pw:6969/announce&tr=udp://tracker.opentrackr.org:1337/announce&tr=udp://torrent.gresille.org:80/announce&tr=udp://tracker.openbittorrent.com:80&tr=udp://tracker.coppersurfer.tk:6969&tr=udp://tracker.leechers-paradise.org:6969&tr=udp://p4p.arenabg.ch:1337&tr=udp://tracker.internetwarriors.net:1337",
        "seed": 927,
        "peer": 82,
        "size": 1986422374,
        "filesize": "1.85 GB",
        "provider": "YTS"
      },
      "720p": {
        "url": "magnet:?xt=urn:btih:CE9156EB497762F8B7577B71C0647A4B0C3423E1&tr=udp://glotorrents.pw:6969/announce&tr=udp://tracker.opentrackr.org:1337/announce&tr=udp://torrent.gresille.org:80/announce&tr=udp://tracker.openbittorrent.com:80&tr=udp://tracker.coppersurfer.tk:6969&tr=udp://tracker.leechers-paradise.org:6969&tr=udp://p4p.arenabg.ch:1337&tr=udp://tracker.internetwarriors.net:1337",
        "seed": 571,
        "peer": 47,
        "size": 1148903752,
        "filesize": "1.07 GB",
        "provider": "YTS"
      }
    }
  },
  "genres": [
    "action",
    "adventure",
    "mystery",
    "science-fiction",
    "thriller"
  ],
  "images": {
    "poster": "https://pirateflix.app    "fanart": "https://pirateflix.app    "banner": "https://pirateflix.app  },
  "rating": {
    "percentage": 88,
    "watching": 2,
    "votes": 25134,
    "loved": 100,
    "hated": 100
  }
}
```

**GET - `https://pirateflix.app a random movie from the database. The output will be similar to the on directly above.

## Show

**GET - `https://pirateflix.app an array of shows. The array has a has a maximum length of 50 shows per page.

**Example output:**

```javascript
[
  {
    "_id": "tt0944947",
    "imdb_id": "tt0944947",
    "tvdb_id": "121361",
    "title": "Game of Thrones",
    "year": "2011",
    "slug": "game-of-thrones",
    "num_seasons": 5,
    "images": {
      "poster": "https://pirateflix.app      "fanart": "https://pirateflix.app      "banner": "https://pirateflix.app    },
    "rating": {
      "percentage": 94,
      "watching": 626,
      "votes": 47012,
      "loved": 100,
      "hated": 100
    }
  },
  {
    "_id": "tt0903747",
    "imdb_id": "tt0903747",
    "tvdb_id": "81189",
    "title": "Breaking Bad",
    "year": "2008",
    "slug": "breaking-bad",
    "num_seasons": 5,
    "images": {
      "banner": "https://pirateflix.app      "fanart": "https://pirateflix.app      "poster": "https://pirateflix.app    },
    "rating": {
      "hated": 100,
      "loved": 100,
      "votes": 39660,
      "watching": 35,
      "percentage": 94
    }
  },
  ...
]
```

**GET - `https://pirateflix.app information about a single show based on the given imdb id.

**Example output:**

```javascript
{
  "_id": "tt0944947",
  "imdb_id": "tt0944947",
  "tvdb_id": "121361",
  "title": "Game of Thrones",
  "year": "2011",
  "slug": "game-of-thrones",
  "synopsis": "Seven noble families fight for control of the mythical land of Westeros. Friction between the houses leads to full-scale war. All while a very ancient evil awakens in the farthest north. Amidst the war, a neglected military order of misfits, the Night's Watch, is all that stands between the realms of men and the icy horrors beyond.",
  "runtime": "60",
  "country": "us",
  "network": "HBO",
  "air_day": "Sunday",
  "air_time": "21:00",
  "status": "returning series",
  "num_seasons": 5,
  "last_updated": 1464725906217,
  "__v": 0,
  "episodes": [
    {
      "torrents": {
        "0": {
          "provider": "VTV",
          "peers": 303,
          "seeds": 290,
          "url": "magnet:?xt=urn:btih:D7D4BA47D984061F942D0D2F030AA927C943387E&dn=game+of+thrones+6x05+720p+hdtv+x264+avs+vtv&tr=udp%3A%2F%2Ftracker.publicbt.com%2Fannounce&tr=udp%3A%2F%2Fglotorrents.pw%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker.openbittorrent.com%3A80%2Fannounce&tr=udp%3A%2F%2Ftracker.opentrackr.org%3A1337%2Fannounce"
        },
        "720p": {
          "provider": "VTV",
          "peers": 303,
          "seeds": 290,
          "url": "magnet:?xt=urn:btih:D7D4BA47D984061F942D0D2F030AA927C943387E&dn=game+of+thrones+6x05+720p+hdtv+x264+avs+vtv&tr=udp%3A%2F%2Ftracker.publicbt.com%2Fannounce&tr=udp%3A%2F%2Fglotorrents.pw%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker.openbittorrent.com%3A80%2Fannounce&tr=udp%3A%2F%2Ftracker.opentrackr.org%3A1337%2Fannounce"
        }
      },
      "watched": {
        "watched": false
      },
      "first_aired": 1463965200,
      "date_based": false,
      "overview": "Tyrion seeks a strange ally. Bran learns a great deal. Brienne goes on a mission. Arya is given a chance to prove herself.",
      "title": "The Door",
      "episode": 5,
      "season": 6,
      "tvdb_id": 5600132
    },
    ...
  ],
  "genres": [
    "drama",
    "fantasy",
    "science-fiction",
    "action",
    "adventure"
  ],
  "images": {
    "poster": "https://pirateflix.app    "fanart": "https://pirateflix.app    "banner": "https://pirateflix.app  },
  "rating": {
    "percentage": 94,
    "watching": 626,
    "votes": 47012,
    "loved": 100,
    "hated": 100
  }
}
```

**GET - `https://pirateflix.app a random show from the database. The output will be similar to the on directly above.

# Query strings

The following routes support query strings:

- **GET - `https://pirateflix.app **GET - `https://pirateflix.app **GET - `https://pirateflix.app Sorting

`sort=`

###### Anime

Possible options for **anime** are:

- `name`: sort by the release date of the movies.
- `rating`: sort by the highest rated anime.
- `year`: sort by the release year of the anime.

###### Movies

Possible options for **movies** are:

- `last added`: sort by the release date of the movies.
- `rating`: sort by the highest rated movies.
- `title`: sort by the title of the movies.
- `trending`: sort by trending movies.
- `year`: sort by the release year of the movies.

###### Shows

Possible options for **shows** are:

- `name`: sort by the title of the shows.
- `rating`: sort by the highest rated shows.
- `trending`: sort by trending shows.
- `updated` sort by the most recently aired shows.
- `year`: sort by the release year of the movies.

## Ordering

`order=`

To order ascending: `1`
To order descending: `-1`

## Genres

`genre=`

### Movies & Shows

The API supports the following genres for **shows** and **movies**:
 - action
 - adventure
 - animation
 - comedy
 - crime
 - disaster
 - documentary
 - drama
 - eastern
 - family
 - fan-film
 - fantasy
 - film-noir
 - history
 - holiday
 - horror
 - indie
 - music
 - mystery
 - none
 - road
 - romance
 - science-fiction
 - short
 - sports
 - sporting-event
 - suspense
 - thriller
 - tv-movie
 - war
 - western

### Anime

The API supports the following genres for **anime**:
 - Action
 - Ecchi
 - Harem
 - Romance
 - School
 - Supernatural
 - Drama
 - Comedy
 - Mystery
 - Police
 - Sports
 - Mecha
 - Sci-Fi
 - Slice of Life
 - Fantasy
 - Adventure
 - Gore
 - Music
 - Psychological
 - Shoujo Ai
 - Yuri
 - Magic
 - Horror
 - Thriller
 - Gender Bender
 - Parody
 - Historical
 - Racing
 - Demons
 - Samurai
 - Super Power
 - Military
 - Dementia
 - Mahou Shounen
 - Game
 - Martial Arts
 - Vampire
 - Kids
 - Mahou Shoujo
 - Space
 - Shounen Ai

## Keywords

`keywords=`

Search based on keywords.

// Import the necessary modules.
// @flow
import 'dotenv/config'
/**
 * An EZTV API wrapper to get data from eztv.ag.
 * @external {Eztv} https://pirateflix.app */
import Eztv from 'eztv-api-pt'
/**
 * A Fanart.tv API wrapper for NodeJS.
 * @external {Fanart} https://pirateflix.app */
import Fanart from 'fanart.tv-api'
/**
 * A HorribleSubs API wrapper to get data from horriblesubs.info
 * @external {HorribleSubs} https://pirateflix.app */
import HorribleSubs from 'horriblesubs-api'
/**
 * A KickassTorrents API wrapper for NodeJs.
 * @external {Kat} https://pirateflix.app */
import Kat from 'kat-api-pt'
/**
 * A nyaa.se API wrapper for NodeJS.
 * @external {Nyaa} https://pirateflix.app */
import Nyaa from 'nyaa-api-pt'
/**
 * An OMDB API wrapper for NodeJS.
 * @external {Omdb} https://pirateflix.app */
import Omdb from 'omdb-api-pt'
/**
 * TheMovieDB API wrapper, written in node.js
 * @external {Tmdb} https://pirateflix.app */
import Tmdb from 'tmdbapi'
/**
 * A Trakt.tv API wrapper for Node.js
 * @external {Trakt} https://pirateflix.app */
import Trakt from 'trakt.tv'
/**
 * Node.js library for accessing TheTVDB API
 * @external {Tvdb} https://pirateflix.app */
import Tvdb from 'node-tvdb'
/**
 * A NodeJS wrapper for yts.ag
 * @external {Yts} https://pirateflix.app */
import Yts from 'yts-api-pt'

/**
 * A configured Eztv API.
 * @type {Eztv}
 * @see https://pirateflix.app */
const eztv = new Eztv()
eztv.getAll = eztv.getAllShows
eztv.getData = eztv.getShowData

/**
 * A configured Fanart API.
 * @type {Fanart}
 * @see https://pirateflix.app */
const fanart = new Fanart({
  apiKey: process.env.FANART_KEY
})

/**
 * A configured HorribleSubs API.
 * @type {HorribleSubs}
 * @see https://pirateflix.app */
const horribleSubs = new HorribleSubs()
horribleSubs.getAll = horribleSubs.getAllAnime
horribleSubs.getData = horribleSubs.getAnimeData

/**
 * A configured Kat API.
 * @type {Kat}
 * @see https://pirateflix.app */
const kat = new Kat()

/**
 * A configured Nyaa API.
 * @type {Nyaa}
 * @see https://pirateflix.app */
const nyaa = new Nyaa({
  apiToken: process.env.NYAA_KEY
})

/**
 * A configured Omdb API.
 * @type {Omdb}
 * @see https://pirateflix.app */
const omdb = new Omdb({
  apiKey: process.env.OMDB_KEY
})

/**
 * A configured Tmdb API.
 * @type {Tmdb}
 * @see https://pirateflix.app */
const tmdb = new Tmdb({
  apiv3: process.env.TMDB_KEY
})

/**
 * A configured Trakt API.
 * @type {Trakt}
 * @see https://pirateflix.app */
const trakt = new Trakt({
  client_id: process.env.TRAKT_KEY
})

/**
 * A configured Tvdb API.
 * @type {Tvdb}
 * @see https://pirateflix.app */
const tvdb = new Tvdb(process.env.TVDB_KEY)

/**
 * A configured Yts API.
 * @type {Yts}
 * @see https://pirateflix.app */
const yts = new Yts()
yts.search = yts.getMovies

/**
 * Export the API modules.
 * @type {Object}
 * @ignore
 */
export {
  eztv,
  fanart,
  horribleSubs,
  kat,
  nyaa,
  omdb,
  tmdb,
  trakt,
  tvdb,
  yts
}

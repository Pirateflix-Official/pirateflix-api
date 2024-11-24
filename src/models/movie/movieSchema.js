// Import the necessary modules.
// @flow
import { Schema } from 'mongoose'

import { contentSchema } from '../content/contentSchema'

/**
 * The schema object for the movie model.
 * @type {Object}
 */
export const movieSchema: Object = {
  ...contentSchema,
  language: String,
  released: Number,
  trailer: {
    type: String,
    default: null
  },
  certification: String,
  torrents: {}
}

/**
 * The movie schema used by mongoose.
 * @type {Object}
 * @see https://pirateflix.app */
export default new Schema(movieSchema, {
  collection: 'movies'
})

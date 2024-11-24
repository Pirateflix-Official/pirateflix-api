// Import the necessary modules.
// @flow
import { Schema } from 'mongoose'

import { movieSchema } from '../movie/movieSchema'

/**
 * The anime movie schema used by mongoose.
 * @type {Object}
 * @see https://pirateflix.app */
export default new Schema(movieSchema, {
  collection: 'animes'
})

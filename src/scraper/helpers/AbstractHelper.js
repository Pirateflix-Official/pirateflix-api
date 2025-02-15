// Import the necessary modules.
// @flow
import IHelper from './IHelper'
import type {
  AnimeMovie,
  AnimeShow,
  Movie,
  Show
} from '../../models'

/**
 * Abstract class for saving content.
 * @implements {IHelper}
 * @type {AbstractHelper}
 */
export default class AbstractHelper extends IHelper {

  /**
   * The default image link.
   * @protected
   * @type {string}
   */
  static Holder: string = 'images/posterholder.png'

  /**
   * The default image object.
   * @protected
   * @type {Object}
   */
  static DefaultImages: Object = {
    banner: AbstractHelper.Holder,
    fanart: AbstractHelper.Holder,
    poster: AbstractHelper.Holder
  }

  /**
   * The name of the torrent provider.
   * @type {string}
   */
  name: string

  /**
   * The model to create or alter.
   * @type {AnimeMovie|AnimeShow|Movie|Show}
   * @see https://pirateflix.app   */
  Model: AnimeMovie | AnimeShow | Movie | Show

  /**
   * Create a base helper class for content.
   * @param {!string} name - The name of the content provider.
   * @param {!AnimeMovie|AnimeShow|Movie|Show} Model - The model to help fill.
   */
  constructor({name, Model}: Object): void {
    super()

    /**
     * The name of the torrent provider.
     * @type {string}
     */
    this.name = name
    /**
     * The model to create or alter.
     * @type {AnimeMovie|AnimeShow|Movie|Show}
     * @see https://pirateflix.app     */
    this.Model = Model
  }

  /**
   * Method to check the given images against the default ones.
   * @override
   * @protected
   * @param {Object} images - The images to check.
   * @throws {Error} - An image could not been found!
   * @returns {Object|undefined} - Throws an error if the given images are the
   * same, otherwise it will return the given images.
   */
  checkImages(images: Object): Object | void {
    for (const i in images) {
      if (images[i] === AbstractHelper.Holder) {
        throw new Error('An image could not been found!')
      }
    }

    return images
  }

}

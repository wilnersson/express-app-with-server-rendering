/**
 * Service that supplies basic operations for Movies.
 *
 * @author Henrik Wilnersson <hw222nq@student.lnu.se>
 */

/**
 * Class for the Movies service.
 */
export class MoviesService {
  /**
   * Fetches all Movies.
   *
   * @returns {Promise} - A promise that resolves to an array of Movie objects.
   */
  async get () {
    return new Promise((resolve, reject) => {
      resolve([
        {
          title: 'Armageddon',
          year: 1998,
          durationInMinutes: 151
        },
        {
          title: 'Harry Potter and the Order of the Phoenix',
          year: 2007,
          durationInMinutes: 138
        },
        {
          title: 'The Matrix',
          year: 1999,
          durationInMinutes: 136
        }
      ])
    })
  }
}

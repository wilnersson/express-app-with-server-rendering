/**
 * Container class that encapsulates dependencies.
 */
export class IoCContainer {
  #services
  #singletons

  /**
   * Constructor for IoCContainer.
   */
  constructor () {
    this.#services = new Map()
    this.#singletons = new Map()
  }

  /**
   * Registers a new service/dependency in the container.
   *
   * @param {string} name - String reference for lookup.
   * @param {object} definition - The dependant string, type or class.
   * @param {object} options - Options object.
   * @param {string[]} options.dependencies - Reference to neted dependencies.
   * @param {boolean} options.isSingleton - True if service is a singleton.
   * @param {boolean} options.isType - True if service is a Type.
   */
  registerService (name, definition, { dependencies, isSingleton = false, isType = false } = {}) {
    this.#services.set(
      name, {
        definition,
        dependencies,
        isSingleton: !!isSingleton,
        isType: !!isType
      }
    )
  }

  /**
   * Resolves a service name to its definition.
   *
   * @param {string} name - The reference to the service to resolve.
   * @returns {*} - A service.
   */
  resolveService (name) {
    const service = this.#services.get(name)

    if (service === undefined) {
      throw new ReferenceError(`No service of the name ${name} is registered in the IoCContainer.`)
    }

    if (typeof service.definition !== 'function' || service.isType) {
      return service.definition
    }
  }
}

/**
 * In-memory todos store.
 * For demo purposes, gets the logger injected.
 */
export default function createTodoStore(logger) {
  let todos = []
  let ids = 1

  return {
    async find() {
      logger.debug('Finding todos')
      return [...todos]
    },

    async get(id) {
      logger.debug(`Getting todo with id ${id}`)
      const found = todos.find(x => x.id === id.toString())
      if (!found) {
        return null
      }
      return { ...found }
    },

    async create(data) {
      const todo = {
        ...data,
        id: (ids++).toString()
      }
      todos.push(todo)
      logger.debug('Created new todo', todo)
      return todo
    },

    async update(id, data) {
      const todo = todos.find(x => x.id === id.toString())
      Object.assign(todo, data)
      logger.debug(`Updated todo ${id}`, todo)
      return todo
    },

    async remove(id) {
      todos = __todos.filter(x => x.id !== id.toString())
      logger.debug(`Removed todo ${id}`)
    }
  }
}

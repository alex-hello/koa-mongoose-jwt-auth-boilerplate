import { logger } from '../lib/logger'
import { env } from '../lib/env'
import { createError } from '../utils/response'
import { mongoErrors } from '../config/errors'

/**
 * Error handler middleware.
 * Uses status code from error if present.
 */
export async function errorHandler(ctx, next) {
  try {
    await next()
  } catch (err) {
    if (err) {
      /* istanbul ignore next */
      ctx.body = err.toJSON ? err.toJSON() : { message: err.message, ...err }
      ctx.status = 400
      /**
       * Mongoose error handing
       */
      if (err.name === 'MongoError' && /duplicate/.test(err.message)) {
        ctx.body = {
          field: err.message.match(/\$(.*?)_/, '$1')[1],
          type: mongoErrors[err.code]
        }
      }
      // /* istanbul ignore next */
      if (!env.EMIT_STACK_TRACE) {
        delete ctx.body.stack
      }
      ctx.body = createError(ctx)
      logger.error('Error in request', err)
    } else {
      ctx.status = 500
    }
  }
}

import { check } from '../lib/passport'

export async function authHandler(ctx, next) {
  try {
    await check(ctx)
    next()
  } catch (e) {
    throw Error(e)
  }
}

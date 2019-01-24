import { UserModel } from '../schemas/user'
import { auth, check } from '../lib/passport'
import { createResponse } from '../utils/response'

export default class UserService {
  async create(ctx, next) {
    let User = new UserModel(ctx.request.body)

    // Create user
    try {
      await User.save()
    } catch (e) {
      throw e
    }

    // Immediate auth if user create successful
    try {
      await auth(ctx, next)
    } catch (e) {
      throw new TypeError(e)
    }

    return createResponse(ctx)
  }

  async isAuth(ctx) {
    await check(ctx)

    return createResponse(ctx)
  }

  async login(ctx, next) {
    await auth(ctx, next)

    return createResponse(ctx)
  }
}

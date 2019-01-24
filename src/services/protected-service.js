import { createResponse } from '../utils/response'

export default class ProtectedService {
  async check(ctx) {
    ctx.body = {
      message: 'Authorization passed, hello from service'
    }
    return createResponse(ctx)
  }
}

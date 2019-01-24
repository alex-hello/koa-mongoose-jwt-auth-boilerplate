import { createController } from 'awilix-koa'
import { authHandler } from '../middleware/auth'

const api = protectedService => ({
  checkProtected: async ctx => ctx.ok(await protectedService.check(ctx))
})

export default createController(api)
  .prefix('/protected')
  .get('', 'checkProtected')
  .before([authHandler])

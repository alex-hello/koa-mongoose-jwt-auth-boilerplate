import { createController } from 'awilix-koa'

const api = userService => ({
  createUser: async (ctx, next) =>
    ctx.created(await userService.create(ctx, next)),
  checkUser: async ctx => ctx.ok(await userService.isAuth(ctx)),
  loginUser: async (ctx, next) => ctx.ok(await userService.login(ctx, next))
})

export default createController(api)
  .prefix('/user')
  .post('', 'createUser')
  .get('/check', 'checkUser')
  .post('/login', 'loginUser')

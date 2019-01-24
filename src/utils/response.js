export function createError(ctx) {
  return {
    code: ctx.status,
    data: {},
    error: { ...ctx.body }
  }
}

export function createResponse(ctx) {
  return {
    code: ctx.status,
    data: { ...ctx.body }
  }
}

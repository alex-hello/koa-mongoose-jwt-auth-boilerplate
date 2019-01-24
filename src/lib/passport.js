import passport from 'koa-passport'
import LocalStrategy from 'passport-local'
import { Strategy as JwtStrategy, ExtractJwt } from 'passport-jwt'
import jwtSecret from 'jwt-secret'
import { sign, verify } from 'jsonwebtoken'
import { UserModel } from '../schemas/user'
import { secret } from '../config/config'

/**
 *  Strategy for local auth
 */
passport.use(
  new LocalStrategy(
    {
      usernameField: 'login',
      session: false
    },
    (login, password, done) => {
      UserModel.findOne({ login }, (err, user) => {
        if (err) return done(err)
        if (!user || !user.checkPassword(password)) {
          return done('No such user or invalid password', false)
        }
        return done(null, user)
      })
    }
  )
)

/**
 * Strategy for json-web-token auth
 */
passport.use(
  new JwtStrategy(
    {
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: jwtSecret
    },
    (token, done) => {
      try {
        return done(null, token)
      } catch (e) {
        done(e)
      }
    }
  )
)

/**
 * Method for authorization from anywhere
 */
export const auth = async (ctx, next) => {
  await passport.authenticate('local', (error, user) => {
    // eslint-disable-next-line
    if (user == false || error) {
      throw Error(error || 'Authorization error')
    } else {
      const payload = {
        id: user.id,
        login: user.login,
        email: user.email
      }
      const token = sign({ user: payload }, secret, {
        expiresIn: '5h'
      })
      ctx.body = { ...payload, token: token }
    }
  })(ctx, next)
}

/**
 * Method for checking auth from anywhere
 */
export const check = async ctx => {
  try {
    const token = ctx.header.authorization
    const { user } = verify(token, secret)
    if (user) {
      ctx.body = {
        auth: true
      }
    } else {
      throw Error
    }
  } catch (e) {
    throw Error('Error authorization check')
  }
}
export default passport

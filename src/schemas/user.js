import mongoose, { Schema } from 'mongoose'
import crypto from 'crypto'
import { schemaErrorRequired, schemaErrorUnique } from '../config/errors'

/**
 * User schema (in db collection name: users)
 */
const User = new Schema(
  {
    login: {
      type: String,
      required: schemaErrorRequired('login'),
      unique: schemaErrorUnique('unique')
    },
    email: {
      type: String,
      required: schemaErrorRequired('email'),
      unique: schemaErrorUnique('email')
    },
    pass: {
      type: String,
      required: 'Save error'
    },
    salt: {
      type: String,
      required: 'Save error'
    },
    testPass: String
  },
  {
    timestamps: true,
    publicOptions: ['login', 'email']
  }
)

/**
 *  We don't save user's password in db.
 *  Where user try to login we compare hash with
 *  password field with @checkPassword method
 */
User.virtual('password')
  .set(function(password) {
    this._plainPassword = password
    if (password) {
      this.salt = crypto.randomBytes(128).toString('base64')
      this.pass = crypto.pbkdf2Sync(password, this.salt, 1, 128, 'sha1')
    } else {
      this.salt = undefined
      this.pass = undefined
      throw new TypeError(schemaErrorRequired('password'))
    }
  })
  .get(() => {
    return this._plainPassword
  })

User.methods.checkPassword = function(password) {
  if (!password) return false
  if (!this.pass) return false
  // eslint-disable-next-line
  return crypto.pbkdf2Sync(password, this.salt, 1, 128, 'sha1') == this.pass
}

export const UserModel = mongoose.model('User', User)

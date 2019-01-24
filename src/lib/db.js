/**
 *  Database component
 *  append your config in this component
 *  config stored in /src/config/config.js
 */

import mongoose from 'mongoose'
import { dbHost, dbName, dbPass, dbPort, dbUser } from '../config/config'

mongoose.Promise = Promise

const connection = mongoose.connect(
  `mongodb://${dbUser}:${dbPass}@${dbHost}:${dbPort}/${dbName}`,
  {
    useMongoClient: true
  }
)
connection.on('error', console.error)

export default {
  db: {
    connection
  }
}

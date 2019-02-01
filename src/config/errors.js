/**
 *  Beautify errors config
 */

export const mongoErrors = {
  11000: {
    code: '11000',
    type: 'duplicate'
  }
}

export const schemaErrorRequired = field => `${field} is required`
export const schemaErrorUnique = field => `${field} must be unique`

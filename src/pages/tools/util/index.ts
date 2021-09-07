import Ajv from 'ajv'

const ajv = new Ajv()

const schema = {
  type: 'object',
  required: ['containers'],
  properties: {
    containers: {
      type: 'array',
      items: {
        type: 'object',
        required: ['dev'],
        properties: {
          dev: {
            type: 'object',
            required: ['image'],
            properties: {
              image: {
                type: 'string',
                minLength: 1,
              },
            },
          },
        },
      },
      minItems: 1,
    },
  },
}

const validate = ajv.compile(schema)

export const isYamlValid = (data) => {
  return validate(data)
}

import Ajv from 'ajv'

const ajv = new Ajv()

const schema = {
  type: 'object',
  required: ['name', 'serviceType', 'containers'],
  properties: {
    name: {
      type: 'string',
      minLength: 1,
    },
    serviceType: {
      type: 'string',
      minLength: 1,
    },
    containers: {
      type: 'array',
      items: {
        type: 'object',
        required: ['dev'],
        properties: {
          name: {
            type: 'string',
            minLength: 1,
          },
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

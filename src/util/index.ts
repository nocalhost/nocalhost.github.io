import Ajv from "ajv";

const ajv = new Ajv();

import { YamlObj } from "../types";

const schema = {
  type: "object",
  required: ["name", "serviceType", "containers"],
  properties: {
    name: {
      type: "string",
      minLength: 1,
    },
    serviceType: {
      type: "string",
      minLength: 1,
    },
    containers: {
      type: "array",
      items: {
        type: "object",
        required: ["dev"],
        properties: {
          name: {
            type: "string",
            minLength: 1,
          },
          dev: {
            type: "object",
            required: ["image"],
            properties: {
              image: {
                type: "string",
                minLength: 1,
              },
            },
          },
        },
      },
      minItems: 1,
    },
  },
};

const generateSchema = (dev) => {
  return {
    type: "object",
    required: ["name", "serviceType", "containers"],
    properties: {
      name: {
        type: "string",
        minLength: 1,
      },
      serviceType: {
        type: "string",
        minLength: 1,
      },
      containers: {
        type: "array",
        items: {
          type: "object",
          required: ["dev"],
          properties: {
            name: {
              type: "string",
              minLength: 1,
            },
            dev,
          },
        },
        minItems: 1,
      },
    },
  };
};

const validate = ajv.compile(schema);

function isObjValid(obj, data) {
  return ajv.compile(generateSchema(obj))(data);
}

function isPureOjbValid(obj, data) {
  return ajv.compile(obj)(data);
}

export const isYamlValid = (data) => {
  return validate(data);
};

export const isFileSyncValid = (data) => {
  const fileSyncObj = {
    type: "object",
    required: ["image", "sync"],
    properties: {
      image: {
        type: "string",
        minLength: 1,
      },
      sync: {
        type: "object",
        required: ["type", "filePattern", "ignoreFilePattern"],
        properties: {
          type: {
            type: "string",
            minLength: 1,
          },
          filePattern: {
            type: "array",
            items: {
              type: "string",
              minLength: 1,
            },
            minItems: 1,
          },
          ignoreFilePattern: {
            type: "array",
            items: {
              type: "string",
              minLength: 1,
            },
            minItems: 1,
          },
        },
      },
    },
  };
  return isObjValid(fileSyncObj, data);
};

export const isCommandValid = (data) => {
  const commandObj = {
    type: "object",
    required: ["image", "command"],
    properties: {
      image: {
        type: "string",
        minLength: 1,
      },
      command: {
        type: "object",
        required: ["run", "debug"],
        properties: {
          run: {
            type: "array",
            items: {
              type: "string",
              minLength: 1,
            },
            minItems: 1,
          },
          debug: {
            type: "array",
            items: {
              type: "string",
              minLength: 1,
            },
            minItems: 1,
          },
        },
      },
    },
  };
  return isObjValid(commandObj, data);
};

export const isVolumeValid = (data) => {
  const volumeObj = {
    type: "object",
    required: ["image", "persistentVolumeDirs", "storageClass"],
    properties: {
      image: {
        type: "string",
        minLength: 1,
      },
      storageClass: {
        type: "string",
        minLength: 1,
      },
      persistentVolumeDirs: {
        type: "array",
        minItems: 1,
        items: {
          type: "object",
          required: ["path", "capacity"],
          properties: {
            path: {
              type: "string",
              minLength: 1,
            },
            capacity: {
              type: "string",
              minLength: 3,
            },
          },
        },
      },
    },
  };
  return isObjValid(volumeObj, data);
};

export const isLimitValid = (data) => {
  const limitObj = {
    type: "object",
    required: ["image", "resources"],
    properties: {
      image: {
        type: "string",
        minLength: 1,
      },
      resources: {
        type: "object",
        required: ["limits", "requests"],
        properties: {
          limits: {
            type: "object",
            required: ["memory", "cpu"],
            properties: {
              memory: {
                type: "string",
                minLength: 1,
              },
              cpu: {
                type: "string",
                minLength: 1,
              },
            },
          },
        },
      },
    },
  };

  return isObjValid(limitObj, data);
};

export const isEnvVarValid = (data) => {
  const devObj = {
    type: "object",
    required: ["image", "env"],
    properties: {
      image: {
        type: "string",
        minLength: 1,
      },
      env: {
        type: "array",
        minItems: 1,
        items: {
          type: "object",
          required: ["name", "value"],
          properties: {
            name: {
              type: "string",
              minLength: 1,
            },
            value: {
              type: "string",
              minLength: 1,
            },
          },
        },
      },
    },
  };

  return isObjValid(devObj, data);
};

export const isPortForwardValid = (data) => {
  let portObj = {
    type: "object",
    required: ["image", "portForward"],
    properties: {
      image: {
        type: "string",
        minLength: 1,
      },
      portForward: {
        type: "array",
        minItems: 1,
        items: {
          type: "string",
          pattern: "^\\d+:\\d+$",
        },
      },
    },
  };
  return isObjValid(portObj, data);
};

export const isPatchesValid = (data: YamlObj) => {
  const patchesObj = {
    type: "object",
    required: ["image", "patches"],
    properties: {
      image: {
        type: "string",
        minLength: 1,
      },
      patches: {
        type: "array",
        minItems: 1,
      },
    },
  };

  const strPatchObj = {
    type: "object",
    required: ["type", "patch"],
    properties: {
      type: {
        type: "string",
        minLength: 1,
      },
      patch: {
        type: "string",
        minLength: 1,
      },
    },
  };

  const arrPatchObj = {
    type: "object",
    required: ["type", "patch"],
    properties: {
      type: {
        type: "string",
        minLength: 1,
      },
      patch: {
        type: "array",
        minItems: 1,
        items: {
          type: "object",
          required: ["op", "path", "value"],
          properties: {
            op: {
              type: "string",
              minLength: 1,
            },
            path: {
              type: "string",
              minLength: 1,
            },
            value: {
              type: "string",
              minLength: 1,
            },
          },
        },
      },
    },
  };

  let isValid = isObjValid(patchesObj, data);

  const containers = data.containers || [];

  for (let i = 0, len = containers.length; i < len; i++) {
    const patches = containers[i].dev.patches || [];

    for (let j = 0, patchLen = patches.length; j < patchLen; j++) {
      const patch = patches[j];
      const patchValid =
        isPureOjbValid(strPatchObj, patch) ||
        isPureOjbValid(arrPatchObj, patch);
      if (!patchValid) {
        return false;
      }
    }
  }
  containers.forEach((item) => {
    const patchArr = item.dev.patches;

    patchArr;
  });

  return isValid;
};

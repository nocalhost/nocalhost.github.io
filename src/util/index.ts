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

// check container obj valid
function isObjValid(obj, data) {
  return ajv.compile(generateSchema(obj))(data);
}

function isPureOjbValid(obj, data) {
  return ajv.compile(obj)(data);
}

export const isYamlValid = (data) => {
  return validate(data);
};

export const isContainerItemValid = (data) => {
  const containerObj = {
    type: "object",
    required: ["name", "dev"],
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
  };
  return isPureOjbValid(containerObj, data);
};

export const isFileSyncValid = (data: YamlObj, index: number) => {
  const fileSyncObj = {
    type: "object",
    required: ["sync"],
    properties: {
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

  return isPureOjbValid(fileSyncObj, data?.containers?.[index]?.dev);
};

export const isCommandValid = (data: YamlObj, index: number) => {
  const commandObj = {
    type: "object",
    required: ["command"],
    properties: {
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

  return isPureOjbValid(commandObj, data?.containers?.[index]?.dev);
};

export const isVolumeValid = (data: YamlObj, index: number) => {
  const volumeObj = {
    type: "object",
    required: ["persistentVolumeDirs", "storageClass"],
    properties: {
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
  return isPureOjbValid(volumeObj, data?.containers?.[index]?.dev);
};

export const isLimitValid = (data: YamlObj, index: number) => {
  const limitObj = {
    type: "object",
    required: ["image", "resources"],
    properties: {
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

  return isPureOjbValid(limitObj, data?.containers?.[index]?.dev);
};

export const isEnvVarValid = (data: YamlObj, index: number) => {
  const devObj = {
    type: "object",
    required: ["env"],
    properties: {
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

  return isPureOjbValid(devObj, data?.containers?.[index]?.dev);
};

export const isPortForwardValid = (data: YamlObj, index: number) => {
  let portObj = {
    type: "object",
    required: ["portForward"],
    properties: {
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
  return isPureOjbValid(portObj, data?.containers?.[index]?.dev);
};

export const isPatchesValid = (data: YamlObj, index: number) => {
  const patchesObj = {
    type: "object",
    required: ["patches"],
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

  let isValid = isPureOjbValid(patchesObj, data?.containers?.[index]?.dev);
  const containers = data.containers || [];
  for (let i = 0, len = containers.length; i < len; i++) {
    const patches = containers[i]?.dev?.patches || [];
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
  return isValid;
};

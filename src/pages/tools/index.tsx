import React, { useState, useEffect, useRef } from 'react'
import Layout from '@theme/Layout'

import styles from './index.module.scss'
import { Button, Form, Select, Input, Tooltip, message } from 'antd'
import 'antd/dist/antd.css'

import Translate, { translate } from '@docusaurus/Translate'
import IconWaring from './images/icon_label_warning.svg'
import IconSuccess from './images/icon_label_success.svg'
import IconOption from './images/icon_label_option.svg'

import CopyToClipboard from 'react-copy-to-clipboard'
import { FieldData } from 'rc-field-form/lib/interface'

const json2yaml = require('json2yaml')

interface SearchParams {
  name?: string
  type?: string
  [index: string]: string
}

interface MenuItem {
  name: string
  status: string
}

type ConfigType =
  | 'Basic'
  | 'FileSync'
  | 'RunAndDebug'
  | 'Volume'
  | 'ResourceLimit'
  | 'DevEnv'

interface Container {
  name?: string
  dev?: {
    gitUrl?: string
    image: string
    shell?: string
    workDir?: string
    storageClass?: string
    resources?: string
    persistentVolumeDirs?: string[]
    command?: {
      build?: string[]
      run?: string[]
      debug?: string[]
      hotReloadRun?: string[]
      hotReloadDebug?: string[]
    }
    debug?: {
      remoteDebugPort?: string
    }
    useDevContainer?: string
    sync?: {
      type?: string
      filePattern?: string[]
      ignoreFilePattern?: string[]
    }
    env?: string[]
    portForward?: string[]
    sidecar_image?: string
  }
}
interface YamlObj {
  name: string
  serviceType: string
  containers: Container[]
}

const imageOptions = [
  {
    label: 'codingcorp-docker.pkg.coding.net/nocalhost/dev-images/java:11',
    value: 'codingcorp-docker.pkg.coding.net/nocalhost/dev-images/java:11',
  },
  {
    label: 'codingcorp-docker.pkg.coding.net/nocalhost/dev-images/ruby:3.0',
    value: 'codingcorp-docker.pkg.coding.net/nocalhost/dev-images/ruby:3.0',
  },
  {
    label: 'codingcorp-docker.pkg.coding.net/nocalhost/dev-images/node:14',
    value: 'codingcorp-docker.pkg.coding.net/nocalhost/dev-images/node:14',
  },
  {
    label: 'codingcorp-docker.pkg.coding.net/nocalhost/dev-images/python:3.9',
    value: 'codingcorp-docker.pkg.coding.net/nocalhost/dev-images/python:3.9',
  },
  {
    label:
      'codingcorp-docker.pkg.coding.net/nocalhost/dev-images/golang:latest',
    value:
      'codingcorp-docker.pkg.coding.net/nocalhost/dev-images/golang:latest',
  },
  {
    label: 'codingcorp-docker.pkg.coding.net/nocalhost/dev-images/perl:latest',
    value: 'codingcorp-docker.pkg.coding.net/nocalhost/dev-images/perl:latest',
  },
  {
    label: 'codingcorp-docker.pkg.coding.net/nocalhost/dev-images/rust:latest',
    value: 'codingcorp-docker.pkg.coding.net/nocalhost/dev-images/rust:latest',
  },
  {
    label: 'codingcorp-docker.pkg.coding.net/nocalhost/dev-images/php:latest',
    value: 'codingcorp-docker.pkg.coding.net/nocalhost/dev-images/php:latest',
  },
]

const search2Obj = function (search: string): SearchParams {
  let obj: SearchParams = {}
  try {
    if (search) {
      search
        .slice(1)
        .split('&')
        .forEach((item) => {
          const [key, value] = item.split('=')
          obj[key] = value
        })
    }
  } catch (e) {
    obj = {}
  }
  return obj
}

const Tools = () => {
  const [form] = Form.useForm()
  const [yamlObj, setYamlObj] = useState<YamlObj>({
    name: '',
    serviceType: '',
    containers: [],
  })
  const [yamlStr, setYamlStr] = useState('')
  const [containerOptions, setContainerOptions] = useState([])
  const [configType, setConfigType] = useState<ConfigType>('Basic')
  const [menuList, setMenuList] = useState<MenuItem[]>([
    { name: 'Basic Config', status: 'reject' },
    { name: 'File synchronization', status: 'pending' },
    { name: 'Run && Debug', status: 'pending' },
    { name: 'Volume', status: 'pending' },
    { name: 'Resource Limit', status: 'pending' },
    { name: 'Development Variable', status: 'pending' },
  ])

  const timer = useRef<number | null>()

  const handleSubmit = () => {}

  const handleCopy = () => {
    message.success(translate({ message: 'Copy Successfully!' }))
  }

  useEffect(() => {
    const search = location.search
    if (search) {
      const searchObj: SearchParams = search2Obj(location.search)
      const { name, type, container } = searchObj
      const containerArr = container.split(',').map((item, index) => {
        return {
          label: item,
          value: index,
        }
      })
      setContainerOptions(containerArr)
      setYamlObj({
        name,
        serviceType: type,
        containers: containerArr.map((item) => {
          return {
            name: '',
            dev: {
              gitUrl: '',
              image: '',
            },
          }
        }),
      })
      form.setFieldsValue({
        workloadName: name,
        workloadType: type,
        containers: containerArr[0]?.value,
      })
    }
    return clearTimeout(timer.current)
  }, [])

  useEffect(() => {
    setYamlStr(json2yaml.stringify(yamlObj))
  }, [yamlObj])

  const handleFieldChange = (changedFields: FieldData[]) => {
    if (timer.current) {
      clearTimeout(timer.current)
      timer.current = null
    }
    timer.current = window.setTimeout(() => {
      try {
        const { containers } = form.getFieldsValue()
        console.log(containers)
        const field = changedFields[0]?.name[0]
        const value = changedFields[0]?.value
        switch (field) {
          case 'workloadName':
            {
              yamlObj.name = value
            }
            break
          case 'workloadType':
            {
              yamlObj.serviceType = value
            }
            break
          case 'containers':
            {
              // switch container
              const currentContainer = yamlObj.containers[field]
              form.setFieldsValue({
                name: currentContainer?.name,
                image: currentContainer?.dev.image,
              })
            }
            break
          case 'name':
            {
              yamlObj.containers[containers][field] = value
            }
            break
          default:
            {
              yamlObj.containers[containers][field] = value
              console.log('yamlObj', yamlObj)
            }
            break
        }
        setYamlObj({
          ...yamlObj,
        })
      } catch (e) {}
    }, 500)
  }

  return (
    <Layout>
      <div className={styles['tool-wrap']}>
        <div className={styles['left']}>
          <div className={styles['header']}>
            <div className={styles['header-content']}>
              <span>
                <Translate>Parameter configuration</Translate>
              </span>
              <div className={styles['warning']}>
                <Tooltip
                  title={translate({
                    message:
                      'You have not yet completed the minimal development configuration',
                  })}
                >
                  <IconWaring />
                </Tooltip>
              </div>
            </div>
            <Button type="primary">
              <Translate>Apply</Translate>
            </Button>
          </div>
          <div className={styles['content']}>
            <Form
              form={form}
              layout="vertical"
              onFinish={handleSubmit}
              onFieldsChange={handleFieldChange}
            >
              <div className={styles['form-line']}>
                <Form.Item
                  label={translate({
                    message: 'Workload Name',
                  })}
                  rules={[
                    {
                      required: true,
                    },
                  ]}
                  name="workloadName"
                >
                  <Input style={{ width: 352 }} />
                </Form.Item>
                <Form.Item
                  label={translate({
                    message: 'Workload Type',
                  })}
                  rules={[
                    {
                      required: true,
                    },
                  ]}
                  name="workloadType"
                >
                  <Input style={{ width: 352 }} />
                </Form.Item>
              </div>
              <Form.Item
                label={translate({ message: 'Select Container' })}
                required={true}
                name="containers"
              >
                <Select
                  options={containerOptions}
                  style={{ width: 352 }}
                ></Select>
              </Form.Item>
              <div className={styles['config-wrap']}>
                <div className={styles['menu']}>
                  <ul className={styles['menu-list']}>
                    {menuList.map((item, index) => {
                      return (
                        <li key={index} className={styles['menu-item']}>
                          <IconWaring />
                          <span>
                            <Translate>{item.name}</Translate>
                          </span>
                        </li>
                      )
                    })}
                  </ul>
                </div>
                <div className={styles['config']}>
                  <>
                    <Form.Item
                      label={translate({ message: 'Container Name' })}
                      rules={[{ required: true }]}
                      name="name"
                    >
                      <Input
                        style={{ width: 460 }}
                        placeholder={translate({
                          message: 'Please Input Container Name',
                        })}
                      />
                    </Form.Item>
                    <Form.Item
                      label={translate({ message: 'Development Image' })}
                      rules={[{ required: true }]}
                      name="image"
                    >
                      <Select
                        style={{ width: 460 }}
                        options={imageOptions}
                        placeholder={translate({
                          message: 'Please Select Development Image',
                        })}
                      />
                    </Form.Item>
                    <div className={styles['config-title']}>
                      <span></span>
                      <span>
                        <Translate>Other basic configuration items</Translate>
                      </span>
                    </div>
                    <div className={styles['config-others']}>
                      <Form.Item
                        label={translate({
                          message: 'Git Depository URL',
                        })}
                        name="gitUrl"
                      >
                        <Input
                          style={{ width: 436 }}
                          placeholder={translate({
                            message: 'Please Input Git Depository URL',
                          })}
                        />
                      </Form.Item>
                      <Form.Item label="Shell" name="shell">
                        <Input
                          style={{ width: 436 }}
                          placeholder={translate({
                            message: 'Please Input Shell',
                          })}
                        />
                      </Form.Item>
                      <Form.Item
                        label={translate({ message: 'Work Directory' })}
                        name="workDir"
                      >
                        <Input
                          style={{ width: 436 }}
                          placeholder={translate({
                            message: 'Please Input Work Directory',
                          })}
                        />
                      </Form.Item>
                      <Form.Item label="Sidecar" name="sidecar_image">
                        <Input
                          style={{ width: 436 }}
                          placeholder={translate({
                            message: 'Please Input Sidecar Image URL',
                          })}
                        />
                      </Form.Item>
                    </div>
                  </>
                </div>
                <div></div>
              </div>
            </Form>
          </div>
        </div>
        <div className={styles['right']}>
          <div className={styles['title']}>
            <Translate>Yaml Preview</Translate>
            <CopyToClipboard onCopy={handleCopy} text={yamlStr}>
              <Button>
                <Translate>Copy</Translate>
              </Button>
            </CopyToClipboard>
          </div>
          <div className={styles['content']}>
            <Input.TextArea
              disabled={true}
              rows={36}
              style={{
                height: '100%',
                background: 'transparent',
                border: 'none',
                color: '#fff',
              }}
              value={yamlStr}
            ></Input.TextArea>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Tools

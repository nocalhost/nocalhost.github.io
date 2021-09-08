import React, { useState, useEffect, useRef } from 'react'
import Layout from '@theme/Layout'

import styles from './index.module.scss'
import { Button, Form, Select, Input, Tooltip, message } from 'antd'
import BasicConfig from './components/BasicConfig'
import FileSync from './components/FileSync'
import RunAndDebug from './components/RunAndDebug'
import Volume from './components/Volume'
import ResourceLimit from './components/ResourceLimit'
import EnvVar from './components/EnvVar'
import 'antd/dist/antd.css'

import Translate, { translate } from '@docusaurus/Translate'
import IconWaring from './images/icon_label_warning.svg'
import IconSuccess from './images/icon_label_success.svg'
import IconOption from './images/icon_label_option.svg'

import CopyToClipboard from 'react-copy-to-clipboard'

const json2yaml = require('json2yaml')

import { SearchParams, MenuItem, ConfigType, YamlObj } from './types'
import { CONFIG_TYPE } from './constants'

import { isYamlValid } from './util'
import { saveConfig } from './util/request'

import classNames from 'classnames/bind'
const cx = classNames.bind(styles)

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
  const [menuList] = useState<MenuItem[]>(CONFIG_TYPE)
  const [isValid, setIsValid] = useState<boolean>(false)
  const [URLParams, setURLParams] = useState<SearchParams>({})
  // const [containerIndex, setContainerIndex] = useState<number>(0)

  const timer = useRef<number | null>()
  const search = location.search

  const handleSubmit = () => {}

  const handleCopy = () => {
    message.success(translate({ message: 'Copy Successfully!' }))
  }

  useEffect(() => {
    if (search) {
      const searchObj: SearchParams = search2Obj(location.search)
      setURLParams(searchObj)
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
    setYamlStr(json2yaml.stringify(yamlObj).replace(/\-\-\-\s*\n/, ''))
    setIsValid(isYamlValid(yamlObj))
  }, [yamlObj])

  const handleFieldChange = (changedFields: any) => {
    console.log('change: ', changedFields)
    if (timer.current) {
      clearTimeout(timer.current)
      timer.current = null
    }
    timer.current = window.setTimeout(() => {
      try {
        const { containers } = form.getFieldsValue()
        const { name } = changedFields[0]
        const value = changedFields[0]?.value
        const len = name.length
        if (len === 1) {
          const field = changedFields[0]?.name[0]

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
                const currentContainer = yamlObj.containers[containers]
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
            case 'syncType':
              {
                let obj = yamlObj.containers[containers]['dev']['sync'] || {}
                obj.type = value
                yamlObj.containers[containers]['dev']['sync'] = { ...obj }
              }
              break
            case 'filePattern':
            case 'ignoreFilePattern':
              {
                let obj = yamlObj.containers[containers]['dev']['sync'] || {}
                obj[field] = value.map((item) =>
                  item === undefined ? '' : item
                )
                yamlObj.containers[containers]['dev']['sync'] = { ...obj }
              }

              break
            case 'command-run':
            case 'command-debug':
              {
                const cmd = field.split('-')[1]
                let obj = yamlObj.containers[containers]['dev']['command'] || {}
                // TODO command into array
                // obj[cmd] = value.split(' ')
                try {
                  obj[cmd] = JSON.parse(value)
                } catch (e) {
                  obj[cmd] = value
                }
                yamlObj.containers[containers]['dev']['command'] = { ...obj }
              }
              break
            case 'remoteDebugPort':
              yamlObj.containers[containers]['dev']['debug'][field] = value
              break
            case 'limits-memory':
            case 'requests-cpu':
            case 'limits-cpu':
            case 'requests-memory':
              {
                const [a, b] = field.split('-')
                let obj =
                  yamlObj.containers[containers]['dev']['resources'] || {}
                if (obj[a]) {
                  obj[a][b] = value
                } else {
                  obj[a] = {
                    [b]: value,
                  }
                }
                yamlObj.containers[containers]['dev']['resources'] = { ...obj }
              }
              break
            case 'persistentVolumeDirs':
              yamlObj.containers[containers]['dev'][field] = value.map((item) =>
                item === undefined ? '' : item
              )
              break
            case 'env':
              yamlObj.containers[containers]['dev'][field] = value.map((item) =>
                item === undefined ? '' : item
              )
              break
            default:
              {
                yamlObj.containers[containers]['dev'][field] = value
              }
              break
          }
        } else if (len === 2) {
          const [field, index] = changedFields[0]?.name
          let obj = yamlObj.containers[containers]['dev']['sync'] || {}
          if (obj[field]) {
            obj[field][index] = value
          } else {
            obj[field] = {}
            obj[field][index] = value
          }
          yamlObj.containers[containers]['dev']['sync'] = { ...obj }
        } else {
          const [a, b, c] = name
          let obj = yamlObj.containers[containers]['dev'][a][b] || {}
          obj[c] = value
          yamlObj.containers[containers]['dev'][a][b] = { ...obj, [c]: value }
        }
        setYamlObj({
          ...yamlObj,
        })
      } catch (e) {
        throw new Error(e)
      }
    }, 500)
  }

  const handleApply = async () => {
    const { from, application, name, namespace, type } = URLParams
    if (from === 'daemon') {
      try {
        const response = await saveConfig({
          application,
          name,
          namespace,
          type,
          config: window.btoa(yamlStr),
        })
        const {
          data: { Success, Message },
        } = response
        if (Success) {
          message.success(Message)
        }
      } catch (e) {
        message.error('Please Check Network')
      }
    }
  }

  const handleSelectContainer = (data) => {
    console.log('select Data: ', data)
  }

  const handleMenuChange = (menu: ConfigType) => {
    setConfigType(menu)
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
                    message: isValid
                      ? 'You have completed the minimal development configuration'
                      : 'You have not yet completed the minimal development configuration',
                  })}
                >
                  {isValid ? <IconSuccess /> : <IconWaring />}
                </Tooltip>
              </div>
            </div>
            <Button onClick={handleApply} disabled={!isValid} type="primary">
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
                <Select options={containerOptions} style={{ width: 352 }} />
              </Form.Item>
              <div className={styles['config-wrap']}>
                <div className={styles['menu']}>
                  <ul className={styles['menu-list']}>
                    {menuList.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className={cx({
                            'menu-item': true,
                            active: item.type === configType,
                          })}
                          onClick={() => handleMenuChange(item.type)}
                        >
                          {item.name === 'Basic Config' && isValid ? (
                            <IconSuccess />
                          ) : item.name === 'Basic Config' ? (
                            <IconWaring />
                          ) : (
                            <IconOption />
                          )}
                          <span>
                            <Translate>{item.name}</Translate>
                          </span>
                        </li>
                      )
                    })}
                  </ul>
                </div>
                <div className={styles['config']}>
                  {configType === 'Basic' && <BasicConfig />}
                  {configType === 'FileSync' && <FileSync />}
                  {configType === 'RunAndDebug' && <RunAndDebug />}
                  {configType === 'Volume' && <Volume />}
                  {configType === 'ResourceLimit' && <ResourceLimit />}
                  {configType === 'DevEnv' && <EnvVar />}
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

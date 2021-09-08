import React from 'react'
import { Form, Input, Tooltip, Switch } from 'antd'
import { translate } from '@docusaurus/Translate'

import styles from '../index.module.scss'
import IconQuery from '../images/icon_label_query.svg'

export const ItemLabel = ({ label, title }) => {
  return (
    <div className={styles['item-label']}>
      <span>{label}</span>
      <Tooltip title={title}>
        <IconQuery />
      </Tooltip>
    </div>
  )
}

const RunAndDebug = () => {
  return (
    <>
      <Form.Item
        label={<ItemLabel label="Run Command" title="" />}
        name="command-run"
      >
        <Input
          placeholder={translate({
            message: 'Please Input Run Command, eg: ["/bin/sh","-c"]',
          })}
          style={{ width: 460 }}
        />
      </Form.Item>
      <Form.Item
        label={<ItemLabel label="Debug Command" title="" />}
        name="command-debug"
      >
        <Input
          placeholder={translate({ message: 'Please Input Debug Command' })}
          style={{ width: 460 }}
        />
      </Form.Item>
      <Form.Item
        label={<ItemLabel label="Debug Port" title="" />}
        name="remoteDebugPort"
      >
        <Input
          placeholder={translate({ message: 'Please Input Debug Port' })}
          style={{ width: 460 }}
        />
      </Form.Item>
      <Form.Item
        label={translate({ message: 'Whether To Enable Hot Reload' })}
        name="hotReloadRun"
        valuePropName="checked"
      >
        <Switch />
      </Form.Item>
    </>
  )
}

export default RunAndDebug

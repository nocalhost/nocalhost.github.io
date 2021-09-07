import React from 'react'
import { Form, Input } from 'antd'
import Translate, { translate } from '@docusaurus/Translate'
import styles from '../index.module.scss'

const ResourceLimit = () => {
  return (
    <>
      <div className={styles['limit-item']}>
        <Form.Item
          label={translate({ message: 'Request total memory (MiB)' })}
          name="requests-memory"
        >
          <Input
            style={{ width: 222 }}
            placeholder={translate({ message: 'Please Input Memory' })}
          />
        </Form.Item>
        <Form.Item
          label={translate({ message: 'Limit the total memory (MiB)' })}
          name="limits-memory"
        >
          <Input
            style={{ width: 222 }}
            placeholder={translate({ message: 'Please Input Memory' })}
          />
        </Form.Item>
      </div>
      <div className={styles['limit-item']}>
        <Form.Item
          label={translate({ message: 'Request total CPU (core)' })}
          name="requests-cpu"
        >
          <Input
            style={{ width: 222 }}
            placeholder={translate({ message: 'Please Input CPU' })}
          />
        </Form.Item>
        <Form.Item
          label={translate({ message: 'Limit the total CPU (core)' })}
          name="limits-cpu"
        >
          <Input
            style={{ width: 222 }}
            placeholder={translate({ message: 'Please Input CPU' })}
          />
        </Form.Item>
      </div>
    </>
  )
}

export default ResourceLimit

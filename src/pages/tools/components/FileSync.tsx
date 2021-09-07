import React from 'react'
import { Form, Input, Select } from 'antd'
import Translate, { translate } from '@docusaurus/Translate'

import styles from '../index.module.scss'
import { SYNC_FILE_TYPE } from '../constants'

import IconDel from '../images/icon_remove.svg'
import IconAdd from '../images/icon_add.svg'

const FileSync = () => {
  return (
    <>
      <Form.Item label={translate({ message: 'Sync Type' })} name="syncType">
        <Select
          placeholder={translate({ message: 'Please Select Sync Type' })}
          options={SYNC_FILE_TYPE}
          style={{ width: 460 }}
        ></Select>
      </Form.Item>
      <Form.List name="filePattern">
        {(fields, { add, remove }, { errors }) => (
          <>
            {fields.map((field, index) => (
              <Form.Item
                {...field}
                key={index}
                label={
                  index === 0 ? translate({ message: 'Sync Directory' }) : ''
                }
                style={{ marginBottom: 8 }}
              >
                <div className={styles['file-item']}>
                  <Input
                    style={{ width: 430 }}
                    placeholder={translate({
                      message: 'Please Input Sync Directory',
                    })}
                  />
                  <span
                    className={styles['remove']}
                    onClick={() => remove(field.name)}
                  >
                    <IconDel />
                  </span>
                </div>
              </Form.Item>
            ))}
            <div className={styles['add-field']} onClick={() => add()}>
              <IconAdd />
              <span style={{ marginLeft: 4 }}>
                <Translate>Add Sync Directory</Translate>
              </span>
            </div>
          </>
        )}
      </Form.List>

      <Form.List name="ignoreFilePattern">
        {(fields, { add, remove }, { errors }) => (
          <>
            {fields.map((field, index) => (
              <Form.Item
                {...field}
                key={index}
                label={
                  index === 0 ? translate({ message: 'Ignore Directory' }) : ''
                }
                style={{ marginBottom: 8 }}
              >
                <div className={styles['file-item']}>
                  <Input
                    style={{ width: 430 }}
                    placeholder={translate({
                      message: 'Please Input Ignore Directory',
                    })}
                  />
                  <span
                    className={styles['remove']}
                    onClick={() => remove(field.name)}
                  >
                    <IconDel />
                  </span>
                </div>
              </Form.Item>
            ))}
            <div className={styles['add-field']} onClick={() => add()}>
              <IconAdd />
              <span style={{ marginLeft: 4 }}>
                <Translate>Add Ignore Sync Directory</Translate>
              </span>
            </div>
          </>
        )}
      </Form.List>
    </>
  )
}

export default FileSync

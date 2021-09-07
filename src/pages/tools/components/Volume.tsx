import React from 'react'
import { Form, Input } from 'antd'
import Translate, { translate } from '@docusaurus/Translate'

import { ItemLabel } from './RunAndDebug'
import IconAdd from '../images/icon_add.svg'
import IconRemove from '../images/icon_remove.svg'

import styles from '../index.module.scss'

const Volume = () => {
  return (
    <>
      <Form.Item
        label={<ItemLabel label="StorageClass" title="" />}
        name="storageClass"
      >
        <Input
          placeholder={translate({ message: 'Please Input StorageClass' })}
        />
      </Form.Item>
      <Form.List name="persistentVolumeDirs">
        {(fields, { add, remove }) => (
          <>
            {fields.map((field) => (
              <div className={styles['directory-item']} key={field.fieldKey}>
                <div className={styles['form-item']}>
                  <Form.Item
                    {...field}
                    style={{ marginBottom: 0, marginRight: 36 }}
                    name={[field.name, 'path']}
                  >
                    <Input
                      placeholder={translate({
                        message: 'Please Input Directory',
                      })}
                      style={{ width: 190 }}
                    />
                  </Form.Item>
                  <Form.Item
                    {...field}
                    style={{ marginBottom: 0 }}
                    name={[field.name, 'capacity']}
                  >
                    <Input
                      placeholder={translate({ message: 'Please Input Size' })}
                      style={{ width: 190 }}
                    />
                  </Form.Item>
                </div>
                <div onClick={() => remove(field.name)}>
                  <IconRemove />
                </div>
              </div>
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

export default Volume

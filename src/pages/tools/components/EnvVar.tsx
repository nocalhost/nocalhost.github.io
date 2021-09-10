import React from 'react'
import { Form, Input } from 'antd'
import Translate, { translate } from '@docusaurus/Translate'

import styles from '../index.module.scss'
import IconAdd from '../images/icon_add.svg'
import IconRemove from '../images/icon_remove.svg'

const EnvVar = () => {
  return (
    <>
      <Form.List name="env">
        {(fields, { add, remove }) => (
          <>
            {fields.map((field, index) => (
              <div className={styles['directory-item']} key={field.key}>
                <Form.Item
                  label={
                    index === 0
                      ? translate({
                          message: 'Development environment variables',
                        })
                      : ''
                  }
                  style={{ marginBottom: 0 }}
                >
                  <div className={styles['form-item']}>
                    <Form.Item
                      {...field}
                      name={[field.name, 'name']}
                      fieldKey={[field.fieldKey, 'name']}
                      style={{ marginBottom: 0, marginRight: 36 }}
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
                      name={[field.name, 'value']}
                      fieldKey={[field.fieldKey, 'value']}
                    >
                      <Input
                        placeholder={translate({
                          message: 'Please Input Size',
                        })}
                        style={{ width: 190 }}
                      />
                    </Form.Item>
                  </div>
                </Form.Item>

                <div
                  className={index === 0 ? styles['remove'] : styles['normal']}
                  onClick={() => remove(field.name)}
                >
                  <IconRemove />
                </div>
              </div>
            ))}
            <div className={styles['add-field']} onClick={() => add()}>
              <IconAdd />
              <span style={{ marginLeft: 4 }}>
                <Translate>Add Development environment variables</Translate>
              </span>
            </div>
          </>
        )}
      </Form.List>
    </>
  )
}

export default EnvVar

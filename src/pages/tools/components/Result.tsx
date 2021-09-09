import React from 'react'

import styles from '../index.module.scss'
import ImageSuccess from '../images/image_succeed.svg'
import ImageFail from '../images/image_failed.svg'
import ImageVscode from '../images/image_success_VSCode_EN.svg'
import ImageJB from '../images/image_success_JB_EN.svg'
import IconLamp from '../images/icon_lamp.svg'

import { translate } from '@docusaurus/Translate'

const Result = ({ status }) => {
  return (
    <div className={styles['result-wrap']}>
      <div className={styles['main']}>
        {status === 'fail' ? <ImageFail /> : <ImageSuccess />}
        <h3 className={styles['result-title']}>
          {translate({ message: 'Configuration Is Successful' })}
        </h3>
        <span className={styles['result-desc']}>
          {translate({
            message:
              'Please follow the guide below to enter the development mode in the plugin',
          })}
        </span>
        <div className={styles['result-content']}>
          <div className={styles['title']}>
            <IconLamp />
            <span>
              {translate(
                {
                  message:
                    'Find the workload name "{bookinfo}" to enter the development mode.',
                },
                {
                  bookinfo: 'xxxx',
                }
              )}
            </span>
          </div>
          <div className={styles['image']}>
            <ImageVscode />
            <ImageJB />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Result

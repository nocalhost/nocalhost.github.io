import React from 'react'

import styles from '../index.module.scss'
import ImageSuccess from '../images/image_succeed.svg'
import { translate } from '@docusaurus/Translate'

const Result = () => {
  return (
    <div className={styles['result-wrap']}>
      <div className={styles['main']}>
        <ImageSuccess />
        <h3 className={styles['result-title']}>
          {translate({ message: 'Configuration Is Successful' })}
        </h3>
        <span className={styles['result-desc']}>
          {translate({
            message:
              'Please follow the guide below to enter the development mode in the plugin',
          })}
        </span>
        <div className={styles['result-content']}></div>
      </div>
    </div>
  )
}

export default Result

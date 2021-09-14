import React from 'react'

import styles from '../index.module.scss'
import ImageSuccess from '../images/image_succeed.svg'
import ImageFail from '../images/image_failed.svg'

import ImageVscode from '../images/image_success_VSCode_EN.svg'
import ImageJB from '../images/image_success_JB_EN.svg'

import ImageVscodeFail from '../images/image_failed_VSCode_EN.svg'
import ImageJBFail from '../images/image_faied_JB_EN.svg'

import IconLamp from '../images/icon_lamp.svg'
import IconCopy from '../images/icon_copy.svg'
import Translate, { translate } from '@docusaurus/Translate'
import CopyToClipboard from 'react-copy-to-clipboard'
import classNames from 'classnames'

import { Button } from 'antd'

const Result = ({ status, workload = '', yamlStr = '' }) => {
  const handleCopy = () => {}
  const cx = classNames.bind(styles)
  return (
    <div className={styles['result-wrap']}>
      <div className={styles['main']}>
        {status === 'fail' ? <ImageFail /> : <ImageSuccess />}
        <h3 className={styles['result-title']}>
          {status === 'success' ? (
            <Translate> Configuration Successful</Translate>
          ) : (
            <Translate>Configuration Failed</Translate>
          )}
          {translate({ message: 'Configuration Successful' })}
        </h3>
        <span className={styles['result-desc']}>
          {translate({
            message:
              'Please follow the guide below to enter the development mode in the plugin',
          })}
        </span>
        <div className={styles['result-content']}>
          {status === 'success' ? (
            <>
              <div className={cx(styles['title'], styles['success-item'])}>
                <span className={styles['number']}>
                  <IconLamp />
                </span>
                <span>
                  {translate(
                    {
                      message:
                        'Find the workload name "{workload}" to enter the development mode.',
                    },
                    {
                      workload,
                    }
                  )}
                </span>
              </div>
              <div className={styles['image']}>
                <ImageVscode />
                <ImageJB />
              </div>
            </>
          ) : (
            <ul className={styles['fail-list']}>
              <li className={cx(styles['fail-item'], styles['inline'])}>
                <span className={styles['number']}>1</span>
                <span>
                  <Translate>
                    Click the button on the right to copy and generate
                    "Nocalhost Yaml" development parameters
                  </Translate>
                </span>
                <CopyToClipboard onCopy={handleCopy} text={yamlStr}>
                  <Button
                    style={{ marginLeft: 6, position: 'relative', top: 5 }}
                  >
                    <span>
                      <IconCopy />
                    </span>
                    <Translate>Copy</Translate>
                  </Button>
                </CopyToClipboard>
              </li>
              <li className={styles['fail-item']}>
                <div style={{ marginBottom: 12 }}>
                  <span className={styles['number']}>2</span>
                  <span>
                    {translate(
                      {
                        message:
                          'Find the workload name 「{workload}」 and paste the development parameters to the configuration page of the service',
                      },
                      { workload }
                    )}
                  </span>
                </div>

                <div className={styles['image']}>
                  <ImageVscodeFail />
                  <ImageJBFail />
                </div>
              </li>
              <li className={styles['fail-item']}>
                <span className={styles['number']}>3</span>
                <span>
                  <Translate>
                    Save configuration (Windows: Ctrl+s ｜ Mac: Command+s)
                  </Translate>
                </span>
              </li>
            </ul>
          )}
        </div>
      </div>
    </div>
  )
}

export default Result

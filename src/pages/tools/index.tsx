import React from 'react'
import Layout from '@theme/Layout'

import styles from './index.module.scss';
import { Button, Form, Select, Input } from 'antd'
import 'antd/dist/antd.css';

import Translate, {translate} from '@docusaurus/Translate'


const Tools = () => {

    const handleSubmit = () => {

    }

    return (
        <Layout>
            <div className={styles['tool-wrap']}>
                <div className={styles['left']}>
                    <div className={styles['header']}>
                        <div>
                            <span>
                                <Translate>Parameter configuration</Translate>
                            </span>
                        </div>
                        <Button type="primary">
                            <Translate>Apply</Translate>
                        </Button>
                    </div>
                    <div className={styles['content']}>
                        <Form layout="vertical" onFinish={handleSubmit}>
                            <div className={styles['form-line']}>
                                <Form.Item label={translate({
                                    message: 'Service Name'
                                })} rules={[{
                                    required: true
                                }]} name="serviceName">
                                    <Input style={{width: 352}} />
                                </Form.Item>
                                <Form.Item label={translate({
                                    message: 'Service Type'
                                })} rules={[{
                                    required: true
                                }]} name="serviceType">
                                    <Input style={{width: 352}} />
                                </Form.Item>
                            </div>
                            <Form.Item label={translate({message: 'Select Container'})} required={true}>
                                <Select style={{width: 352}}></Select>
                            </Form.Item>
                            <div className={styles["config-wrap"]}>
                                <div className={
                                    styles['menu']
                                }>
                                    <ul className={styles['menu-list']}>
                                        {
                                            ['Basic Config', 'File synchronization', 'Run && Debug', 'Volume', 'Resource Limit', 'Development Variable'].map((item, index) => {
                                                return (
                                                    <li key={index} className={styles['menu-item']}>
                                                        <span></span>
                                                        <span>
                                                            <Translate>{item}</Translate>
                                                        </span>
                                                    </li>
                                                )
                                            })
                                        }
                                        
                                    </ul>
                                </div>
                                <div className={styles['config']}>
                                    <>
                                        <Form.Item label={translate({message: 'Container Name'})} rules={[{required: true}]}>
                                            <Input style={{width: 460}} />
                                        </Form.Item>
                                        <Form.Item label={translate({message: 'Development Image'})} rules={[{required: true}]}>
                                            <Select style={{width: 460}} />
                                        </Form.Item>

                                    </>
                                </div>
                            </div>
                        </Form>
                    </div>
                </div>
                <div className={styles['right']}></div>
            </div>
        </Layout>
       
    )
}

export default Tools
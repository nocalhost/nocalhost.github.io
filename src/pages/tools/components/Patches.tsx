import React from 'react'
import { Form} from 'antd'
import styles from "../index.module.scss";


const Patches = () => {
    return (
        <>
            <Form.List name="patches">
                {
                    (fields, {add, remove}) => (
                        <>
                            {
                                fields.map((field, index) => (

                                ))
                            }
                        </>
                    )
                }
            </Form.List>
        </>
    )
}
import React from 'react'
import styles from './TextWithCircle.module.less'

const TextWithCircle = ({ children }) => (
    <div className={styles.wrapper}>
        <div className={styles.text}>{children}</div>
    </div>
)

export default TextWithCircle

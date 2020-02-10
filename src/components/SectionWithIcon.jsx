import React from 'react';
import PropTypes from 'prop-types';
import styles from './SectionWithIcon.module.less';

const SectionWithIcon = ({
    id,
    title,
    ingress,
    children,
    dark = false,
    style,
    icon,
}) => (
    <section
        id={id}
        className={styles.section}
        style={{
            backgroundColor: dark ? '#283739' : '#fff',
            color: dark ? '#fff' : 'inherit',
            ...style,
        }}
    >
        <div className={styles.wrapper}>
            {icon && (
                <img className={styles.icon} src={icon} alt="section-icon" />
            )}

            <div className={styles.info}>
                {title && <h1 className={styles.title}>{title}</h1>}
                {ingress && <h5 className={styles.ingress}>{ingress}</h5>}
                <div className={styles.labelsWrapper}>{children}</div>
            </div>
        </div>
    </section>
);

SectionWithIcon.propTypes = {
    dark: PropTypes.bool,
};

export default SectionWithIcon;

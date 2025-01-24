import React from 'react';

import styles from './styles.module.scss';

type Props = {
  text: string;
};

export const Title: React.FC<Props> = ({ text }) => {
  return <h3 className={styles.title}>{text}</h3>;
};

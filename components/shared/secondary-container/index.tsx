import React from 'react';

import styles from './styles.module.scss';

export const SecondaryContainer: React.FC<React.PropsWithChildren> = ({ children }) => {
  return <div className={styles.root}>{children}</div>;
};

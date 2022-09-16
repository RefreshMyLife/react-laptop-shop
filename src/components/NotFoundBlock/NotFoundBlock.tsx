import React from 'react';
import styles from './NotFoundBlock.module.scss';

export const NotFoundBlock: React.FC = () => {
  return (
    <div className={styles.root}>
      <span>Страница недоступна :(</span> <br />
      <span className={styles.description}>К сожалению такой страницы нет в интернет магазине</span>
    </div>
  );
};

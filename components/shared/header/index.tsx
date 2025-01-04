'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import classNames from 'classnames';
import { useMedia } from 'react-use';
import { SecondaryContainer } from '../secondary-container';
import { NAV } from '@/constants/nav';
import { MENU } from '@/constants/menu';

import Logo from '@/images/logo.svg';
import UserIcon from '@/images/icons/user.svg';
import SearchIcon from '@/images/icons/search.svg';
import CartIcon from '@/images/icons/cart.svg';
import BurgerMenuIcon from '@/images/icons/burger-menu.svg';
import CloseIcon from '@/images/icons/close.svg';
import styles from './styles.module.scss';

export const Header: React.FC = () => {
  const isTablet = useMedia('(max-width: 992px)', false);
  const [isActiveMenu, setIsActiveMenu] = React.useState(false);

  return (
    <header className={styles.header}>
      <div className={styles.top}>
        <SecondaryContainer>
          <div className={classNames(styles.innerTop, { [styles.active]: isActiveMenu })}>
            <ul className={styles.nav}>
              {NAV?.map((item, index) => (
                <li key={index}>
                  <Link className={styles.link} href={item.link}>
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
            <h1 className={styles.title}>Sanis jewelry - интернет магазин ювелирных украшений</h1>
            {isTablet && (
              <ul className={styles.menu}>
                {MENU?.map((item, index) => (
                  <li key={index}>
                    <Link className={styles.menuLink} href={item.link}>
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
            <a className={styles.phone} href="tel:+78123634744">
              +7 (812) 363-47-44
            </a>
          </div>
        </SecondaryContainer>
      </div>
      <div className={styles.bottom}>
        <SecondaryContainer>
          <div className={styles.innerBottom}>
            <div className={styles.box}>
              {isTablet && (
                <>
                  {isActiveMenu ? (
                    <button>
                      <Image
                        src={CloseIcon}
                        alt="от"
                        onClick={() => setIsActiveMenu(false)}
                        width={20}
                      />
                    </button>
                  ) : (
                    <button className={styles.burger}>
                      <Image
                        src={BurgerMenuIcon}
                        alt="меню"
                        onClick={() => setIsActiveMenu(true)}
                      />
                    </button>
                  )}

                  <button>
                    <Image src={SearchIcon} alt="логотип" priority />
                  </button>
                </>
              )}
              <div className={styles.logoBox}>
                <Link className={styles.logo} href={'/'}>
                  <Image src={Logo} alt="логотип" priority />
                </Link>
              </div>
              <ul className={styles.actions}>
                <li>
                  <Link href={'/'}>
                    <Image src={UserIcon} alt="личный кабинет" priority />
                  </Link>
                </li>
                {!isTablet && (
                  <li>
                    <button>
                      <Image src={SearchIcon} alt="поиск" priority />
                    </button>
                  </li>
                )}
                <li>
                  <Link href={'/'}>
                    <Image src={CartIcon} alt="корзина" priority />
                  </Link>
                </li>
              </ul>
            </div>
            {!isTablet && (
              <ul className={styles.menu}>
                {MENU?.map((item, index) => (
                  <li key={index}>
                    <Link className={styles.menuLink} href={item.link}>
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </SecondaryContainer>
      </div>
    </header>
  );
};

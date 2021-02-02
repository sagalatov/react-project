import React, {useEffect} from 'react';
import styles from './header.css';
import {SearchBlock} from "./SearchBlock";
import {ThreadTitle} from "./ThreadTitle";
import {SortBlock} from "./SortBlock";
import {useDispatch} from "react-redux";
import {saveToken, stRequestAsync} from "../../store/st/actions";

export function Header() {
  const dispatch = useDispatch();

  useEffect(() => {
    if (localStorage.getItem('token') != null) {
      dispatch(saveToken({token: localStorage.getItem('token')}));
    } else {
      dispatch(saveToken({token: window.__token__}));
      localStorage.setItem('token', window.__token__);
    }
  }, [])
  return (
  <header className={styles.header}>
    <SearchBlock />
    <ThreadTitle />
    <SortBlock />
  </header>
  );
}

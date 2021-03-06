import React, {useEffect, useRef} from 'react';
import ReactDom from 'react-dom';
import styles from './post.css';
import {Comment} from "../Comment";
import {CommentFormContainer} from "../CommentFormContainer";
import {useHistory} from 'react-router-dom';

export function Post() {
    const ref = useRef<HTMLDivElement>(null);
    const history = useHistory();

    useEffect(() => {
        function handleClick(event: MouseEvent) {

            if (event.target instanceof Node && !ref.current?.contains(event.target)) {
                history.push('/');
            }
        }

        document.addEventListener('click', handleClick);

        return () => {
            document.removeEventListener('click', handleClick);
        }

    }, [])


    const node = document.querySelector('#modal_root')
    if (!node) return null;

    return ReactDom.createPortal((
        <div className={styles.modal} ref={ref}>
            <div className={styles.headerContainer}>
                <div className={styles.karmaCounter}>
                    <button className={styles.up}>
                        <svg width="19" height="10" viewBox="0 0 19 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M9.5 0L0 10H19L9.5 0Z" fill="#C4C4C4"/>
                        </svg>
                    </button>
                    <span className={styles.karmaValue}>555</span>
                    <button className={styles.down}>
                        <svg width="19" height="10" viewBox="0 0 19 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M9.5 10L19 0L8.74228e-07 -1.66103e-06L9.5 10Z" fill="#C4C4C4"/>
                        </svg>
                    </button>
                </div>
                <div className={styles.titleWrapper}>
                    <h2 className={styles.title}>Тайтл</h2>
                    <div className={styles.avatarWrapper}>
          <span className={styles.createdAt}>
            <span className={styles.publishedLabel}>опубликовано</span>
             12 часов назад
          </span>
                        <div className={styles.userLink}>
                            <img className={styles.avatar}
                                 src='https://styles.redditmedia.com/t5_2qh4a/styles/communityIcon_z9ukzp0n9m021.png?width=256&s=7a29e3b7106333a479c6e3ce18e5945fbc8e0491'
                            />
                            <a href="#user-url" className={styles.username}>Имя Автора</a>
                        </div>
                    </div>
                </div>


            </div>

            <div className={styles.content}>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vulputate libero non sagittis
                    condimentum. Sed laoreet erat ac ipsum posuere, quis pellentesque sapien porta. Cras ullamcorper,
                    est vitae dictum pellentesque, lorem nulla congue augue, non lobortis tortor turpis nec mauris.
                    Nullam pellentesque tincidunt faucibus.</p>
                <p>Sed ipsum eros, vestibulum vel gravida eget, facilisis eu tortor. Aliquam mollis sapien sapien, eget
                    iaculis sem pulvinar vitae. Nam congue tortor a velit auctor laoreet. Phasellus ac bibendum ligula.
                    Integer convallis dui commodo quam aliquet consectetur. Sed non sapien sapien.</p>
                <p> In tincidunt placerat sem eu suscipit. Mauris commodo vestibulum arcu, dictum euismod quam dignissim
                    non. Mauris at suscipit quam.</p>
            </div>
            <CommentFormContainer/>
            <Comment name={'Михаил Рогов'}/>

        </div>
    ), node);
}


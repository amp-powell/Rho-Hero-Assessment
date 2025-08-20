// TODO: Build your Hero component here
// Requirements:
// - Accept props: src, alt, title, description, placeTitle, placeDescription
// - Use CSS Modules for styling
// - Implement scalable styles
// - Make it semantic and accessible

import styles from './Hero.module.css';

export default function Hero({src, alt, title, description, placeTitle, placeDescription, txtColor}) {
  return (
    <header className={styles.heroHeader} tabIndex={0}>
      <img className={styles.bkgImage} src={src} alt={alt} tabIndex={0}/>
      <div className={styles.heroContent} style={{color: txtColor}} tabIndex={0}>
        <h1 style={{placeSelf: placeTitle}} tabIndex={0}>{title}</h1>
        <p style={{placeSelf: placeDescription}} tabIndex={0}>{description}</p>
      </div>
    </header>
  );
}

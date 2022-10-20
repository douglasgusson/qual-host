import Image from "next/image";
import Link from "next/link";
import { FC } from "react";
import styles from "../../styles/Footer.module.css";

export const Footer: FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.content}>
        Desenvolvido por{" "}
        <Link href="https://github.com/douglasgusson" target="_blank">
          <a title="Douglas Gusson">
            <Image
              className={styles.footerDeveloperImage}
              src="https://github.com/douglasgusson.png"
              alt="Douglas Gusson"
              width={32}
              height={32}
            />
          </a>
        </Link>
      </div>
    </footer>
  );
};

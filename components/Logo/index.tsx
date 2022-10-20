import Image from "next/image";
import { FC } from "react";
import styles from "../../styles/Logo.module.css";

export const Logo: FC = () => {
  return (
    <div className={styles.logo}>
      <Image
        src="/logo-qual-host.png"
        alt="Logo Qual Host"
        width={512}
        height={224}
        layout="responsive"
      />
    </div>
  );
};

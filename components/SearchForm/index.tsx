import { useState } from "react";
import styles from "../../styles/SearchForm.module.css";

const urlRegex = new RegExp(
  "^(http[s]?:\\/\\/(www\\.)?|ftp:\\/\\/(www\\.)?|www\\.){1}([0-9A-Za-z-\\.@:%_+~#=]+)+((\\.[a-zA-Z]{2,3})+)(/(.)*)?(\\?(.)*)?"
);

type SearchFormProps = {
  onSubmit: (value: string) => void;
};

export const SearchForm: React.FC<SearchFormProps> = ({ onSubmit }) => {
  const [value, setValue] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      if (urlRegex.test(value)) {
        const url = new URL(value);
        onSubmit(url.host);
      } else {
        onSubmit(value);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <label htmlFor="domain" className={styles.label}>
        Domínio
      </label>
      <input
        id="domain"
        className={styles.input}
        type="text"
        autoComplete="url"
        value={value}
        placeholder="Ex.: google.com ou https://www.google.com"
        onChange={(e) => setValue(e.target.value.trim())}
        required
      />
      <button className={styles.button} type="submit">
        Buscar
      </button>
    </form>
  );
};

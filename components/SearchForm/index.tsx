import { useState } from "react";
import styles from "../../styles/SearchForm.module.css";

type SearchFormProps = {
  onSubmit: (value: string) => void;
};

export const SearchForm: React.FC<SearchFormProps> = ({ onSubmit }) => {
  const [domain, setDomain] = useState("");

  return (
    <form
      className={styles.form}
      onSubmit={(e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        onSubmit(domain);
      }}
    >
      <label htmlFor="domain" className={styles.label}>
        Domínio
      </label>
      <input
        id="domain"
        className={styles.input}
        type="text"
        value={domain}
        placeholder="Ex.: google.com"
        onChange={(e) => setDomain(e.target.value)}
        required
      />
      <button className={styles.button} type="submit">
        Buscar
      </button>
    </form>
  );
};

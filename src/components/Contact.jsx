import React from "react";
import styles from "./Contact.module.css"

function Contact({
  data: { name, lastName, email, phone, id },
  deleteHandeler,
}) {
  return (
    <li className={styles.container}>
      <p>
        {name} {lastName}
      </p>
      <p>
        <span>📭  </span>
        {email}
      </p>
      <p>
        <span>📞  </span>
        {phone}
      </p>
      <button onClick={() => deleteHandeler(id)}>🗑️</button>
    </li>
  );
}

export default Contact;

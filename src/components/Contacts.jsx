import React, { useState } from "react";
import { v4 } from "uuid";
import Contact from "./Contact";
import styles from "./Contacts.module.css"

function Contacts() {
  const [isCorrect, setIsCorrect] = useState(true);
  const [contacts, setContacts] = useState([]);
  const [contact, setContact] = useState({
    id: "",
    name: "",
    lastName: "",
    email: "",
    phone: "",
  });

  const changeHandeler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setContact((contact) => ({
      ...contact,
      [name]: value,
    }));
  };

  const addHandeler = () => {
    const { name, lastName, email, phone, id } = contact;
    if (
      name.length >= 1 &&
      lastName.length >= 1 &&
      email.length >= 1 &&
      phone.length >= 1
    ) {
      const newContacts = { ...contact, id: v4() };
      setIsCorrect(true);
      setContacts((contacts) => [...contacts, newContacts]);
    } else {
      setIsCorrect(false);
    }
  };

  const deleteHandeler = id => {
    const newContacts = contacts.filter(contact => contact.id !== id)
    setContacts(newContacts)
  }

  return (
    <div className={styles.container}>
      <div className={styles.inputForm}>
        <input
          type="text"
          placeholder="Name"
          name="name"
          value={contact.name}
          onChange={changeHandeler}
        />
        <input
          type="text"
          placeholder="Last Name"
          name="lastName"
          value={contact.lastName}
          onChange={changeHandeler}
        />
        <input
          type="email"
          placeholder="Email"
          name="email"
          value={contact.email}
          onChange={changeHandeler}
        />
        <input
          type="number"
          placeholder="Phone"
          name="phone"
          value={contact.phone}
          onChange={changeHandeler}
        />
        <button onClick={addHandeler}>Add</button>
        <span>{!isCorrect && "! Invalid data"}</span>
      </div>
      <div className={styles.contactList}>
        <ul>
          {contacts.length ? (
            contacts.map((data) => <Contact data={data} key={data.id} deleteHandeler={deleteHandeler} />)
          ) : (
            <p className={styles.noCantact}>No contacts yet</p>
          )}
        </ul>
      </div>
    </div>
  );
}

export default Contacts;

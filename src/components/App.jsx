import { Component } from 'react';
import Form from './Form/Form';
import ContactList from './ContactsList/ContactsList';
import Filter from './Filter/Filter';
import css from './App.module.css'

class App extends Component{
  state = {
    contacts: [
      {id: 'id-1', name: 'Jerry Simpson', number: '459-12-56', avatar: "https://randomuser.me/api/portraits/men/52.jpg"},
      {id: 'id-2', name: 'Hermione Kline', number: '443-89-12', avatar: "https://randomuser.me/api/portraits/women/22.jpg"},
      {id: 'id-3', name: 'Eden Clements', number: '645-17-79', avatar: "https://randomuser.me/api/portraits/men/32.jpg"},
      {id: 'id-4', name: 'Annie Copeland', number: '227-91-26', avatar: "https://randomuser.me/api/portraits/women/12.jpg"},
    ],
    filter: ''
  }

  // formSubmitHandler = data => {
  //   console.log(data);
    
  // }

  handleAddContact = (newContact) => {
    this.setState(({ contacts }) => ({
      contacts: [...contacts, newContact],
    }))
  }

  handleCheckContact = (name) => {
    const { contacts } = this.state;

    const isContact = contacts.find(contact => contact.name === name);

    isContact && alert('Contact is already found!');

    return !isContact;
  }

  handleDelete = (id) => {
    this.setState(({contacts}) => ({contacts: contacts.filter(contact => contact.id !== id)}))
  }

  handleFilterChange = (filter) => {
    this.setState({ filter });
  }

  getVisibleContacts = () => {
    const { contacts, filter } = this.state;

    return contacts.filter((contact)=> contact.name.toLowerCase().includes(filter.toLowerCase()))

  }


  render() {
    const visibleContacts = this.getVisibleContacts();
    return (
    <div className={css.ContactsList}>
        <h1 className={css.ContactList__titleWhite}>Phonebook</h1>
        <div className={css.ContactList__style}>
        <Form onSubmit={this.formSubmitHandler} onAdd={this.handleAddContact} onCheck={this.handleCheckContact} />

        <h2 className={css.ContactList__titleBlue}>Contacts</h2>
        <Filter filter={this.state.filter} onChange={this.handleFilterChange}/>
        <ContactList contacts={visibleContacts} onDelete={this.handleDelete}/>
        </div>
        
    </div>
  )
  }
}


export default App;
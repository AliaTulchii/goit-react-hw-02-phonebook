import { Component } from 'react';
import Form from './Form/Form';
import ContactList from './ContactsList/ContactsList';
import Filter from './Filter/Filter';

class App extends Component{
  state = {
    contacts: [
      {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
      {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
      {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
      {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
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
    <div>
  <h1>Phonebook</h1>
        <Form onSubmit={this.formSubmitHandler} onAdd={this.handleAddContact} onCheck={this.handleCheckContact} />

  <h2>Contacts</h2>
        <Filter filter={this.state.filter} onChange={this.handleFilterChange}/>
  <ContactList contacts={visibleContacts} onDelete={this.handleDelete}/>
    </div>
  )
  }
}


export default App;
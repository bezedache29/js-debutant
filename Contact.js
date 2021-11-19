const data = require('./contacts.json')

class Contact {

  constructor (contact) {
    this.id = contact.id
    this.firstName = contact.firstName
    this.lastName = contact.lastName
    this.address = contact.address
    this.phone = contact.phone
  }
  
  toString = () => {
    return this.lastName.toUpperCase() + ' ' + this.firstName
  }
}

class ContactService {

  allContacts = []

  constructor (contacts) {
    contacts.map(contact => {
      this.allContacts.push(new Contact(contact))
    })
  }

  get = () => {
    return this.allContacts ? this.allContacts : []
  }

  print = () => {
    this.get().map(contact => {
      console.log(contact.toString())
    })
  }

}

const myContact = new ContactService(data)
myContact.get()
myContact.print()
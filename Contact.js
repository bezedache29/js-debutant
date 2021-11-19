const data = require('./contacts.json')
const _ = require('lodash')
const chalk = require('chalk')

const { program } = require('commander');
program.version('0.0.1');

class Contact {

  constructor (contact) {
    this.id = contact.id
    this.firstName = contact.firstName
    this.lastName = contact.lastName
    this.address = contact.address
    this.phone = contact.phone
  }
  
  toString = (color = false) => {
    if (color) {
      return chalk.blue(this.lastName.toUpperCase()) + ' ' + chalk.red(this.firstName)
    } else {
      return this.lastName.toUpperCase() + ' ' + this.firstName
    }
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

  print = (color = false) => {
    this.get().map(contact => {
      color ? console.log(contact.toString(color)) : console.log(contact.toString())
    })
  }

}

const myContact = new ContactService(data)
myContact.get()


program.option('-h, --help', 'listContacts')
program.option('-c, --color', 'listContacts')

program.parse(process.argv)

const options = program.opts()
if (options.help) {
  myContact.print()
} else if (options.color) {
  myContact.print(true)
} else {
  myContact.print()
}
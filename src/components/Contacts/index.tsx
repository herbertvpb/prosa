import React from 'react'
import { Header, SearchBox } from '../../components';

const Contacts = () => {
  const contacts = [
    {
      id: 1,
      avatar: 'https://avatars1.githubusercontent.com/u/34076589?s=400&u=ce2ae97e719eeea9e1b77a940e2dbb1c9789e7a2&v=4',
      name: 'Herbert',
      lastSentence: 'E aí tudo bem?'
    },
    {
      id: 2,
      avatar: 'https://avatars1.githubusercontent.com/u/34076589?s=400&u=ce2ae97e719eeea9e1b77a940e2dbb1c9789e7a2&v=4',
      name: 'Herbert',
      lastSentence: 'E aí tudo bem?'
    },
    {
      id: 3,
      avatar: 'https://avatars1.githubusercontent.com/u/34076589?s=400&u=ce2ae97e719eeea9e1b77a940e2dbb1c9789e7a2&v=4',
      name: 'Herbert',
      lastSentence: 'E aí tudo bem?'
    },
    {
      id: 1,
      avatar: 'https://avatars1.githubusercontent.com/u/34076589?s=400&u=ce2ae97e719eeea9e1b77a940e2dbb1c9789e7a2&v=4',
      name: 'Herbert',
      lastSentence: 'E aí tudo bem?'
    },
    {
      id: 2,
      avatar: 'https://avatars1.githubusercontent.com/u/34076589?s=400&u=ce2ae97e719eeea9e1b77a940e2dbb1c9789e7a2&v=4',
      name: 'Herbert',
      lastSentence: 'E aí tudo bem?'
    },
    {
      id: 3,
      avatar: 'https://avatars1.githubusercontent.com/u/34076589?s=400&u=ce2ae97e719eeea9e1b77a940e2dbb1c9789e7a2&v=4',
      name: 'Herbert',
      lastSentence: 'E aí tudo bem?'
    },
    {
      id: 1,
      avatar: 'https://avatars1.githubusercontent.com/u/34076589?s=400&u=ce2ae97e719eeea9e1b77a940e2dbb1c9789e7a2&v=4',
      name: 'Herbert',
      lastSentence: 'E aí tudo bem?'
    },
    {
      id: 2,
      avatar: 'https://avatars1.githubusercontent.com/u/34076589?s=400&u=ce2ae97e719eeea9e1b77a940e2dbb1c9789e7a2&v=4',
      name: 'Herbert',
      lastSentence: 'E aí tudo bem?'
    },
    {
      id: 3,
      avatar: 'https://avatars1.githubusercontent.com/u/34076589?s=400&u=ce2ae97e719eeea9e1b77a940e2dbb1c9789e7a2&v=4',
      name: 'Herbert',
      lastSentence: 'E aí tudo bem?'
    },
    {
      id: 1,
      avatar: 'https://avatars1.githubusercontent.com/u/34076589?s=400&u=ce2ae97e719eeea9e1b77a940e2dbb1c9789e7a2&v=4',
      name: 'Herbert',
      lastSentence: 'E aí tudo bem?'
    },
    {
      id: 2,
      avatar: 'https://avatars1.githubusercontent.com/u/34076589?s=400&u=ce2ae97e719eeea9e1b77a940e2dbb1c9789e7a2&v=4',
      name: 'Herbert',
      lastSentence: 'E aí tudo bem?'
    },
    {
      id: 3,
      avatar: 'https://avatars1.githubusercontent.com/u/34076589?s=400&u=ce2ae97e719eeea9e1b77a940e2dbb1c9789e7a2&v=4',
      name: 'Herbert',
      lastSentence: 'E aí tudo bem?'
    }
  ]
  return (
    <div className="contacts">
      <Header />
      <SearchBox />
      <div className="contacts__list">
        {contacts.map(contact => {
          return (
            <div className="contacts__item">
              <div className="contacts__avatar">
                <img 
                  src={contact.avatar} 
                  alt="Avatar"
                />
              </div>
              <div className="contacts__info">
                <strong>{contact.name}</strong> 
                <span>{contact.lastSentence}</span>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Contacts

//import {login}  from '../support/commands'

describe('Audio Player', () => {
  beforeEach(() => {
    cy.login('janedoe@email.com', '1234567')
    // eslint-disable-next-line cypress/no-unnecessary-waiting
    cy.wait(1000)
  })
  it('plays audio', () => {
    cy.visit('/dashboard')
    // eslint-disable-next-line cypress/no-unnecessary-waiting
    cy.wait(1000)
    // get the first podcast from the dashboard list
    cy.get('.composition-name:first').click()
    // eslint-disable-next-line cypress/no-unnecessary-waiting
    cy.wait(1000)
    // click on playbutton
    cy.get('#play-btn').click()

    // eslint-disable-next-line cypress/no-unnecessary-waiting
    cy.wait(5000)
    cy.get('#player-play-btn').click()
  })
})

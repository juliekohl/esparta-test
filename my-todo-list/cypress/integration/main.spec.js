describe('Main tests', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/');
  })

  it('Update first task', () => {
    cy.get('.todo__input').eq(1).type('My Todo List');
  })

  it('Press enter and create new task', () => {
    cy.get('.todo__input').eq(3).type('.{enter}');
    cy.get('.todo__input').eq(0).type('New task was created!');
  })

  it('Task is done', () => {
    cy.get('.todo__checkbox').eq(0).click();
  })

  it('Task is undone', () => {
    cy.get('.todo__checkbox').eq(3).click();
  })

  it('Press backspace and delete a task', () => {
    cy.get('.todo__input').eq(2).type('{del}{selectall}{backspace}').type('{backspace}');
  })
})
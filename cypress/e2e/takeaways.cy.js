/// <reference types="Cypress" />

describe("Takeaways", () => {
  it("should display a list of fetched takeaways", () => {
    cy.visit("/")
    cy.get("[data-cy='takeaway-item']").should("have.length", 2)
  })
})

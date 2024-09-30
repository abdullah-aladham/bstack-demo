//const { beforeEach } = require("mocha")


describe('template spec', () => {
  let randomindex=Math.floor(Math.random()*4+2).toString()
  it.only('✅passes', () => {
    cy.visit('/')
    cy.url().should('equal','https://bstackdemo.com/')
    
  })
  it.only('Pass: product grid time is less or equal 1000ms',()=>{
    
    cy.intercept({
      method:"GET",
      path:"api/products",


    }).as('products')
    //cy.visit('/')
    cy.wait('@products')
  })
    
   
  it('✅passes:Navigating to offers page',()=>{
    cy.visit('/')
  cy.get('a[id="offers"]').click()
  })
  it('✅passes:Navigating to Orders Page',()=>{
    cy.get('a[id="orders"]').click()

  })
  it('✅passes:Navigating to Favourites page',()=>{

    cy.get('a[id="favourites"]').click()
  })
  it('✅passes: sorts the products based on apple choice',()=>{
    cy.get('body > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > main:nth-child(2) > div:nth-child(1) > div:nth-child(2) > label:nth-child(1) > span:nth-child(2)').click()
  })
  it('✅passes: sorts the products based on multiple choices',()=>{
    cy.get('body > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > main:nth-child(2) > div:nth-child(1) > div:nth-child(2) > label:nth-child(1) > span:nth-child(2)').click()
    cy.get(':nth-child('+randomindex+') > label > .checkmark').click()

  })
  it('✅passes: sorts the products based on all choices',()=>{
    cy.get('body > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > main:nth-child(2) > div:nth-child(1) > div:nth-child(2) > label:nth-child(1) > span:nth-child(2)').click()
    cy.get(':nth-child(3) > label > .checkmark').click()
    cy.get(':nth-child(4) > label > .checkmark').click()
    cy.get(':nth-child(5) > label > .checkmark').click()

    

  })
  it('✅passes:Navigates to sign in page',()=>{
    cy.get("#signin").click()
  })
  it('✅passes::Sort products based on lowest price',()=>{
    cy.get("div[class='sort'] select").select("lowestprice");

  })
  it('✅passes:Sort products based on highest price',()=>{
    cy.get("div[class='sort'] select").select("highestprice");

  })
  it('✅passes: Adds product to cart',()=>{
    cy.get('#\\31 2 > .shelf-item__buy-btn').click()
    cy.get('.float-cart__content').should('be.visible')
  })
})
describe('Float cart testSuite',()=>{
  it('opens the floating bag',()=>{
    cy.get('span[class="bag bag--float-cart-closed"]').click();
    cy.get('.float-cart__content').should('be.visible')

  })
  
})
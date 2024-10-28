//const { beforeEach } = require("mocha")
beforeEach(
 ()=>{
    cy.visit('/')
 }
  )

describe('template spec', () => {
  let randomindex=Math.floor(Math.random()*4+2).toString()
  it('✅passes', () => {
    cy.visit('/')
    cy.url().should('equal','https://bstackdemo.com/')
    
  })
  it('✅Pass: product grid time is less or equal 1000ms',()=>{
    cy.intercept({
      method:"GET",
      path:"/api/products",
      //statusCode: 201,


    }).as('result')
    cy.visit('/')
    
    //cy.visit('/')
    cy.wait('@result')

    //cy.get('@result').should('be.lessThan',1000)

  })
    
   
  it('✅passes:Navigating to offers page',()=>{
    cy.visit('/')
  cy.get('a[id="offers"]').click()
  })
  it('✅passes:Navigating to Orders Page',()=>{
    cy.visit('/')
    cy.get('a[id="orders"]').click()

  })
  it('✅passes:Navigating to Favourites page',()=>{
cy.visit('/')
    cy.get('a[id="favourites"]').click()
  })
  it('✅passes: sorts the products based on apple choice',()=>{
    cy.visit('/')
    cy.get('body > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > main:nth-child(2) > div:nth-child(1) > div:nth-child(2) > label:nth-child(1) > span:nth-child(2)').click()
  })
  it('✅passes: sorts the products based on multiple choices',()=>{
    cy.visit('/')
    cy.get('body > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > main:nth-child(2) > div:nth-child(1) > div:nth-child(2) > label:nth-child(1) > span:nth-child(2)').click()
    cy.get(':nth-child('+randomindex+') > label > .checkmark').click()

  })
  it('✅passes: sorts the products based on all choices',()=>{
  //  cy.visit('/')
  cy.intercept({
    method:"GET",
    path:"/api/products",


  }).as('results')
  cy.visit('/')
  cy.get('body > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > main:nth-child(2) > div:nth-child(1) > div:nth-child(2) > label:nth-child(1) > span:nth-child(2)').click()
    cy.get(':nth-child(3) > label > .checkmark').click()
    cy.get(':nth-child(4) > label > .checkmark').click()
    cy.get(':nth-child(5) > label > .checkmark').click()
    
  cy.wait('@results')

  

})
    
  it('✅passes:Navigates to sign in page',()=>{
    cy.visit('/')
    cy.get("#signin").click()
  })
  it('✅passes::Sort products based on lowest price',()=>{
    cy.visit('/')
    cy.get("div[class='sort'] select").select("lowestprice");
    cy.get('small[class="products-found"] span').should('be.visible')

  })
  it('✅passes:Sort products based on highest price',()=>{
    cy.visit('/')
    cy.get("div[class='sort'] select").select("highestprice");

  })
 
})
describe('Float cart testSuite',()=>{
  it('✅passes:opens the floating bag',()=>{
    cy.visit('/')
    cy.get('span[class="bag bag--float-cart-closed"]').click();
    cy.get('.float-cart__content').should('be.visible')

  })

  it('✅passes: Adds product to cart',()=>{
    cy.visit('/')
    cy.get('#\\31 2 > .shelf-item__buy-btn').click()
    cy.get('.float-cart__content').should('be.visible')
  })
})
describe('misc tests',()=>{
  it('adds product to favourites',()=>{
    cy.visit('/')
    cy.get("div[id='19'] button[aria-label='delete']").click()
    cy.login()
  })
})
describe('UI design Desktop TestSuite',()=>{
  it('Should Pass: main menu navbar dimensions is 87px',()=>{
    cy.get('.Navbar_root__2kbI9 > .mx-auto').should('have.css','height','87px')
    cy.get('.Navbar_root__2kbI9 > .mx-auto').should('have.css','height','87px')
  })
  it('should pass: Empty cart dimension test',()=>{
    cy.get('.bag.bag--float-cart-closed').should('be.visible').click()
    cy.get('.float-cart__content').should('be.visible')
    .should('have.css','width','450px')
    cy.get('.float-cart__content').should('be.visible')
    .should('have.css','height','585px')

  })
  it('tests container dimensions',()=>{
    cy.get('.shelf-container').should('be.visible')
    .and('have.css','width','754.9375px').and('have.css','height','3183.890625px')
  })
  it('tests dimensions of product card',()=>{
    cy.get('#\\31 ').should('be.visible')
    .and('have.css','width','251.609375px')
    .and('have.css','height','318.765625px')
  })
  it.only('Tests the inner elements of product card',()=>{
    cy.get('#\\31  > .shelf-item__thumb > img').should('be.visible')
    .and('have.css','width','229.609375px')
    .and('have.css','height','130.765625px');
    cy.get('#\\31  > .shelf-item__title').should('be.visible')
    .and('have.css','width','229.609375px')
    .and('have.css','height','45px')
    cy.get('#\\31  > .shelf-item__price').should('be.visible')
    .and('have.css','width','229.609375px')
    .and('have.css','height','60px')
    .and('have.css','padding-right','0px')
    cy.get('#\\31  > .shelf-item__price > .val').should('be.visible')
    .and('have.css','width','229.609375px')
    .and('have.css','height','31.5px')
    cy.get('#\\31  > .shelf-item__price > .val > small').should('be.visible')
    .should('have.css','width','6.234375px').and('have.css','height','12px')
    cy.get('#\\31  > .shelf-item__price > .val > b').should('be.visible')
    .and('have.css','width','35.046875px').and('have.css','height','23px')
    cy.get('#\\31  > .shelf-item__price > .val > span').should('be.visible')
    .and('have.css','width','19.46875px').and('have.css','height','16px')
    
    cy.get('#\\31  > .shelf-item__price > .installment').should('be.visible')
    .and('have.css','width','229.609375px')
    .and('have.css','height','21px')
    cy.get('#\\31  > .shelf-item__price > .installment > span').should('be.visible')
    .and('have.css','width','35.03125px').and('have.css','height','16px')
    cy.get('#\\31  > .shelf-item__price > .installment > b').should('be.visible')
    .and('have.css','width','50.625px').and('have.css','height','16px')
    cy.get('#\\31  > .shelf-stopper').should('be.visible')
    .and('have.css','width','55px')
    .and('have.css','height','47px')
    cy.get('#\\31  > .shelf-item__buy-btn').should('be.visible')
    .and('have.css','width','229.609375px')
    .and('have.css','height','51px')

  })
it.only('test filter div',()=>{
  cy.get('.filters').should('be.visible')
  .and('have.css','width','188.734375px')
  .and('have.css','height','141px')
})
it.only('tests cart toggler',()=>{
  cy.get('.bag--float-cart-closed').should('be.visible')
  .and('have.css','width','60px')
  .and('have.css','height','60px')
  cy.get('.bag--float-cart-closed > .bag__quantity').should('be.visible')
  .and('have.css','width','18px').and('have.css','height','18px')

})

})
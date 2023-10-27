describe("Speech Pundit",()=>{
    it("test case-1 Dash Board",()=>{
        //Login
        cy.visit("https://dev02.speechpundit.com/landing-page")
        cy.wait(5000)
        cy.get('[href="/login"]').click()
        cy.get('[name="email"]').type("hema.pantham+student50@applines.com")
        cy.get('[name="password"]').type("asdf1234")
        cy.get('[style="text-align: center;"] > .btn').click()
        cy.wait(4000)

        //Record page
        cy.get("#nav").trigger('mouseover').wait(2000)
        cy.get('[href="/recording"] >.label').click().trigger('mouseout').wait(3000)
        cy.get('button').contains("Start").click()
        cy.wait(32000)
        cy.get('button').contains("Done").click()
        cy.wait(2000)
        cy.get('video')
            .should('have.prop', 'paused', false)
            .and('have.prop', 'ended', false)
            .then(($video) => {
                $video[0].play()
                })


    })


})
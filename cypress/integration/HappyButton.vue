import HappyButton from './HappyButton.vue'
describe('<HappyButton>',()=>{
    it('renders',()=>{
        //see https://test-utils.vuejs.org/guide/
        cy.mount(HappyButton)
    })
})
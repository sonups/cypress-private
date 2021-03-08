
export const selectRandomValueByText = () => {
    let array = [];
    cy.get('#lister-sort-by-options > option').each(($el) => {
        array.push($el.text().trim());
    })
    function random() {
        return array[Math.floor(Math.random() * array.length)];
    }
    cy.get('#lister-sort-by-options')
        .select(array[random]);
},
describe('X should win the game', () => {
    it('should visit the website', () => {
        cy.visit('http://localhost:3000');
    });

    it('should clear the board', () => {
        cy.get('reset').click();
        expect(board).toBe([]);
    })
});

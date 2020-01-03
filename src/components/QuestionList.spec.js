describe('The question list', () => {
    beforeEach(() => {
        console.log('before each');
    });
    beforeAll(() => {
        console.log('before all');
    });
    it('should display a list of items', () => {
        expect(42 + 2).toEqual(44);
    });

    afterEach(() => {
        console.log('after each');
    });
    afterAll(() => {
        console.log('after all');
    });

    it.skip('should display the meaning of life', () => {
        expect(42 + 2).toEqual(43);
    });
});
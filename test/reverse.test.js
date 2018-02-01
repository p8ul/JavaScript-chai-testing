import Reverse from '../src/reverse.js';

describe('Reverse String', () => {
    it('it should reverse string', () => {
        expect(Reverse('hello')).to.eql('olleh');
    });

});
import { greet } from './greet';

describe ('greet', () => {

    it('should return Welcome Angelo', () => {
        const result = greet('Angelo');
        expect (result).toContain('Angelo'); // We don't use toBe here because in the future we may want to add a ! at the end of the returned string. 
    })

})
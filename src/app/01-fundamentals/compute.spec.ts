import { compute } from './compute';

describe('compute', () => {

    it('should return 0 if input is negative', () => {
        const result = compute (-1);
        expect(result).toBe(0);
    })

    it('should increment input by one if the number provided is positive', () => {
        const result = compute (7);
        expect(result).toBe(8);
    })
})

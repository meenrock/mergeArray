import { merge } from '../src/index';

describe('testing for merge functionality', () => {
    it('should output merged array', () => {
      const collection1 = [1, 7, 11, 24];
      const collection2 = [8, 12, 25, 37];
      const result = merge(collection1, collection2);
      expect(result).toStrictEqual([1,7,8,11,12,24,25,37]);
    });
    
    it('should output merged array', () => {
        const collection1 = [1, 7, 11, 24];
        const collection2 = [8, 12, 25, 37, 44];
        const result = merge(collection1, collection2);
        expect(result).toStrictEqual([1,7,8,11,12,24,25,37,44]);
    });

    it('prove that this function just merge array alternately col1,col2,col1 so on. not sorting them', () => {
        const collection1 = [1, 3, 5];
        const collection2 = [1, 3, 5];
        const result = merge(collection1, collection2);
        expect(result).toEqual([1, 1, 3, 3, 5 ,5]);
      });
});

describe('testing for error output', () => {
  it('should output empty array', () => {
    const collection1: number[] = [];
    const collection2: number[] = [];
    const result = merge(collection1, collection2);
    expect(result).toEqual([]);
  });

  it('should output one array member', () => {
    const collection1 = [5,5,5];
    const collection2: number[] = [];
    const result = merge(collection1, collection2);
    expect(result).toEqual([5,5,5]);
  });
  
});
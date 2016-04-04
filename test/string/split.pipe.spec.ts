import { SplitPipe } from '../../index';
        
import {describe, it, beforeEach, expect} from 'angular2/testing';

describe('SplitPipe', () => {
    
    let pipe: SplitPipe;
    
    beforeEach(() => {
       pipe = new SplitPipe(); 
    });
    
    
    it('Should return splitted string as an array', () => {
       
        const result = pipe.transform('abc', ['b']);
        expect(result).toEqual(['a', 'c']);
    });
    
    it('Should return splitted string as an array', () => {
       
        const result = pipe.transform('abc', ['b', 0]);
        expect(result).toEqual([]);
    });
    
    it('Should throw an error', () => {
        
        expect(() => {
            pipe.transform(2, ['b', 0]);
        }).toThrowError(TypeError);
    });
    
   
});
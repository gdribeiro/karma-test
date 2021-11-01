const ex = require('../src/exercise.js');

let assert = require('chai').assert;
let expect = require('chai').expect;


describe('Exercise Tests', () => {
    
    describe('Happy Path', () => {

      it('Hello, World', () => {
        let res = ex.findFirstRepeatedWord('Hello: hellO   ,-=;World');
        assert.equal(res, 'hello');
      });
    });

    describe('Failing Tests', () => {
        it('Throw Error', () => {
            let res = ex.findFirstRepeatedWord('Hello: hAllO   ,-=;World');
            assert.equal(res.message, 'InvalitInput');
            
        });
    });
  });
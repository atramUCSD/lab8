/**
 * @jest-environment jsdom
 */

 import { TestScheduler } from '@jest/core';
import { pushToHistory } from '../scripts/router.js';

 // describe(name, fn) creates a block that groups together several related tests. For example, if you have a myBeverage object 
 // that is supposed to be delicious but not sour, you could test it with:

 /** 
  * const myBeverage = {
  delicious: true,
  sour: false,
};

describe('my beverage', () => {
  test('is delicious', () => {
    expect(myBeverage.delicious).toBeTruthy();
  });

  test('is not sour', () => {
    expect(myBeverage.sour).toBeFalsy();
  });
});
  */

describe ('pushtoHistory Test Case', () => {
    // All you need in a test file is the test method which runs a test
    /** 
     * test('did not rain', () => {
    expect(inchesOfRain()).toBe(0);
    });
     */
    
    // Test Settings 
    test('push settings test' , () => {
        //initialize pushToHistory instance
        const settingsPushed = pushToHistory('settings');
        //check state
        expect(settingsPushed.state.page).toBe('settings');
        //check length
        expect(settingsPushed.length).toBe(2);
    });

    //Test Entries
    test('add entry test', () => {
         const entryAdded = pushToHistory('entry',1);
         //check if entry's added
         expect(entryAdded.state.page).toBe('entry1')
         //check length
         expect(entryAdded.length).toBe(3);
    });
    
    // Test Default
    test('Default Test', () => {
        const defaultState = pushToHistory('default');
        //check state
        expect(defaultState.state.page).toBe(undefined);
        //check length
        expect(defaultState.length).toBe(4);
    });
});


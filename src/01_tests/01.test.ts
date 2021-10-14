import {mult, splitSentence, sum} from "./01";
let a: number;
let b: number;
let c: number;

beforeEach(()=>{
    a = 1;
    b = 2;
    c = 3;
})

test('sum should be right', () =>{
    //data

    //action
    const result1 = sum(a,b);
    const result2 = sum(b,c);



    //expect result
    expect(result1).toBe(3);
    expect(result2).toBe(5)
})

test('multiply should be right', ()=>{
    const result1 = mult(a,b);
    const result2 = mult(b,c);
    expect(result1).toBe(2);
    expect(result2).toBe(6)
})

test('split sentence', ()=>{
    const sent1 = splitSentence("Hello my dear friend");
    const sent2 = splitSentence('I love football - it is my life');

    expect(sent1.length).toBe(4);
    expect(sent1[0]).toBe('hello');
    expect(sent1[1]).toBe('my');
    expect(sent1[2]).toBe('dear');
    expect(sent1[3]).toBe('friend');

    expect(sent2.length).toBe(7);
    expect(sent2[0]).toBe('i');
    expect(sent2[1]).toBe('love');
    expect(sent2[2]).toBe('football');
    expect(sent2[3]).toBe('it');
    expect(sent2[4]).toBe('is');
    expect(sent2[5]).toBe('my');
    expect(sent2[6]).toBe('life');

})
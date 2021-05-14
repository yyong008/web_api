let True: boolean = true;
let False: boolean = false;
let boole: Object = new Boolean(false);

console.log(boole);

// array
let arr: number[] = [1,3,4];
let arr_any: any[] = [false, 1, 'string', true, {x: 'this is good'}, [23, 34], () => 123];
let arr_new = new Array(2)
let arr_like: ArrayLike<any> =[{1: 123}, {length: 1}]

// promise like
let pl: PromiseLike<any>;
let plc: PromiseConstructorLike;

let num: number = Number(123)
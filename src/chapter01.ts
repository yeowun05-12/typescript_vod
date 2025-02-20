//문자열(string)
const a: string = '';
const b: string = '';
const c: string = ``;

let myName: string = 'Steve';
let message: string = `hello ${myName}`;

// 숫자 타입 (number)

let n: number = 10;

// n = '100';
// n.toUpperCase();

let count: number = 10;
let price: number = 9.99;
let temperature: number = -15;
let distance: number = 3 / 4e-5;

let total: number = count * price;

let infinity: number = Infinity;
let minusInfinity: number = -Infinity;

let nan: number = NaN;

// 불리언 (Boolean)

let isOpen: boolean = true;
let isCompleted: boolean = false;

//&& || !

let isAvailable: boolean = isOpen && !isCompleted;

// null

let user: string | null = null;

function login(userName: string) {
  user = userName;
}

function logout() {
  user = null;
}

login('Joey');
logout();

//any = 모든 값을 할당 하겠다.
// any  타입의 사용을 최소화 하는 것이 중요하다.

let someValue: any;
someValue.toUpperCase();
someValue.toFixed();
someValue = true;


// Var/Let/Const

// var a = 1;
let b = 2;
const c = 3;
const f = function (a, b) { return a + b; };
const f2 = (a, b) => a + b;
console.log(f2(5, 4));

let g: number = 1;
// g = true;
let h: boolean = true;
let i: string = "lkdjgf";
i = 'ldkfjg';

let l = true;
// l = 10;

let res = add(1, 1);
function add(a: number, b: number): number {
    return a + b;
}

let navn1: string = "Mikkel";
let køn1 = 0;   // 0 = mand

let navn2: string = "Lene";
let køn2 = 1;   // 1 = kvinde

enum Køn {
    "mand",
    "kvinde"
}

let navn3 = "Mathias";
let køn3: Køn = Køn.mand;
let kv = Køn[0];
console.log(kv);


const a1: string[] = [];
a1.push("*");
a1.push("*");

const a2: number[] = [];
a2.push(21);
a2.push(5);
a2.push(2);
a2.push(50);
console.log(a2);

const a3 = a2.filter(function (v) { if (v < 10) return true; });
console.log(a3);
const a4 = a2.filter(v => v < 10);
console.log(a4);
const a5 = a2.filter(minFilter);
console.log(a5);

function minFilter(v) {
    return v < 10;
}

a2.sort();
console.log(a2);
a2.sort(function (a, b) {
    if (a < b)
        return -1;
    if (a > b)
        return 1;
    return 0;
});
console.log(a2);

interface IPerson {
    navn: string;
    alder: number;
    erILive: boolean;
}

const p: IPerson = { navn: "Mikkel", alder: 14, erILive: true };
console.log(p);
const pp: IPerson = p;
function Test2(a: number, b: IPerson) {

}
Test2(3, p);
const a6: IPerson[] = []; // new Array();
a6.push({ navn: "Mikkel", alder: 14, erILive: true });
a6.push({ navn: "Mathias", alder: 12, erILive: true });

// Tuple
// let s: [number, string] = [];
// s[0] = 5;
// s[1] = "";
// s[2] = 0;
// s[3] = "0";
// s[4] = true; -- fejl

const b1: string[] = [];
const b2 = new Array<string>();
const b3 = new Array<IPerson>();

var res3 = minFunktion<string>("*", "!");
var res4 = minFunktion<number>(1, 56);
var res5 = minFunktion(1, 56); // linter!!!!??

function minFunktion<T>(a: T, b: T) {
}

// --------------------

function testFunktion1(a: number, b: number, c: number = 5) {

}

testFunktion1(1, 2, 3);
testFunktion1(1, 2);
// testFunktion1(1, 2);
// testFunktion1(1);


function func1(a: number, b: number): number { return a + b; }
const func2 = function (a: number, b: number): number { return a + b; };
// Lambda functions
const func3 = (a: number, b: number): number => a + b;
const func4 = (a: number): number => a + b;
const func5 = (a: number): number => { console.log("*"); return a; };

let minFuncType: (a: number, b: boolean) => number;
minFuncType = function (a: number, x: boolean) { return 0; };
minFuncType = (a: number, x: boolean) => a++;

function mintest5(a, b?) { }
mintest5(2);
mintest5(2, 5);

function otest(a: number);
function otest(a: boolean);
function otest(a: any) {
    // Kode...

}
otest(1);
otest(true);

class Bil {

    private _model: string;
    private _årgang: number;


    public get årgang(): number {
        return this._årgang;
    }
    public set årgang(v: number) {
        this._årgang = v;
    }

    constructor(model: string) {
        this._model = model;
    }
    public skriv() {
        console.log(this._model);
    }
}

const bil1 = new Bil("Volvo");
bil1.årgang = 2000;
console.log(bil1.årgang);
bil1.skriv();

class BilType2 {
    constructor(public model: string, public årgang: number) {

    }
}

const bil2 = new BilType2("", 2000);
bil2.model = "Volvo";
bil2.årgang = 1990;

class Lastbil extends Bil {

}

const last1 = new Lastbil("volvo");
namespace Teknologisk {
    export namespace Kernelag {
        export class StorLastbil extends Lastbil {

            public static TestMetode(): void {

            }
        }
    }
}
// Teknologisk.Kernelag.StorLastbil
// const res9 = StorLastbil.TestMetode();

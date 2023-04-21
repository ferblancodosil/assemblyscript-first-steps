// declare function consoleLog<T>(arg0: T): void;
// declare function consoleStr(arg0: string): void;
// declare function parseJSON(arg0: string): Object;
import { JSON } from 'json-as';


declare function consoleLog(a: string): void
declare function getDataFromJS(a: f64): f64
declare function getMyArray(): f64[]



@json
class Person {
  name: string;
  age: i32;
  meta: Meta;
}

@json
class Meta {
  country: string;
  awesome: boolean;
  moreInfo: string;
}

export function add(a: i32, b: i32): i32 {
  consoleLog(`Console llamado desde AS para la suma: ${a} + ${b} =  ${a + b}`);
  return min(a, b);
}

export function getMeta(personJSON: string): Meta {
  const decoded:Person = JSON.parse<Person>(personJSON);
  // decoded.meta.moreInfo = "Viene de " + decoded.meta.country + "para pasarlo bien con webassembly!";
  decoded.meta.moreInfo = `Viene de ${decoded.meta.country} para pasarlo bien con webassembly!`;
  return decoded.meta;
}

export function fibonacci(n: i32): u64 {
  var a = 0, b = 1
  if (n > 0) {
    while (--n) {
      let t = a + b
      a = b
      b = t
    }
    return b
  }
  return a
}

// Arrays: https://www.assemblyscript.org/stdlib/array.html
export function cartesian(matrix: string[][] = []): string[][] {
  let result: string[][] = [[]];

  for (let i = 0; i < matrix.length; i++) {
    let currentSubarray = matrix[i];
    let tempResult: string[][] = [];

    for (let j = 0; j < result.length; j++) {
      let currentResultSubarray = result[j];

      for (let k = 0; k < currentSubarray.length; k++) {
        let currentSubarrayElement = currentSubarray[k];
        tempResult.push(currentResultSubarray.concat([currentSubarrayElement]));
      }
    }

    result = tempResult;
  }

  return result;
}

class Rectangulo {
  ancho: f64;
  alto: f64;

  constructor(ancho: f64, alto: f64) {
    this.ancho = ancho;
    this.alto = alto;
  }
}

export function crearRectangulo(ancho: f64, alto: f64): Rectangulo {
  return new Rectangulo(ancho, alto);
}

export function areaDelRectangulo(rectangulo: Rectangulo): f64 {
  return rectangulo.ancho * rectangulo.alto;
}

export function countDown(number: f64): void {
  let i: f64 = 0;
  while (i<number) {
    i = i + 1;
    consoleLog(`Hola ${i}`);
  }
}


export function executionExample(): f64 {
	let data: f64 = getDataFromJS(10);
	consoleLog(`El valor recibido desde JS: ${data}`);
  consoleLog(JSON.stringify(getMyArray()));
	return data * 5;
}

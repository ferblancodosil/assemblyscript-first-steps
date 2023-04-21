export function consoleLog(value) {
    document.getElementById("log").append(`${value} - `);
    console.log(value);
}

export function getDataFromJS(n) {
    var a = 0, b = 1;
    if (n > 0) {
        while (--n) {
        let t = a + b;
            a = b;
            b = t;
        }
        return b;
    }
    return a;

}

export function getMyArray() {
    return [1,2,3]; 
}
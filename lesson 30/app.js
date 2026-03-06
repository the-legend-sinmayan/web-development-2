function clearscreen() {
    document.getElementById("result").value = "";
}
function setscreenvalue(value) {
    const r = document.getElementById("result");
    if (r.value === "enter an expression"|| r.value === "invalid expression")
    r.value += value;
}
function calculatResult() {
    
    const resultelement = document.getElementById("result");
    const expression = resultelement.value.trim();

}
if (expression === '') {
    resultelement.value = 'enter an expression';
    return;
}
try {
    resultelement.value = eval(expression);
}
catch (e) {
    resultelement.value = 'invalid expression';
}

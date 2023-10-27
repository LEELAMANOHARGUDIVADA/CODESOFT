function clearResult() {
    document.getElementById("result").value = "";
}

function deleteLastCharacter() {
    const currentResult = document.getElementById("result").value;
    document.getElementById("result").value = currentResult.slice(0, -1);
}

function appendCharacter(character) {
    document.getElementById("result").value += character;
}

function calculateResult() {
    const currentResult = document.getElementById("result").value;
    try {
        const result = eval(currentResult);
        document.getElementById("result").value = result;
    } catch (error) {
        document.getElementById("result").value = "Error";
    }
}
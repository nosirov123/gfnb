// script.js
import { yigindi, ayirma, kopaytma, bolme } from "./index.js";

const input1 = document.getElementById("input1");
const input2 = document.getElementById("input2");
const result = document.getElementById("result");
const yigindiBtn = document.getElementById("yigindi");
const ayirmaBtn = document.getElementById("ayirma");
const kopaytmaBtn = document.getElementById("kopaytma");
const bolinmaBtn = document.getElementById("bolinma");

const getInputs = () => {
    const num1 = parseFloat(input1.value) || 0;
    const num2 = parseFloat(input2.value) || 0;
    return { num1, num2 };
};

yigindiBtn.addEventListener("click", () => {
    const { num1, num2 } = getInputs();
    result.textContent = `Result: ${yigindi(num1, num2)}`;
});

ayirmaBtn.addEventListener("click", () => {
    const { num1, num2 } = getInputs();
    result.textContent = `Result: ${ayirma(num1, num2)}`;
});

kopaytmaBtn.addEventListener("click", () => {
    const { num1, num2 } = getInputs();
    result.textContent = `Result: ${kopaytma(num1, num2)}`;
});

bolinmaBtn.addEventListener("click", () => {
    const { num1, num2 } = getInputs();
    if (num2 === 0) {
        result.textContent = "Result: Cannot divide by zero";
        return;
    }
    result.textContent = `Result: ${bolme(num1, num2)}`;
});
 function calculate(operator) {
            let n1 = parseFloat(document.getElementById("num1").value);
            let n2 = parseFloat(document.getElementById("num2").value);
            let result;

            if (isNaN(n1) || isNaN(n2)) {
                result = "Enter valid numbers";
            } else {
                if (operator === '+') {
                    result = n1 + n2;
                } else if (operator === '-') {
                    result = n1 - n2;
                } else if (operator === '*') {
                    result = n1 * n2;
                } else if (operator === '/') {
                    result = n2 !== 0 ? n1 / n2 : "Cannot divide by 0";
                }
            }

            document.getElementById("result").innerText = result;
        }

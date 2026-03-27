function analyze() {
  let num = Number(document.getElementById("num").value);
  let result = document.getElementById("result");

  // Even or Odd
  let type = (num % 2 === 0) ? "Even" : "Odd";

  // Numbers from 1 to n
  let numbers = "";
  for (let i = 1; i <= num; i++) {
    numbers += i + " ";
  }

  // Square function
  function square(n) {
    return n * n;
  }

  // Output
  result.innerHTML = `
    <p>Number is: ${type}</p>
    <p>Numbers: ${numbers}</p>
    <p>Square: ${square(num)}</p>
  `;
}
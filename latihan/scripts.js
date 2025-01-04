document.addEventListener("DOMContentLoaded", () => {
  const dropdownItems = document.querySelectorAll(".dropdown-item");
  const operationButton = document.getElementById("operationButton");

  // Tambahkan event listener untuk setiap item dropdown
  dropdownItems.forEach((item) => {
    item.addEventListener("click", (e) => {
      e.preventDefault();
      const selectedValue = item.getAttribute("data-value");
      operationButton.textContent = selectedValue; // Ubah teks tombol
      operationButton.setAttribute("data-value", selectedValue); // Simpan nilai operasi
    });
  });
});

document.getElementById("equalizeButton").onclick = () => {
  const firstNumber = parseFloat(document.getElementById("firstNumber").value);
  const secondNumber = parseFloat(document.getElementById("secondNumber").value);
  const operation = document.getElementById("operationButton").getAttribute("data-value");

  let result;

  switch (operation) {
    case "+":
      result = firstNumber + secondNumber;
      break;
    case "-":
      result = firstNumber - secondNumber;
      break;
    case "x":
      result = firstNumber * secondNumber;
      break;
    case "/":
      result = secondNumber !== 0 ? firstNumber / secondNumber : "Error (division by zero)";
      break;
    default:
      result = "No operation selected";
  }

  console.log("Operation:", operation);
  console.log("Result:", result);
  document.getElementById("result").textContent = result;
};

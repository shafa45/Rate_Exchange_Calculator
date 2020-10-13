const currencyEl_one = document.getElementById("currency-one"),
  amountEl_one = document.getElementById("amount-one"),
  currencyEl_two = document.getElementById("currency-two"),
  amountEl_two = document.getElementById("amount-two"),
  swap = document.getElementById("swap"),
  rate = document.getElementById("rate");

// EventListeners
currencyEl_one.addEventListener("change", calculate);
amountEl_one.addEventListener("input", calculate);
currencyEl_two.addEventListener("change", calculate);
amountEl_two.addEventListener("input", calculate);
swap.addEventListener("click", swapCurrencies);

// calculate
function calculate() {
  const currency_one = currencyEl_one.value;
  const currency_two = currencyEl_two.value;
  fetch(`https://api.exchangerate-api.com/v4/latest/${currency_one}`)
    .then((res) => res.json())
    .then((data) => {
      const rates = +data.rates[currency_two];
      rate.innerHTML = `1 ${currency_one} = ${rates} ${currency_two}`;
      amountEl_two.value = (rates * amountEl_one.value).toFixed(2);
    });
}
function swapCurrencies() {
  let temp = currencyEl_one.value;
  currencyEl_one.value = currencyEl_two.value;
  currencyEl_two.value = temp;
  calculate();
}

calculate();

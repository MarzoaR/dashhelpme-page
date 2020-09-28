document.addEventListener("DOMContentLoaded", function(event) {
  document.getElementById("cantidad").value= ''
});

const API = "https://rates2.dashretail.org/rates?symbol=btcusd,dashusd&nested=0&source=dashretail"
const APIDOLLAR = "https://s3.amazonaws.com/dolartoday/data.json"

var arr = ''
let temporal = ''
let stringTotal = ''

fetch (API)
.then(response => response.json())
.then(myjson => {

  arr = addUSD(myjson)

})
.then(
  fetch(APIDOLLAR)
  .then(response => response.json())
  .then(newjson => {
    createSelect(addVES(newjson["USD"]))
  })
)


function addUSD(param) {
  let USD = {
    baseCurrency: "USD",
    price: "1"
  }
  param.push(USD)
  return (param)
}

function addVES(param2) {
  let VES = {
    baseCurrency: "VES",
    price: (1 / param2["promedio"]).toString()
  }
  arr.push(VES)

  return (arr)
}

function createSelect(arg) {
  let convertFrom = document.getElementById("convertFrom")
  let convertTo = document.getElementById("convertTo")

  for (const a in arg) {
    temporal = `<option value=${arg[a]["price"]}>${name(arg[a]["baseCurrency"])}</option>`
    stringTotal = stringTotal + temporal
  }
  convertFrom.innerHTML = stringTotal
  convertTo.innerHTML = stringTotal
}

function name(arg) {
  switch(arg) {
    case "BTC":
      return "Bitcoin (BTC)"
    case "DASH":
      return "Dash (DASH)"
    case "USD":
      return "Dolar Americano (USD)"
    case "VES":
      return "Bolivar (VES)"
    default:
      console.log("No hay coincidencia")
      break
  }
}

function convert() {

  let cantidad = document.getElementById("cantidad")
  let convertFrom = document.getElementById("convertFrom")
  let convertTo = document.getElementById("convertTo")
  let result = document.getElementById("result")
  let valor = (parseFloat(cantidad.value) * parseFloat(convertFrom.value)) / parseFloat(convertTo.value)

  if(convertTo.selectedIndex == 3 && convertFrom.selectedIndex == 1){
    valor *= 1.01
  }

  if(valor) {
    result.innerHTML = new Intl.NumberFormat("en-VE").format(valor)
  }else {
    result.innerHTML = "0"
  }
}

function valideKey(evt)
  {
    var code = (evt.which) ? evt.which : evt.keyCode;
    if(code==8 || code==46) 
    {
      return true;
    }
    else if(code>=48 && code<=57) 
    {
      return true;
    }
    else
    {
      return false;
    }
  }
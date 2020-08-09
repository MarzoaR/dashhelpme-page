const bodyExchange = document.querySelector("#bodyExchange");
let temporal = '';
let stringTotal = '';

let feature = '';

  function getExchange() {
    const API_EXCHANGE = '../json/exchange.json';
    console.log(API_EXCHANGE)
    fetch(API_EXCHANGE)
    .then(response => response.json())
    .then(jsonExchange => {
      for (const prop in jsonExchange) {

        if(jsonExchange[prop].features.length > 0){
          for (const fea in jsonExchange[prop].features){
            if(jsonExchange[prop].features[fea].name === 'bti'){
              feature = `
              <a href="${jsonExchange[prop].features[0].url}" target="_blank">
                <img src="${jsonExchange[prop].features[0].logo}" alt="${jsonExchange[prop].features[0].name}" class="img-logo">
              </a>
              `
            }
            if(jsonExchange[prop].features[fea].name === 'chainlocks'){
              feature = feature + `
              <img src="${jsonExchange[prop].features[1].logo}" alt="${jsonExchange[prop].features[1].name}" class="img-logo">
              `
            }
            if(jsonExchange[prop].features[fea].name === 'instasend'){
              feature = feature + `
              <img src="${jsonExchange[prop].features[2].logo}" alt="${jsonExchange[prop].features[2].name}" class="img-logo">
              `
            }
          }
        }else{
          feature = '';
        }

        temporal = `
        <tr>
          <td data-label="Nombre">
            <a href="${jsonExchange[prop].url}" target="_blank" rel="noopener noreferrer">
              <img src="${jsonExchange[prop].logo}" alt="${jsonExchange[prop].nombre}" class="img-logo">
              <h4>${jsonExchange[prop].nombre}</h4>
            </a>
          </td>
          <td data-label="Features">
            ${feature}
          </td>
          <td data-label="Trading pairs">
            <span>${jsonExchange[prop].pairs}</span>
          </td>
          <td data-label="Compra Dash">
            <a href="${jsonExchange[prop].url}" target="_blank" rel="noopener noreferrer" class="buy"><i class="fas fa-sign-in-alt"></i><span>Comprar</span></a>
          </td>
        </tr>
        `
        stringTotal = stringTotal + temporal;
        feature = '';
    }
      bodyExchange.innerHTML = stringTotal;
    })
  }

  getExchange();

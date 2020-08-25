function getExchange(id, file) {

  let temporal = '';
  let stringTotal = '';
  let feature = '';

  let bodyExchange = document.querySelector(`${id}`);
  let API_EXCHANGE = `../json/${file}`;
  // console.log(API_EXCHANGE)
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
  .then(() => {
    let img = document.getElementsByTagName("img");
    for (let item of img) {
      if(item.getAttribute("alt") == "braziliex" || item.getAttribute("alt") == "ripio"){
        item.classList.remove("img-logo");
        item.classList.add("img-logo__br")
      }
    }
  })
}

  getExchange("#bodyExchange", "exchange.json");
  getExchange("#bodyEeuu", "eeuuExchange.json");
  getExchange("#bodyArgentina", "argentinaExchange.json");
  getExchange("#bodyBrasil", "brasilExchange.json");
  getExchange("#bodyVenezuela", "venezuelaExchange.json");
  getExchange("#bodyColombia", "colombiaExchange.json");
  getExchange("#bodySpain", "spainExchange.json");
  getExchange("#bodyMexico", "mexicoExchange.json");
  getExchange("#bodyChile", "chileExchange.json");
  getExchange("#bodyCostaRica", "variosExchange.json");
  getExchange("#bodyPeru", "variosExchange.json");
  getExchange("#bodyRepublicaDominicana", "variosExchange.json");
  getExchange("#bodyUruguay", "variosExchange.json");
  getExchange("#bodyCuba", "cubaExchange.json");

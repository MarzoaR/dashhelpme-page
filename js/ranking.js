const api = 'https://dash-utils-api.herokuapp.com/API/rates'

let rank = document.querySelector('#listRanking')
let capitalization = document.querySelector('#listCapitalizacion')
let volume = document.querySelector('#listVolumen')

function ranking(API) {


  fetch(API)
    .then(response => response.json())
    .then(myrank => {

      rank.innerHTML = `#${myrank.ranking}`
      capitalization.innerHTML = `+$${myrank.cap}MM`
      volume.innerHTML = `+$${myrank.volume}MM`
    }).catch(err => {
      console.log(err)
    })
}

ranking(api)


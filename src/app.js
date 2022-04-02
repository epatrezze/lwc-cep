import { LightningElement } from "lwc";

export default class App extends LightningElement {
  viewData;

recuperarCEP(evento) {
    console.log('Evento: ',evento.target.value)
    const cep = evento.target.value.replace(/\D/g, '');
    const url = `https://viacep.com.br/ws/${cep}/json/`;
    const options = {
        method: 'GET',
        mode: 'cors',
        headers: {
            'content-type': 'application/json;charset=utf-8'
        }
    }
    if (cep.length == 8) {
      fetch(url, options).then(
          response => response.json()
      ).then(
          data => {
              console.log(data.bairro);
              this.viewData = data;
              console.log(this.viewData)
          }
      )
    }
}
}


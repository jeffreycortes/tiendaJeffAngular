export class TiendaManager {
    constructor() {
        this.urlBase = "/tiendaJeffBk"
        this.obtenerDataInicial()
        this.inicializarFormulario()
        this.guardarEvento()
    }

    public obtenerDataInicial() {
        let url = this.urlBase + "/Items"
        $.get(url, (response) => {
            console.log(response);
        })
    }
  }

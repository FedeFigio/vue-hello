// Descrizione
// Stampare a schermo un messaggio all’interno di un h1, 
// utilizzando i data.
// Bonus
// Aggiungere alla pagina un’immagine, presa anch’essa da un data.

var root = new Vue({
    el: '#root',
    data: {
        message: 'click for hide image',
        img: "https://www.venetoformazione.it/wp-content/uploads/2020/11/ottimizzare-immagini-display-retina.jpg",
        buttonMessage: "click",
        dNone: "",
        counter: 0
    },
    methods: {
        show: function() {
            if (this.dNone == "") {
                this.dNone = "dNone"
                this.message = "click for show image"
            } else if (this.dNone == "dNone") {
                this.dNone = ""
                this.message = "click for hide image"
            }
            this.counter += 1
        }
    }
})
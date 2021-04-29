// Descrizione:
// Stampare a schermo un messaggio all’interno di un h1, utilizzando i data.
// Bonus:
// Aggiungere alla pagina un’immagine, presa anch’essa da un data.

const app = new Vue(
    {
        el: '#vueContainer',
        data: {
            messaggio: "Ciao dall'interno del data",
            immagine: "img/tiger-2430625_1920.jpg"
        }
    }
    );

// Descrizione:
// Partendo dal markup in allegato, rifare lo slider usando Vuejs.
// Bonus:
// 1- al click su una thumb, visualizzare in grande l'immagine corrispondente
// 2- applicare l'autoplay allo slider: ogni 3 secondi, cambia immagine automaticamente
// 3- quando il mouse va in hover sullo slider, bloccare l'autoplay e farlo riprendere quando esce
// Consiglio del giorno:
// - il riciclo spesso va a braccetto con le funzioni! Sapendole sfruttare bene, l'esercizio si riduce a poche righe ;)



var app = new Vue (
    {
        el:'#app',
        data: {
            // creo una variabile flag inizializzata a zero che andrò a posizionare al posto dell'index(HTML)
            currentElementActive: 0,
            slides : [
                {
                    image: '01.jpg',
                    title: 'Svezia',
                    text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.',
                },
                {
                    image: '02.jpg',
                    title: 'Svizzera',
                    text: 'Lorem ipsum.',
                },
                {
                    image: '03.jpg',
                    title: 'Gran Bretagna',
                    text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
                },
                {
                    image: '04.jpg',
                    title: 'Germania',
                    text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam.',
                },
                {
                    image: '05.jpg',
                    title: 'Paradise',
                    text: 'Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis.',
                }
            ],

            
           
        },
        methods:{

            nextPhoto (){

                if(this.currentElementActive < this.slides.length -1 ){
                    this.currentElementActive++
                }else{
                    this.currentElementActive = 0
                }
                
            },
            previusPhoto(){
                if(this.currentElementActive > 0){
                    this.currentElementActive--
                }else{
                    this.currentElementActive =  this.slides.length - 1
                }

            },
            thumbCurrentElement(indexElement){
                this.currentElementActive = index
            }

            
        }

    }   
)


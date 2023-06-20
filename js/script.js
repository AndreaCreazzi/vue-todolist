// controllo Vue
console.log(`Vue OK` , Vue)

// Installo Vue
const { createApp } = Vue

// Vue
const app = createApp({
    data() {
      return {
        newTask : "",
        // lista di cose da fare (array object)
        lists : [
            { id:1, text: "Fare una passeggiata nel parco", done: false },
            { id:2, text: "Leggere un libro interessante", done: false },
            { id:3, text: "Fare esercizio fisico", done: false },
            { id:4, text: "Scrivere nel diario", done: false },
            { id:5, text: "Preparare una cena speciale", done: false },
            { id:6, text: "Organizzare lo spazio di lavoro", done: false },
            { id:7, text: "Imparare una nuova abilità", done: false },
            { id:8, text: "Fare volontariato in un'organizzazione locale", done: false },
            { id:9, text: "Visitare un museo o una mostra d'arte", done: false },
            { id:10, text: "Passare del tempo con gli amici", done: false }
        ]
      }
    },
    methods: {
        removeTask(){
          // this.lists.filter(list => list.id !== newId)
        return this.lists.splice()
        },
        addTask(){
          const task = {text : this.newTask, done : false};
          this.lists.push(task)
        }
    }
  })
  
// Stampa Vue
  app.mount('#root');
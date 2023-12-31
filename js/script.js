// controllo Vue
console.log(`Vue OK` , Vue)

// Installo Vue
const { createApp } = Vue

// Vue
const app = createApp({
    data() {
      return {
        // collegamento new task (v-model)
        newTask : "",
        // collegamento filterBy (v-model)
        filterBy : "",
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
    computed: {
      taskFilter(){
        const filt = this.filterBy.toLowerCase();
        return this.lists.filter((list) => list.text.toLowerCase().includes(filt));
      },
      nextId(){
        let highId = 0;
        this.lists.forEach((list) => {
          if(list.id > highId) highId = list.id;
          return highId++;
        });
      }
    },
    methods: {
      // metodo per rimuovere le task
        removeTask(newId){
         this.lists= this.lists.filter(list => list.id !== newId);
        },
        // metodo per aggiungere le task
        addTask(){
          if(!this.newTask.length) return ;
          const task = {id : this.nextId, text : this.newTask, done : false};
          this.taskFilter.push(task);
          this.newTask = "";
        }
    }
  })
  
// Stampa Vue
  app.mount('#root');
  



function registerTask(){

}

class task{
    constructor (titulo,areaTarefa,dataFinalTask,descricao){
        this.titulo=titulo;
        this.areaTarefa=areaTarefa;
        this.dataFinalTask=dataFinalTask;
        this.descricao=descricao;
    }
   

}
class Database{



}

function createTask(){
   
    let titulo = document.getElementById('titulo-tarefa').value;

    const tasks =new task (titulo,null,null,null);
    localStorage.setItem(JSON.stringify(task,'0'));
}

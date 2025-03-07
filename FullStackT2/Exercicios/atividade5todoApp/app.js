// Definição da classe Task
class Task {
    constructor(titulo, areaTarefa, dataFinalTask, descricao) {
        this.titulo = titulo;
        this.areaTarefa = areaTarefa;
        this.dataFinalTask = dataFinalTask;
        this.descricao = descricao;
    }
}

// Função chamada quando a tarefa é registrada
function registerTask() {
    const titulo = document.getElementById('titulo-tarefa').value;
    const areaTarefa = document.getElementById('area-tarefa').value;
    const dataFinalTask = document.getElementById('data').value;
    const descricao = document.getElementById('message-text').value;

    // Cria um objeto de tarefa com os dados do formulário
    const taskObj = new Task(titulo, areaTarefa, dataFinalTask, descricao);
    
  
    saveTask(taskObj);

 
    const modal = bootstrap.Modal.getInstance(document.getElementById('exampleModal'));
    modal.hide();

    // Limpa o formulário
    clearForm();

    // Atualiza a tabela
    displayTasks();
}


// Função para limpar o formulário após adicionar a tarefa
function clearForm() {
    document.getElementById('titulo-tarefa').value = '';
    document.getElementById('area-tarefa').value = '';
    document.getElementById('data').value = '';
    document.getElementById('message-text').value = '';
}

// Função chamada ao abrir o modal para criar uma nova tarefa
function openCreateModal() {
    // Limpa o formulário ao abrir o modal para criar uma nova tarefa
    clearForm();

    // Altera a função do botão "Criar" para adicionar uma nova tarefa
    const saveButton = document.querySelector('.btn-success');
    saveButton.onclick = function () {
        registerTask(); // Registra a tarefa
    }
}

// Função chamada quando a tarefa é salva no localStorage
function saveTask(task) {
    let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    
    // Adiciona a nova tarefa ao array
    tasks.push(task);

    // Salva as tarefas atualizadas no localStorage
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

function displayTasks() {
    const tasksTable = document.querySelector('tbody');
    
    // Limpa a tabela antes de adicionar as novas tarefas
    tasksTable.innerHTML = '';

    // Recupera as tarefas do localStorage
    let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

    // Itera sobre as tarefas e cria linhas na tabela
    tasks.forEach((task, index) => {
        switch(task.areaTarefa){
            case '1': task.areaTarefa = 'Saude'; break;
            case '2': task.areaTarefa = 'Educação'; break;
            case '3': task.areaTarefa = 'Esportes'; break;
            case '4': task.areaTarefa = 'Finanças'; break;
            case '5': task.areaTarefa = 'Viagens'; break;
            case '6': task.areaTarefa = 'Outros'; break;
            default: console.error('Ocorreu um erro');
        }

        const row = document.createElement('tr');

        row.style.cssText = `
            display:flex;
            justify-content:space-around;
            align-items:center;
            background: linear-gradient(90deg, rgb(172, 60, 60) 0%, rgb(0, 140, 255) 63%);
            border: solid 0.5px black;
            color: white;
            text-align: center;
            padding:0.2rem;
        `;
        
        row.innerHTML = `
            <td>${task.titulo}</td>
            <td>${task.areaTarefa}</td>
            <td>${task.dataFinalTask}</td>
            <td class="max-descr">${task.descricao}</td>

            <td>
                <button class= "btn btn-primary"  onclick="editTask(${index})" 
                style="width:5rem; height:2rem;  
                justify-content:space-around; 
                align-items:center; ">
                Editar </button>

                <button class= "btn btn-danger" 
                style="width:5rem; height:2rem;
                justify-content:center;
                align-items:center;"
                onclick="deleteTask(${index})" style="width:3.5rem; height:2rem;">Deletar</button>
            </td>
        `;
        tasksTable.appendChild(row);
    });
}

// Função para editar a tarefa
function editTask(taskIndex) {
    let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

    const task = tasks[taskIndex];

    // Preenche o formulário com os dados da tarefa
    document.getElementById('titulo-tarefa').value = task.titulo;
    document.getElementById('area-tarefa').value = task.areaTarefa;
    document.getElementById('data').value = task.dataFinalTask;
    document.getElementById('message-text').value = task.descricao;

    // Exibe o modal de edição
    const modal = new bootstrap.Modal(document.getElementById('exampleModal'));
    modal.show();

    // Atualiza a tarefa após o formulário ser enviado novamente
    const saveButton = document.querySelector('.btn-success');
    saveButton.onclick = function () {
        task.titulo = document.getElementById('titulo-tarefa').value;
        task.areaTarefa = document.getElementById('area-tarefa').value;
        task.dataFinalTask = document.getElementById('data').value;
        task.descricao = document.getElementById('message-text').value;

        // Atualiza o localStorage com a tarefa modificada
        tasks[taskIndex] = task;
        localStorage.setItem('tasks', JSON.stringify(tasks));

        // Fecha o modal e atualiza a tabela
        modal.hide();
        displayTasks();
    };
}

// Função para deletar a tarefa
function deleteTask(taskIndex) {
    let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

    // Remove a tarefa do array
    tasks.splice(taskIndex, 1);

    // Atualiza o localStorage após a remoção
    localStorage.setItem('tasks', JSON.stringify(tasks));

    // Atualiza a tabela
    displayTasks();
}

// Chama a função para abrir o modal de criação
document.getElementById('createList').addEventListener('click', openCreateModal);

// Carrega as tarefas ao abrir a página
window.onload = displayTasks;

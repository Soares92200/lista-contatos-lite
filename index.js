const contatoController = new ContatoController();

function salvar(event) {
    // evita o recarregamento da página
    if (event) event.preventDefault();
    
    //const contato = new Contato(); 

    // pega o formulário
    form = document.getElementById("form-contato-create");
    
    nome = form.elements["name"].value;
    email = form.elements["email"].value;
    telefone = form.elements["telefone"].value;

    const contato = new Contato();

    contato.setNome(nome);
    contato.setEmail(email);
    contato.setTelefone(telefone);
    
   
    contatoController.salvarContato(contato);
}

contatoController.carregar();


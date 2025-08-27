class ContatoController {
    
    carregar() {
        // ler objeto
        const contatoSalvo = JSON.parse(localStorage.getItem("contatos"));

        if (contatoSalvo) {
            const container = document.getElementById("contato");

            container.innerHTML = "";

            contatoSalvo.forEach((element, index) => {

                const contatoDiv = document.createElement("p");
                contatoDiv.textContent =
                    `Nome: ${element.nome} | Email: ${element.email} | Telefone: ${element.telefone}`;


                const botaoExcluir = document.createElement("button");
                botaoExcluir.textContent = "Excluir";
                botaoExcluir.style.marginLeft = "10px";

                // Evento do botão
                botaoExcluir.addEventListener("click", () => {
                    this.excluirContato(index);
                });

                // Adiciona botão ao parágrafo
                contatoDiv.appendChild(botaoExcluir);
                


                container.appendChild(contatoDiv);

                
            });
            
        }

    }

    salvarContato(contato) {
         
        // Pega os contatos já salvos (ou cria lista vazia)
        let contatos = JSON.parse(localStorage.getItem("contatos")) || [];

        // Exemplo: atualizar conteúdo de um elemento
        //document.getElementById("contato").innerText =
        //    `Nome: ${nome} | Email: ${email} | Telefone: ${telefone}`;

        //const contato = {
        //    nome: nome,
        //    email: email,
        //    telefone: telefone
        //};

        contatos.push({
            nome: contato.getNome(),
            email: contato.getEmail(),
            telefone: contato.getTelefone()
        });
        
        localStorage.setItem("contatos", JSON.stringify(contatos));

        this.carregar();
    }


    excluirContato(indice) {
        let contatos = JSON.parse(localStorage.getItem("contatos")) || [];

        // Remove pelo índice
        contatos.splice(indice, 1);

        // Salva de volta
        localStorage.setItem("contatos", JSON.stringify(contatos));

        // Recarrega a lista
        this.carregar();
    }

}
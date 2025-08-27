class Contato {
    #nome;
    #email;
    #telefone;

    constructor(nome, email, tel) {
        this.#nome = nome;
        this.#email = email;
        this.#telefone = telefone;
    }

    // Getters
    getNome() {
        return this.#nome;
    }

    getEmail() {
        return this.#email;
    }

    getTelefone() {
        return this.#telefone;
    }

    // Setters
    setNome(novoNome) {
        this.#nome = novoNome;
    }

    setEmail(novoEmail) {
        this.#email = novoEmail;
    }

    setTelefone(novoTelefone) {
        this.#telefone = novoTelefone;
    }
}
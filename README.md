# 📒 Lista de Contatos Lite

Uma aplicação web simples para cadastro e listagem de contatos (nome, e-mail e telefone), utilizando **JavaScript, classes com getters/setters e localStorage** para persistência.  

## 🎯 Objetivo
Criar uma página web simples que permita:
- Cadastrar contatos via formulário.  
- Listar contatos em uma tabela/área de exibição.  
- Excluir contatos individualmente.  
- Salvar e carregar contatos no `localStorage` em formato JSON.  

## 🛠️ Funcionalidades
- ✅ Cadastro de contato (nome, e-mail e telefone).  
- ✅ Listagem dinâmica de contatos cadastrados.  
- ✅ Exclusão de contato (com botão "Excluir").  
- ✅ Persistência local usando `localStorage`.  
- ⚡ Validações básicas (nome não vazio, e-mail contendo `@`, telefone apenas números).  
- 🔄 Carregamento automático dos contatos salvos ao abrir a página.  

> ✨ Extra: a edição de contato é opcional e pode ser implementada como melhoria futura.

## 📂 Estrutura de Pastas
```
/lista-contatos-lite
│── index.html        # Estrutura da página
│── index.js          # Função salvar() e integração com o controller
│
├── /js
│   ├── app.js        # ContatoController (eventos, fluxo e funções)
│   └── contato.js    # Classe Contato com getters e setters
│
└── /css
    └── style.css     # Estilo básico (opcional)
```

## 🚀 Como Executar
1. Clone este repositório:
   ```bash
   git clone https://github.com/seu-usuario/lista-contatos-lite.git
   ```
2. Abra o arquivo `index.html` em qualquer navegador moderno.  
3. Cadastre novos contatos preenchendo o formulário e clicando em **Salvar**.  
4. Os contatos ficarão armazenados localmente no navegador.  

## 📸 Demonstração
🎥 Assista à demonstração no YouTube: [Lista de Contatos Lite - UFCA](https://youtu.be/DBa1fOFGRnY)  
  
## 🏫 Universidade
Este projeto foi desenvolvido como atividade acadêmica na **Universidade Federal do Cariri (UFCA)**.  

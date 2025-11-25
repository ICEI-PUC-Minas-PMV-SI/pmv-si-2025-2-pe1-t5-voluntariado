# Programação de Funcionalidades

## Requisitos Atendidos

As tabelas que se seguem apresentam os requisitos funcionais e não-funcionais que relacionam o escopo do projeto com os artefatos criados:

### Requisitos Funcionais

|ID    | Descrição do Requisito |  Artefato Criado |
| ---------------------------- | --------------------------------------- | --------------------------------------------------- | 
|RF-001| Permitir cadastro de voluntários com informações básicas (nome, e-mail telefone). | cadastro-vol.html |
|RF-002| Permitir cadastro de instituições/ONGs com informações básicas (nome, área de atuação, contato). |   cadastro-ong.html |
|RF-003| Exibir lista de oportunidades cadastradas pelas instituições |   vagas.html |
|RF-004| Permitir que voluntários se inscrevam em oportunidades |   vagas.html  |
|RF-005| Exibir informações do perfil do usuário (voluntário ou instituição) |   dashboard-voluntario.html / dashboard-ong.html |
|RF-006| Permitir que o voluntário pesquise oportunidades por palavra-chave  | vagas.html |


### Requisitos Não Funcionais

|ID	|Descrição|	Atendido|Como|
| ---------------------------- | --------------------------------------- | --------------------------------------------------- | ------------------------------------------------- |
|RNF-01| A plataforma deve ser responsiva e funcionar em dispositivos móveis.|	✔|	CSS responsivo|
|RNF-02| A interface deve ser intuitiva, com navegação simples para diferentes perfis de usuários.|	✔|	Layout simplificado|
|RNF-03| O sistema deve estar disponível online, com acesso 24/7|	✔|	Arquivos estáticos|
|RNF-04| Disponibilizar um campo de login e senha para acesso de voluntários e instituições.|	✔|	login.js + LocalStorage|


## Descrição das estruturas:

## Login
|  Nome      | Tipo          | Descrição                             | Exemplo                                   |
| ---------------------------- | --------------------------------------- | --------------------------------------------------- | ------------------------------------------------- |
| login.html     | Formulário de autenticação  | Tela para login de voluntários e instituições        |                                             |
| Email          | Texto             | E-mail cadastrado                | voluntario@email.com                                         |
| Senha       | Texto (senha)        | Senha do usuário para acesso ao sistema| ******** |
| Botão "Entrar"  | Botão  | Realiza tentativa de login | —         |
|Link "Criar conta" | Link|Redireciona para escolha de cadastro | cadastro-vol.html / cadastro-ong.html|


## Cadastro de Voluntário
| Nome                         | Tipo                                    | Descrição                                           | Exemplo                                           |
| ---------------------------- | --------------------------------------- | --------------------------------------------------- | ------------------------------------------------- |
| cadastro-vol.html | Formulário | Cadastro básico do voluntário                 | —                                                 |
| Nome                         | Texto                                   | Nome do voluntário                            | João Silva                                    |
| E-mail                       | Texto                                   | E-mail do voluntário                                   | joaosilva@email.com |
| Celular                      | Texto                                   | Contato do voluntário                        |(34) 98888-0000                                  |
| Botão "Cadastrar"               | Botão                                   | Finaliza o cadastro    | —                                                 |


## Cadastro ONG
| Nome                         | Tipo                                    | Descrição                                           | Exemplo                                           |
| ---------------------------- | --------------------------------------- | --------------------------------------------------- | ------------------------------------------------- |
| cadastro-ong.html | Formulário |Cadastro de instituição/ONG                 | —                                                 |
| Nome da ONG                        | Texto                                   | Nome da instituição                            | Ajudar Mais                                    |
| E-mail                       | Texto                                   | E-mail da ONG                                   | ong@email.com |
| Botão "Cadastrar"               | Botão                                   | Finaliza o cadastro    | —                                                 |


## Vagas / Oportunidades
| Nome                         | Tipo                                    | Descrição                                           | Exemplo                                           |
| ---------------------------- | --------------------------------------- | --------------------------------------------------- | ------------------------------------------------- |
| vagas.html | Lista / Catálogo | Exibe vagas cadastradas por ONGs                | —                                                 |
| Campo de busca                     | Texto                                   | Pesquisa vagas por palavra-chave                            | “educação”                                    |
| Botão "Quero me candidatar"              | Botão                                   | Inscreve o voluntário    | —       


## Dashboard do Voluntário
| Nome                         | Tipo                                    | Descrição                                           | Exemplo                                           |
| ---------------------------- | --------------------------------------- | --------------------------------------------------- | ------------------------------------------------- |
| dashboard-voluntario.html |Painel | Informações do voluntário               | —                                                 |
|Nome                   | Texto                                   | Nome do usuário                            | João Silva                                    |
| Oportunidades inscritas             |Lista                                  | Vagas que o usuário escolheu   | —    



## Dashboard da ONG
| Nome                         | Tipo                                    | Descrição                                           | Exemplo                                           |
| ---------------------------- | --------------------------------------- | --------------------------------------------------- | ------------------------------------------------- |
| dashboard-ong.html |Painel | Cadastrar Vagas              | —                                                 |
|Instuiçãp                  | Texto                                   | Nome da Instituição                     | Ajudar Mais                                    |
| Senha       | Texto (senha)        | Senha da ONG para acesso ao sistema| ******** |
| Título da Vaga                      | Texto                                   |      Nome da oportunidade                              | Ajudante de oficina |
| Local                  | Texto                                   | Cidade da ONG                                  | Uberlândia-MG                                   |
| Área           |Texto                     | Segmento de trabalho              | Educação                                            |
| Tempo necessário          |Texto                     | tempo da vaga              | 1 vez por semana                                           |
| Botão “Cadastrar Vaga”               | Botão                                   | Redireciona para cadastro de vaga    | cadastro-vagas.htm|  


## Sobre
| Nome                         | Tipo                                    | Descrição                                           | Exemplo                                           |
| ---------------------------- | --------------------------------------- | --------------------------------------------------- | ------------------------------------------------- |
|sobre.html               | Página informativa                                 | Explica o objetivo da plataforma                     |     —                                |

# Programação de Funcionalidades

https://github.com/ICEI-PUC-Minas-PMV-SI/pmv-si-2025-2-pe1-t5-voluntariado/tree/main/src

## Requisitos Atendidos

As tabelas que se seguem apresentam os requisitos funcionais e não-funcionais que relacionam o escopo do projeto com os artefatos criados:

### Requisitos Funcionais

|ID    | Descrição do Requisito | Responsável | Artefato Criado |
|------|------------------------|------------|-----------------|
|RF-01| Permitir cadastro de voluntários com informações básicas (nome, e-mail, telefone). | Ramon e Felipe | cadastro.html |
|RF-02| Permitir cadastro de instituições/ONGs com informações básicas (nome, área de atuação, contato). | Letícia | cadastro-ong.html |
|RF-03| Exibir uma lista de oportunidades cadastradas pelas instituições. | Eli e Sarah | vagas.html |
|RF-04| Permitir que voluntários se inscrevam em oportunidades. | Eli e Sarah | ong2.html |
|RF-05| Exibir informações do perfil do voluntário. | Eli | dashboard-voluntario.html |
|RF-06| Exibir informações do perfil da instituição. | Yone | dashboard-ong.html |
|RF-06| Permitir que o voluntário pesquise oportunidades por palavras chave. | Sarah e Eli | vagas.html |

## Descrição das estruturas:

## Login
|  **Nome**      | **Tipo**          | **Descrição**                             | **Exemplo**                                    |
|:--------------:|-------------------|-------------------------------------------|------------------------------------------------|
| Conteúdo             | E-mail  | E-mail do usuário            | exemplo@gmail.com                                              |
| Id do usuário         | Numero (Inteiro)             | Cadastro de senha                         | ****** (secreto)                                   |
| Conteúdo       | Texto             | Conteúdo da notícia                       | Sistemas de Informação da PUC Minas é eleito o melhor curso do Brasil                            |
| Id do usuário  | Numero (Inteiro)  | Identificador do usuário autor da notícia | 1                                              |

|    **Nome**   | **Tipo**         | **Descrição**                                   | **Exemplo**                                       |
| :-----------: | :--------------- | :---------------------------------------------- | :------------------------------------------------ |
|       Id      | Número (Inteiro) | Identificador do usuário                        | 1                                                 |
|      Tipo     | Texto            | Tipo de usuário (`voluntário` ou `instituição`) | instituição                                       |
|    Usuário    | Texto            | Nome de login do usuário                        | @ongverde                                         |
|    Conteúdo   | E-mail           | E-mail do usuário                               | verdevida@gmail.com |
| Id do usuário | Texto (secreto)  | Senha do usuário                                | ****** (secreto)                                  |

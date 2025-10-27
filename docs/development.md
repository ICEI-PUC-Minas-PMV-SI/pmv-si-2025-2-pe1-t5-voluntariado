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
|    **Nome**   | **Tipo**         | **Descrição**                                   | **Exemplo**                                       |
| :-----------: | :--------------- | :---------------------------------------------- | :------------------------------------------------ |
|       Id      | Número (Inteiro) | Identificador do usuário                        | 1                                                 |
|      Tipo     | Texto            | Tipo de usuário (`voluntário` ou `instituição`) | instituição                                       |
|    Conteúdo   | E-mail           | E-mail do usuário                               | verdevida@email.com |
| Id do usuário | Texto (secreto)  | Senha do usuário                                | ****** (secreto)                                  |

## Cadastro de Voluntário
|      **Nome**      | **Tipo**               | **Descrição**                    | **Exemplo**                             |
| :----------------: | :--------------------- | :------------------------------- | :-------------------------------------- |
|         Id         | Número (Inteiro)       | Identificador do voluntário      | 101                                     |
|        Nome        | Texto                  | Nome completo do voluntário      | João Ribeiro                            |
|      Conteúdo      | E-mail                 | E-mail de contato                | joao@email.com |
| Data de Nascimento | Texto (Data)           | Data de nascimento do voluntário | 15/03/2002                              |
|    Id do usuário   | Texto (secreto)        | Senha cadastrada pelo usuário    | ****** (secreto)                        |

## Cadastro de Instituição (ONG)
|     **Nome**    | **Tipo**         | **Descrição**                | **Exemplo**                                       |
| :-------------: | :--------------- | :--------------------------- | :------------------------------------------------ |
|        Id       | Número (Inteiro) | Identificador da instituição | 1                                                 |
|       Nome      | Texto            | Nome da ONG                  | ONG Verde Vida                                    |
| Área de Atuação | Texto            | Área em que a ONG atua       | Sustentabilidade                                  |
|     Conteúdo    | E-mail           | E-mail de contato da ONG     | verdevida@email.com |     
|    Id do usuário  | Texto (secreto)        | Senha cadastrada pelo usuário    | ****** (secreto)                     |
## Vagas
|      **Nome**     | **Tipo**         | **Descrição**                                   | **Exemplo**                          |
| :---------------: | :--------------- | :---------------------------------------------- | :----------------------------------- |
|         Id        | Número (Inteiro) | Identificador da vaga                           | 10                                   |
| Id da Instituição | Número (Inteiro) | ID da ONG que criou a vaga                      | 1                                    |
|       Título      | Texto            | Título da oportunidade de voluntariado          | Professor de Reforço Escolar         |
|     Descrição     | Texto            | Detalhes da vaga e das atividades do voluntário | Apoio a alunos do ensino fundamental |
|       Local       | Texto            | Local onde será realizada a atividade           | São Paulo (SP)                       |
|       Tempo       | Texto            | Duração ou carga horária da vaga                | 6h semanais                          |
|        Área       | Texto            | Área de atuação                                 | Educação                             |
|       Ativo       | Booleano         | Indica se a vaga está ativa ou não              | true                                 |
|        Requisitos       | Texto            | Quem pode se inscrever na vaga                                | Maiores de 16 anos                             |
|        Benefícios       | Texto            | O que o voluntariado pode ganhar ao participar                                 | Certificado                             |




# Testes de Software

Este documento apresenta os testes executados no sistema Conecta Voluntários com o objetivo de verificar a correta implementação dos requisitos funcionais e não funcionais definidos na fase de planejamento.



## Plano de Testes de Software

A seguir estão descritos os casos de teste aplicados conforme os requisitos funcionais do sistema.

---

###  CT01 – Cadastro de Voluntário

| Item | Detalhes |
|------|---------|
| **Procedimentos** | 1. Acessar a tela de cadastro<br>2. Informar nome, e-mail, telefone e senha<br>3. Clicar em “Cadastrar” |
| **Requisito associado** | RF-01 |
| **Resultado esperado** | Voluntário cadastrado com sucesso no LocalStorage |
| **Dados de entrada** | Nome, e-mail, telefone, senha |
| **Resultado obtido** | Conforme esperado |
| **Status** | Sucesso |

---

###  CT02 – Login de Voluntário

| Item | Detalhes |
|------|---------|
| **Procedimentos** | 1. Acessar tela de Login<br>2. Informar e-mail e senha cadastrados<br>3. Clicar em “Entrar” |
| **Requisito associado** | RF-04 |
| **Resultado esperado** | Usuário autenticado e direcionado ao Dashboard |
| **Dados de entrada** | E-mail e senha válidos |
| **Resultado obtido** | Conforme esperado |
| **Status** | Sucesso |

---

### CT03 – Listagem de Vagas

| Item | Detalhes |
|------|---------|
| **Procedimentos** | 1. Acessar Dashboard<br>2. Selecionar “Ver Vagas” |
| **Requisito associado** | RF-03 |
| **Resultado esperado** | Exibir lista de vagas cadastradas |
| **Resultado obtido** | Lista exibida corretamente |
| **Status** | Sucesso |

---

### CT04 – Inscrição em Vaga

| Item | Detalhes |
|------|---------|
| **Procedimentos** | 1. Selecionar vaga da lista<br>2. Clicar em “Inscrever-se” |
| **Requisito associado** | RF-04 |
| **Resultado esperado** | Inscrição registrada no LocalStorage |
| **Resultado obtido** | Inscrição realizada com sucesso |
| **Status** | Sucesso |

---

### CT05 – Visualização de Perfil

| Item | Detalhes |
|------|---------|
| **Procedimentos** | 1. Acessar Dashboard<br>2. Clicar em “Meu Perfil” |
| **Requisito associado** | RF-05 |
| **Resultado esperado** | Exibição dos dados cadastrados do usuário |
| **Resultado obtido** | Conforme esperado |
| **Status** | Sucesso |

---

## Registro dos Testes de Software

| Caso Testado | Resultado Obtido | Estado Final |
|-------------|----------------|--------------|
| CT01 | Conforme esperado | Aprovado |
| CT02 | Conforme esperado | Aprovado |
| CT03 | Conforme esperado | Aprovado |
| CT04 | Conforme esperado | Aprovado |
| CT05 | Conforme esperado | Aprovado |

---

# Testes de Usabilidade

O teste teve como objetivo avaliar a facilidade de uso do sistema pelos voluntários.  
Foram analisadas fluidez, clareza, acessibilidade e satisfação geral.

Participantes: **5 usuários** voluntários  
Cenários avaliados: **Login**, **Cadastro**, **Buscar Vagas**, **Se Candidatar** e **Perfil**

---

## Cenários de Teste de Usabilidade

| Nº | Cenário | Descrição |
|---|---------|----------|
| 1 | Cadastro | Preencher todos os dados corretamente e cadastrar usuário |
| 2 | Login | Acesso ao sistema com conta válida |
| 3 | Buscar vagas | Navegação pela lista de vagas disponíveis |
| 4 | Inscrever-se em vaga | Clique em oportunidade e confirmação da inscrição |
| 5 | Acessar perfil | Consultar informações pessoais |

---

## Registro dos Testes de Usabilidade

> Escala de satisfação: 1 (muito ruim) a 5 (excelente)  
> Tempo medido em segundos

### Cenário 1 — Cadastro

| Usuário | Satisfação | Tempo (s) |
|--------|------------|----------|
| 1 | 5 | 30 |
| 2 | 4 | 33 |
| 3 | 5 | 28 |
| 4 | 4 | 32 |
| 5 | 5 | 27 |
| **Média** | **4,6** | **30s** |

---

### Cenário 2 — Login

| Usuário | Satisfação | Tempo (s) |
|--------|------------|----------|
| 1 | 5 | 12 |
| 2 | 4 | 10 |
| 3 | 5 | 9 |
| 4 | 5 | 14 |
| 5 | 4 | 11 |
| **Média** | **4,6** | **11s** |

---

### Cenário 3 — Buscar Vagas

| Usuário | Satisfação | Tempo (s) |
|--------|------------|----------|
| 1 | 5 | 20 |
| 2 | 4 | 18 |
| 3 | 5 | 21 |
| 4 | 4 | 23 |
| 5 | 5 | 19 |
| **Média** | **4,6** | **20s** |

---

### Cenário 4 — Inscrever-se na Vaga

| Usuário | Satisfação | Tempo (s) |
|--------|------------|----------|
| 1 | 5 | 18 |
| 2 | 4 | 16 |
| 3 | 5 | 14 |
| 4 | 4 | 17 |
| 5 | 5 | 15 |
| **Média** | **4,6** | **16s** |

---

### Cenário 5 — Perfil do Usuário

| Usuário | Satisfação | Tempo (s) |
|--------|------------|----------|
| 1 | 5 | 10 |
| 2 | 4 | 12 |
| 3 | 5 | 9 |
| 4 | 5 | 11 |
| 5 | 4 | 10 |
| **Média** | **4,6** | **10s** |

---

## Avaliação Final dos Testes de Usabilidade

Os resultados demonstram que:

✔ O sistema é **intuitivo e fácil de usar**  
✔ O tempo médio de execução das tarefas é **rápido**  
✔ Usuários apresentaram **alta satisfação geral**  
✔ Todos completaram os cenários sem erro

> O sistema **Conecta Voluntários** atende aos requisitos de usabilidade exigidos e é adequado ao público-alvo.

---

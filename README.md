# Projeto de Automação de Testes Web com Cypress

[![E2E Cypress Tests](https://github.com/rafacalandreli/pgats-desafio-web-automation/actions/workflows/main.yml/badge.svg?branch=main)](https://github.com/rafacalandreli/pgats-desafio-web-automation/actions/workflows/main.yml)

Este projeto consiste na automação de testes End-to-End para a aplicação web [Automation Exercise](https://automationexercise.com/), como parte do Trabalho de Conclusão da disciplina de Automação de Testes Web.

O framework foi desenvolvido utilizando Cypress e segue as melhores práticas de mercado para garantir que os testes sejam robustos, manuteníveis e escaláveis.

---

## 🚀 Tecnologias Utilizadas

- **[Cypress](https://www.cypress.io/):** Framework principal para a automação dos testes E2E.
- **[Node.js](https://nodejs.org/):** Ambiente de execução para o Cypress e suas dependências.
- **[Allure Framework](https://qameta.io/allure-framework/):** Ferramenta para a geração de relatórios de teste detalhados e interativos.
- **[GitHub Actions](https://github.com/features/actions):** Plataforma de CI/CD para execução automática dos testes a cada alteração no código.
- **[Faker.js](https://fakerjs.dev/):** Biblioteca para geração de massa de dados dinâmica, garantindo a independência e robustez dos testes.

---

## 🏗️ Arquitetura e Estrutura do Projeto

O projeto foi estruturado com base em padrões de design consolidados para garantir a separação de responsabilidades e facilitar a manutenção:

- `cypress/pages/`: Contém a implementação do **Page Object Model (POM)**.
  - `pom/`: Classes que representam as páginas da aplicação e encapsulam as ações do usuário (ex: `LoginPage.js`).
  - `asserts/`: Classes dedicadas exclusivamente às validações e asserções, desacoplando-as das ações.
- `cypress/api/`: Camada de serviços responsável por encapsular todas as interações diretas com a API da aplicação, utilizada para otimizar o setup dos testes.
- `cypress/support/`: Arquivos de configuração e comandos customizados do Cypress. O `commands.js` centraliza fluxos de trabalho reutilizáveis.
- `cypress/business/`: Contém a lógica de negócio e dados desacoplados dos testes.
  - `factories/`: Funções para criar objetos de dados dinâmicos (ex: `userFactory.js`).
  - `constantes/`: Centraliza dados estáticos como seletores e mensagens, facilitando a manutenção.
- `cypress/e2e/`: Os arquivos de teste (`specs`), escritos de forma clara e objetiva.

O fluxo de um teste normalmente se inicia em um arquivo de `e2e`, que orquestra as ações. As interações com a interface são delegadas aos `Page Objects` (em `pages/pom/`), enquanto os dados de teste são gerados pelas `factories` (em `business/factories/`). Ao final do fluxo, as `asserts` (em `pages/asserts/`) são chamadas para validar o estado da aplicação, garantindo um teste limpo e com responsabilidades bem definidas.

---

## ⚙️ Pré-requisitos

Para executar o projeto localmente, você precisará ter instalado:

- [Node.js](https://nodejs.org/en/download/) (versão 20.x ou superior recomendada)
- [npm](https://www.npmjs.com/get-npm) (geralmente instalado com o Node.js)

---

## ⚡ Como Executar

1.  **Clone o repositório:**
    ```bash
    git clone <url-do-repositorio>
    cd <nome-do-repositorio>
    ```

2.  **Instale as dependências:**
    ```bash
    npm install
    ```

3.  **Execute os testes:**

    - **Para abrir a interface interativa do Cypress:**
      ```bash
      npm run test:open
      ```

    - **Para rodar todos os testes em modo headless (como no CI):**
      ```bash
      npm test
      ```

4.  **Gere e visualize os relatórios:**
    ```bash
    # Gera o relatório Allure
    npm run report:generate

    # Abre o relatório gerado no seu navegador
    npm run report:open
    ```

---

## 🔄 Execução em CI/CD com GitHub Actions

O projeto está configurado para rodar automaticamente no GitHub Actions a cada `push` ou `pull request` para a branch `main`. Ao final de cada execução, o relatório Allure é gerado e disponibilizado como um artefato, que pode ser baixado na página da "Action" para análise.

---

## ✅ Casos de Teste Automatizados

Este projeto implementa os seguintes casos de teste, conforme descrito na página "Test Cases" da aplicação:

- **Test Case 1:** Register User
- **Test Case 2:** Login User with correct email and password
- **Test Case 3:** Login User with incorrect email and password
- **Test Case 4:** Logout User
- **Test Case 5:** Register User with existing email
- **Test Case 6:** Contact Us Form
- **Test Case 7:** Verify Test Cases Page
- **Test Case 8:** Verify All Products and product detail page
- **Test Case 9:** Search Product
- **Test Case 10:** Verify Subscription in home page
- **Test Case 15:** Place Order: Register and Checkout

---

## 🎓 Decisões de Arquitetura e Boas Práticas

- **Estratégia de Seletores:** Devido à restrição de não poder alterar o código-fonte da aplicação, não foi possível utilizar a estratégia ideal de `data-cy`. Em vez disso, a automação foi construída com a **melhor estratégia possível dadas as limitações**, priorizando atributos `[data-qa]` e `id` sempre que disponíveis, e isolando os seletores mais frágeis em um arquivo de constantes para facilitar a manutenção.
- **Testes Híbridos:** Para otimizar a velocidade e a estabilidade, o projeto utiliza uma abordagem híbrida. O estado da aplicação (ex: criação de usuário) é manipulado via API, enquanto o comportamento focado no usuário é validado via UI.
- **Código Limpo e Documentado:** Todos os métodos de suporte foram documentados com JSDoc para clareza, e os arquivos de teste foram mantidos limpos de comentários para que a estrutura BDD sirva como documentação.

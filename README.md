# DesafioOnfly QA

# Desafio de Testes Automatizados com Playwright

Este repositório contém a solução para o desafio de automação de testes utilizando **Playwright**.  
O objetivo é validar fluxos principais de navegação e compra no site [Kabum](https://www.kabum.com.br), garantindo que funcionalidades críticas estejam funcionando corretamente.

## 🎯 Objetivo do Desafio
- Demonstrar conhecimento em automação de testes end-to-end.
- Validar cenários reais de um e-commerce..

## 📂 Estrutura dos Testes
Os testes cobrem os seguintes cenários:
- **Home**: valida carregamento inicial.
- **Busca com resultado**: pesquisa por produto existente.
- **Paginação**: Exibir 20 por página 
- **Busca sem resultado**: pesquisa por produto inexistente.
- **Carrinho**: adicionar produto ao carrinho.
- **Menu Mais → Computadores**: navegar pelo menu e validar produtos relacionados.

## 🚀 Como executar
1. Instale as dependências:
   ```bash
   npm install
   npx playwright test --ui
   
   Tecnologias utilizadas:
   Playwright
   JavaScript/TypeScript


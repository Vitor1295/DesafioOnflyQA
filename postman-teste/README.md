# Testes de API - GoRest (Postman)

Este diretório contém a collection do Postman e os resultados da execução dos testes de API realizados como parte do **Desafio Onfly QA**.

## 📂 Conteúdo

- `DesafioOnflyQA.postman_collection.json`  
  Collection exportada do Postman com os endpoints configurados e testes automatizados.

- `results.json`  
  Resultado da execução da collection no **Collection Runner** (status codes e validações).  

##  Endpoints testados

- **GET /users** → Listar usuários  
- **POST /users** → Criar usuário  
- **DELETE /users/{id}** → Deletar usuário  

Todos os requests que exigem autenticação utilizam o **Bearer Token** configurado como variável na Collection ( 49ae16d104cad5a001f54f91f255cbe172cc4a5e735be2a600d16b0397b823a1 )

## ✅ Resultados

Os testes foram executados com sucesso no Postman, validando:
- Status code esperado (`200`, `201`, `204`).  
- Estrutura básica das respostas (JSON).  
- Fluxo completo de CRUD de usuários na API pública GoRest.

**Exemplos e cURL:**

Listar usuários

curl --location 'https://gorest.co.in/public/v2/users' \
--header 'Accept: application/json' \
--header 'Content-Type: application/json' \
--header 'Authorization: Bearer 49ae16d104cad5a001f54f91f255cbe172cc4a5e735be2a600d16b0397b823a1'

Criar usuários

curl --location 'https://gorest.co.in/public/v2/users' \
--header 'Accept: application/json' \
--header 'Content-Type: application/json' \
--header 'Authorization: Bearer 49ae16d104cad5a001f54f91f255cbe172cc4a5e735be2a600d16b0397b823a1' \
--data-raw '{
"name":"Joao Macedo", 
"gender":"male", 
"email":"sorosiv50@dnsclick.com", 
"status":"active"
}'

Deletar usuários

curl --location --request DELETE 'https://gorest.co.in/public/v2/users/8361350' \
--header 'Accept: application/json' \
--header 'Content-Type: application/json' \
--header 'Authorization: Bearer 49ae16d104cad5a001f54f91f255cbe172cc4a5e735be2a600d16b0397b823a1'

## 📎 Entrega

Este diretório serve como evidência da execução dos testes.  
O link para este repositório será enviado como resposta ao e-mail do desafio.

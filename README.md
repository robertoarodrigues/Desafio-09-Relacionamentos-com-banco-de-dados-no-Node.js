## Desafio 09: Relacionamentos com banco de dados no Node.js

### Sobre o desafio

<p>
    Nesse desafio, você vai estar criando uma nova aplicação para aprender novas coisas e treinar o que você aprendeu até agora no Node.js 
    junto ao TypeScript, incluindo o uso de banco de dados com o TypeORM, e relacionamentos ManyToMany!
</p>

<p>
    Essa será uma aplicação que deve permitir a criação de clientes, produtos e pedidos, onde o cliente pode gerar novos pedidos de compra 
    de certos produtos, como um pequeno e-commerce.
</p>

### Rotas da aplicação

* <strong>POST /products:</strong> Essa rota deve receber name, price e quantity dentro do corpo da requisição, sendo o name o nome do 
                                   produto a ser cadastrado, price o valor unitário e quantity a quantidade existente em estoque do produto. 
                                   Com esses dados devem ser criados no banco de dados um novo produto com os seguitnes campos: name, price, 
                                   quantity, created_at, updated_at.
 
 * <strong>POST /orders/:</strong> Nessa rota você deve receber no corpo da requisição o customer_id e um array de products, contendo o 
                                   id e a quantity que você deseja adicionar a um novo pedido. Aqui você deve cadastrar na tabela order 
                                   um novo pedido, que estará relacionado ao customer_id informado, created_at e updated_at . 
                                   Já na tabela orders_products, você deve armazenar o product_id, order_id, price e quantity, 
                                   created_at e updated_at.
                                   
 * <strong>GET /orders/:id:</strong> Essa rota deve retornar as informações de um pedido específico, com todas as informações que 
                                     podem ser recuperadas através dos relacionamentos entre a tabela orders, customers e orders_products
                                  
 ### Específicação dos testes
 
 <p>
    Em cada teste, tem uma breve descrição no que sua aplicação deve cumprir para que o teste passe.
 </p>
 
 ### Antes de rodar os testes, crie um banco de dados com o nome "gostack_desafio09_tests" para que todos os testes possam executar 
     corretamente
     
 * <strong>should be able to create a new customer:</strong> Para que esse teste passe, sua aplicação deve permitir que um cliente seja 
                                                             criado, e retorne um json com o cliente criado.
                                                             
  * <strong>should not be able to create a customer with one e-mail thats already registered:</strong> Para que esse teste passe, sua 
    aplicação deve retornar um erro quando você tentar cadastrar um cliente com um e-mail que já esteja cadastrado no banco de dados.
    
  * <strong>should be able to create a new product:</strong> Para que esse teste passe, sua aplicação deve permitir que um produto seja 
    criado, e retorne um json com o produto criado.
    
  * <strong>should not be able to create a duplicated product: </strong> Para que esse teste passe, sua aplicação deve retornar um erro 
  quando você tentar cadastrar um produto com um nome que já esteja cadastrado no banco de dados.
  
  * <strong>should be able to create a new order: </strong> Para que esse teste passe, sua aplicação deve permitir que um pedido seja 
  criado, e retorne um json com o todos os dados do pedido criado.
  
  * <strong>should not be able to create an order with a invalid customer: </strong> Para que esse teste passe, sua aplicação não deve 
  permitir a criação de um novo pedido com um cliente que não existe no banco de dados, retornando um erro.
  
  * <strong>should not be able to create an order with invalid products: </strong> Para que esse teste passe, sua aplicação não deve 
  permitir a criação de um novo pedido com um produtos que não existem no banco de dados, retornando um erro caso um ou mais dos 
  produtos enviados não exista no banco de dados.
  
  * <strong>should not be able to create an order with products with insufficient quantities: </strong> Para que esse teste passe, sua 
  aplicação não deve permitir a criação de um novo pedido com um produtos que não possuem quantidade disponível, retornando um erro 
  caso um ou mais dos produtos enviados não possua a quantidade necessária.
  
  * <strong>should be able to subtract an product total quantity when it is ordered: </strong> Para que esse teste passe, sua aplicação 
  deve permitir que, quando um novo pedido for criado, seja alterada a quantidade total dos produtos baseado na quantidade pedida.
  
  * <strong>should be able to list one specific order: </strong> Para que esse teste passe, você deve permitir que a rota orders/:id 
  retorne um pedido, contendo todas as informações do pedido com o relacionamento de customer e order_products.

### Tecnologias Usadas

* node
* express
* cors
* jest
* typescript
* ts-jest
* ts-node
* ts-node-dev
* tsconfig-paths
* eslint
* eslint-config-airbnb-base
* eslint-config-prettier
* eslint-import-resolver-typescript
* eslint-plugin-import
* eslint-plugin-prettier
* typescript-eslint/eslint-plugin
* typescript-eslint/parser
* prettier
* supertest

### Como usar

* Clone this repository
$ git clone

* Go into the repository
Prompt --> cd/ "caminho que clonou o projeto"

* Install dependencies
yarn install

* Rodar o APP
yarn dev:server

* Rodar os testes
yarn test

 

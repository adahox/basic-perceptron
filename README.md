## rede neural - Perceptron

Aqui há um exemplo (muito básico) de como um perceptron funciona.
Este exemplo aprende com o banco de dados  local (veja o arquivo [database.js](database.js)).

Tudo isso foi criado baseado no conhecimento adquirido de um canal do youtube [Universo Discreto](https://www.youtube.com/watch?v=tYXGzQs31Og&list=PL-t7zzWJWPtygNTsgC_M8c9a-p5biCjho) e pela leitura de alguns capítulos do livro [Deep Learning Book ](https://www.deeplearningbook.com.br/)

### oque é um perceptron ?

Perceptron é uma rede neural de camada única e um Perceptron de várias camadas é chamado de Rede Neural Artificial. O Perceptron é um classificador linear (binário). Além disso, é usado na aprendizagem supervisionada e pode ser usado para classificar os dados de entrada fornecidos.
fonte: [Deep Learning Book](https://www.deeplearningbook.com.br/o-perceptron-parte-1/#:~:text=Perceptron%20%C3%A9%20uma%20rede%20neural,os%20dados%20de%20entrada%20fornecidos.)

## Afinal, que este Perceptron faz?

Este Perceptron tem como intúito tomar a decisão se vai ou não a um show/evento baseado em 3 variáveis: distancia, preço e se você tem amigos ou não para ir.
Com a ajuda de um banco de dados (se é que posso chamar assim) ele é treinado e passa a decidir com base neste treinamento realizado.

#### exemplo do Banco de Dados

| isFar |  isExpensive  | hasFriends | decisão |
| ----- | ------------- | ---------- | ------- |
|   No  |       No      |     Yes    |   Yes   |
|   Yes |       No      |     Yes    |   Yes   |
|   Yes |       Yes     |     Yes    |   No    |
|   Yes |       Yes     |     No     |   No    |

### Para iniciar é necessário usar os comandos Docker

Estes comandos vão iniciar contruir as imagens, fazer o download da imagem do mongo
e iniciar a aplicação. Também tem um 'seeder' que vai alimentar o banco de dados com
as informações inicias de palestrantes.

~~~~
docker-compose build
docker-compose up -d
~~~~

### Para utilizar a api

Existem 5 endpoints neste sistema. __Obs (Não foi feito um endpoint para upload de imagens.)__ 

Operação | Método/URL
-------- | --------
listagem | GET /speakers
create   | POST /speaker
read     | GET /speaker/:id
update   | PUT /speaker/:id
delete   | DELETE /speaker/:id

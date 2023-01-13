# desafio-sharenergy-2023-01
Repositório destinado aos interessados em participar do processo seletivo da SHARENERGY 2023/01. As vagas são voltadas para desenvolvimento de aplicações Web e Mobile.

# Como rodar o projeto

### Necessário ter docker e docker-compose instalado na máquina

1. Clone este repositório `git@github.com:Bielbcs/desafio-sharenergy-2023-01.git`.

2. Vá para a pasta raíz do projeto `cd desafio-sharenergy-2023-01`.

3. Mude para minha branch onde está o proejto `git checkout gabriel-bernardo-cotrim-silva`

4. Instale as dependencias `cd frontend && npm install && cd ../backend && npm install`

5. Suba os containeres docker com o comando `docker-compose up -d`. <br/>
  (Este comando irá subir os containeres do `frontend`, `backend` e o `mongodb`, também irá usar as portas '`3000`, `3001` e `27017`' certifique-se de que nenhuma delas está em uso)

6. Em seu navegador, já pode acessar a rota `localhost:3000`.

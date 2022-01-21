Criado o projeto Node e o arquivo Dockerfile, basta realizar o build da imagem, com o comando abaixo:

docker build .

Em seguida, verifique o Id da imagem criada, com o seguinte comando:

docker image ls

Por fim, execute um container com esta imagem, lembrando dos parâmetros de porta e de execução em segundo plano, como segue:

docker run -d -p portaDoComputador:portaDoContainer idDoContainer
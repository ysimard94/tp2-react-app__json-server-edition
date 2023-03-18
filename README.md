# Projet pour gérer une liste de produit

Ce projet est une application à page unique, et a été programmé avec React. L'utilisateur peut ajouter des nouveaux produits, les modifier ainsi que les supprimer. Cette version utilise des fetch API et JSON server pour gérer les données.

## Installation

Tout d'abord, l'utilisateur doit utiliser la commande `npm install` pour installer les dépendances nécessaires.

Par la suite, il faut lancer le serveur JSON avec la commande `npm run server` puis ensuite `npm start` pour lancer le serveur du projet. Il est possible de changer le port d'écoute du serveur JSON dans le fichier package.json. De base il écoute le port 5000. Par contre il faudra changer le port d'écoute dans les requêtes fetch du fichier App.js situé dans le dossier /src.

## Essayer le projet

Le projet sans le serveur JSON est hébergé sur mon site, pas mal plus simple pour l'essayer que de l'installer!

http://www.ysimard.com/tp2-react-app/

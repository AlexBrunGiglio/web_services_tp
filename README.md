
# 💻 Web Services Projet 💻

Repo du projet de web service Ynov Master 1 Web 2021/2022. 


## 🔗 Projets réalisé par Alexandre Brun-Giglio
[![portfolio](https://img.shields.io/badge/my_portfolio-000?style=for-the-badge&logo=ko-fi&logoColor=white)](https://alexandrebrungiglio.fr/)

## 🛠️ Configuration et lancement du projet

### Clonez le projet 

```bash
 $ git clone https://github.com/AlexBrunGiglio/web_services_tp.git
```

### Installation des dépendances 

```bash
  $ cd front/
  $ npm i

  $ cd back/
  $ npm i
```

### Configuration de l'api 

Créez une base de données pour le projet puis duppliquer le fichier `env.default.json` dans le dossier back. 
Renomer le nouveau fichier en `env.json` puis completer le avec vos informations. 

### Lancement du projet 
```bash
  $ cd front/
  $ npm run start

  $ cd back/
  $ npm run start
```

Le front écoute sur http://localhost:8888/ et le back écoute sur http://localhost:3080/.

La documentation open api sera disponible à l'adresse : http://localhost:3080/swagger .

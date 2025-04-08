# crontabDisplay

Une interface web simple pour gérer vos tâches cron (crontab) avec une interface utilisateur conviviale.

## 📋 Description

crontabDisplay est une application web qui vous permet de visualiser, modifier, ajouter et supprimer des tâches cron sur votre serveur de manière intuitive. Fini les commandes en ligne pour gérer vos tâches planifiées !

## ✨ Fonctionnalités

- 📊 Affichage clair de toutes les tâches cron existantes
- ✏️ Modification des tâches existantes
- ➕ Ajout de nouvelles tâches
- 🗑️ Suppression de tâches
- 📝 Ajout de descriptions pour chaque tâche

## 🔧 Prérequis

- Node.js (v12 ou supérieur)
- npm
- Un système compatible avec crontab (Linux/Unix/MacOS)

## 🚀 Installation

1. Clonez ce dépôt :

```bash
git clone https://github.com/Valentin-Morette/crontabDisplay.git
cd crontabDisplay
```

2. Installez les dépendances :

```bash
npm install
```

3. Lancez l'application :

```bash
npm start
```

4. Accédez à l'interface via votre navigateur à l'adresse :

```
http://localhost:3000
```

## 🔍 Comment ça marche

L'application lit votre fichier crontab, interprète les commentaires précédant chaque commande comme des descriptions, et affiche le tout dans une interface web ergonomique.

La syntaxe utilisée est la suivante :

```
# Description de la tâche
* * * * * commande à exécuter
```

## 🛠️ Technologies utilisées

- **Backend** : Node.js avec Express
- **Frontend** : HTML, CSS et JavaScript vanilla
- **Communication** : Axios pour les appels API

## ⚠️ Sécurité

Cette application modifie directement votre crontab système. Il est recommandé de :

- L'utiliser uniquement sur un environnement sécurisé
- Ne pas l'exposer publiquement sur Internet
- Faire une sauvegarde de votre crontab avant la première utilisation (`crontab -l > crontab_backup`)

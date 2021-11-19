# js-debutant

## TP 1 : Mise en place
Dans un premier temps nous allons simplement créer un
script JavaScript qui décrira un objet qui nous servira à décrire
un Contact et un second ContactService qui proposera une
API pour manipuler une liste de contacts.
Nous utiliserons la syntaxe ES2015 pour profiter des dernières
évolutions du JavaScript (classe, constructor...).

## Création du modèle
Pour commencer nous n'utiliserons qu'un seul fichier. Nous
verrons par la suite comment découper notre application
Node.js.
● Créer un fichier contacts.js
● Créer une classe Contact qui comporte 5 propriétés :
id, prénom (firstName), nom (lastName), adresse
(address) et numéro de téléphone (phone)
● Ajouter un constructeur pour initialiser ces propriétés
● Ajouter une méthode toString retournant le nom en
majuscule et le prénom du contact.


## Lecture des contacts
Sans entrer dans le détail du fonctionnement de la fonction
require fournie par Node.js, nous allons nous en servir pour
charger la liste des contacts présente dans le fichier fourni
contacts.json.
● En haut du fichier, ajouter l'instruction const data =
require('./contacts.json');
● Créer une classe ContactService qui initialisera une
liste de contacts.
● Dans le constructeur, itérer sur les contacts et
instancier un objet Contact pour chaque élément.
Indice :[].map.
● Ajouter une méthode get dans l'objet ContactService.
Cette méthode doit renvoyer les contacts en mémoire.
● Ajouter une méthode print à la classe ContactService
qui affiche tous les contacts enregistrés.
● Instancier un objet ContactService et utiliser sa
méthode print.
● Vérifier le bon fonctionnement en exécutant votre
script par la commande node contacts.js
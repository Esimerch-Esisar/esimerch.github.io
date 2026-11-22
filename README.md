# Documentation Esimerch
## Préambule
Afin de faciliter la collaboration à plusieurs et la passation au groupe suivant, le dépôt `esimerch.github.io` a été transféré vers l'Organisation `Esimerch-Esisar`, dont le propriétaire est, et **doit rester**, le compte github esimerch (dont l'adresse mail est esimerch1@gmail.com). 
Il est conseillé, pour chaque groupe, de nommer en plus un membre de l'équipe comme propriétaire de l'organisation (`Owner`), afin qu'il puisse intervenir comme admin de l'organisation depuis son compte Github personnel. Les autres membres de l'équipe peuvent être ajoutés comme `Member`, avec des droits éventuels en écriture ou lecture. 

## Organisation GitHub

-   Le site **esimerch.fr** est hébergé via GitHub Pages à partir du dépôt :  
    [`Esimerch-Esisar/esimerch.github.io`](https://github.com/Esimerch-Esisar/esimerch.github.io)
-   Ce dépôt appartient à l’**organisation** `Esimerch-Esisar`
-   Le propriétaire historique et neutre de l’organisation reste le **compte projet** `esimerch` (adresse : `esimerch1@gmail.com`).
    
    > Ce compte doit toujours conserver le rôle **Owner** pour assurer la continuité
## Rôles et accès
-   **Owner(s)** :
    
    -   Le compte `esimerch` (obligatoire).
    -   Au moins **1 membre actif de l'équipe** (ajouté avec son compte perso).
    -   Rôle : administration de l’organisation, ajout/retrait de membres, modification des règles de protection.        
-   **Team `web`** (Write) :
    -   Tous les membres de l'équipe chargés du site web.
    -   Droits d’écriture via Pull Request.

On peut également définir des rôles en **lecture seule** au besoin.

## Configuration 
Pour modifier le site, il faut avoir installé git sur son PC. Dans un répertoire dédié : 

    git clone https://github.com/Esimerch-Esisar/esimerch.github.io.git


## Workflow de déploiement
Le site est hébergé sur une Github Page. Le groupe possède le nom de domaine esimerch.fr chez OVH. Normalement, il n'y a rien à changer niveau configuration. Contacter l'équipe précédente si soucis de config.
**Règle d'or : On ne `push` JAMAIS directement sur la branche `main`**.
Toute modification passe par une branche dédiée puis un Pull Request.
Normalement, la branche `main ` est protégée : impossible d'écrire dessus sans passer par une pull request, ni de la supprimer.

**Exemple** :

    git switch main
    git pull
    git switch -c nom-branche
    # ... faire les modifs sur VSCode ...
    git add -A
    git commit -m "Description claire"
    git push -u origin nom-branche
Puis sur Github, onglet _Pull Requests > New Pull Request_. Comparer : `base: main` et `compare: nom-branche` puis _Create pull request_. Ajouter une éventuelle description, puis à nouveau _Create pull request_. Si aucun conflit détecté : 

> #### No conflicts with base branch
> Merging can be performed automatically.

Cliquer sur **Squash and merge**.
Attendre quelques secondes/minutes que les tests passent correctement (onglet *Actions*, le logo de statut doit être vert. S'il est jaune, les tests sont en cours), puis consulter esimerch.fr pour constater la modification. 
Une fois la modification déployée, **il est vivement conseillé de supprimer la branche. Toute nouvelle modification doit passer par une nouvelle branche**. 
### Supprimer une branche (sur Github puis en local)
#### sur Github 
Retourner sur la Pull request (Onglet Pull requests > Closed) puis cliquer sur `Delete branch`.
> #### Pull request successfully merged and closed
> You're all set — the `doc-test` branch can be safely deleted.

#### En local

    git switch main
    git pull            
    git branch -d nom-branche

## Passation au groupe suivant

1.  **Membres sortants** :
    -   Suppriment leurs droits.
    -   Transmettent les accès OVH au responsable désigné.
        
2.  **Membres entrants** :
    -   Créent un compte GitHub perso si besoin.
    -   Sont ajoutés dans l’organisation `Esimerch-Esisar` :
        -   1 membre en tant qu’**Owner**.
        -   Les autres dans la team `web`.
        - **Le compte Github `esimerch` doit rester _Owner_ de l’organisation (même si aucun étudiant ne s’en sert directement), comme filet de sécurité.**
3.  **Documentation** :       
    -   Vérifier que le fichier `CNAME` est toujours présent **(ne pas le modifier)**.
    -   Tester que le site fonctionne toujours et faire des test de modif avec l'équipe précédente.
    - Au besoin, il sera peut-être nécessaire de renouveler le nom de domaine chez OVH : voir avec Céline Jeanne et groupe Budget.

## Contact 
Si soucis technique, ne pas hésiter à contacter l'équipe précédente. Les moyens de contact sont disponibles sur la fiche relais.


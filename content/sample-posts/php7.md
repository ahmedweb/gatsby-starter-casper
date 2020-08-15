---
templateKey: blog-post
title: Les principales nouveautés du PHP 7
intro: Ceci n'est pas un article approfondi sur les nouvelles fonctionnalités de PHP 7.X, j'en aborde seulement celles qui me semblent intéressant.
date: '2017-07-21'
cover: 'images/posts/postblog_LES_PRINCIPALES_NOUVEAUTES_DU_PHP7_0817.png'
---

Ceci n'est pas un article approfondi sur les nouvelles fonctionnalités de PHP 7.X, j'en aborde seulement celles qui me semblent intéressant.

## Nouvel opérateur <=>

La comparaison combiné (<=>) appelé également « Spaceship operator » fonctionne à la fois sur des valeurs numériques (int et float) mais également sur des chaînes de caractères, des tableaux et sur des objets, l’intérêt sera de l'utiliser dans les algorithmes de tri en réduisant considérablement. Il permet de s’assurer en une seule opération que la variable existe et qu’elle n’est pas nulle. Exemple :

```php
// PHP 5.6
$tab = array(1,4,3,2,2);
usort($tab, function($a, $b) {
    return ($a < $b) ? -1 : (($a > $b) ? 1 : 0);
});
// PHP 7
$tab = array(1,4,3,2,2);
usort($tab, function($a, $b) {
    return $a <=> $b;
});
```

## Visibilité des constantes de classe

PHP 7.1 ajoute le support de la visibilité des constantes de classe qui reflète le comportement de la visibilité de méthode et de propriété. Les constantes de classe peuvent être définies comme « public », « private » ou « protected ». Les constantes de classe déclarées sans mot-clé de visibilité explicite sont définies comme « public ».

Les constantes de classes supportent désormais les visibilités : public, protected et private. Les constantes sans visibilité seront automatiquement comme publiques. Les interfaces, sont déclarer des constantes comme étant publiques.

## Les types nullable

PHP 7.0 a apporté la possibilité de typer les paramètres et les retours de fonctions. Par contre dans certains cas (par exemple une requête SQL) nos fonctions ne retourne aucun résultat. Ce type de retour peut maintenant être décrit en précédant le type d'un "?" pour spécifier un retour "parfois null".

```php
/**  Permet de récupérer un enregistrement par son ID **/

public function find (int $id = null): ?array
 {
$query = $this->pdo->prepare('SELECT * FROM id WHERE id = ?'); $query->execute([$id]);
 return $query->fetch() ?: null;
 }
```

<br>

> SOURCES : julp.fr - lije-creative.com - onsertotech.pro - php.net - grafikart.fr

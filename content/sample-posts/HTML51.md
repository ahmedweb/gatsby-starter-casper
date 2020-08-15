---
templateKey: blog-post
title: Les nouveautés HTML 5.1
intro: Le développement de cette version 5.1 avait commencé en décembre 2012 et été validé en novembre 2016. Voici les principales nouveautés disponibles.
date: '2017-07-07'
cover: 'images/posts/postblog_LES_NOUVEAUTES_DU_HTML_0717.png'
---

Le W3C (World Wide Web Consortium) c’est une communauté internationale qui développe des standards pour l'évolution du Web à officialisé le 1er novembre 2016 la version 5.1 du HTML. Le développement de cette version 5.1 avait commencé en décembre 2012 et été validé en novembre 2016. Voici les principales nouveautés disponibles avec la version 5.1:

## Zones de textes

- Week :

```html
 <input type="week">
```

Cette balise permet de sélectionner une semaine pour une année : numéro de la semaine / année.

- Month :

```html
 <input type="month">
```

Cette balise permet de sélectionner le mois.

- Datetime-local :

```html
  <input type="datetime-local">
```

Cette balise permet de sélectionner une date spécifique

## Picture et srcset

Cette nouveauté va faire du bien à la bande passante, fonctionnalité va permettre de définir l'affichage d'une image spécifique en fonction de la résolution de l'écran.

```html
<picture>
  <source media="(max-width: 480px)" srcset="http://devtoweb.be/logo-small.jpg">
  <source media="(max-width: 640px)" srcset="http://devtoweb.be/logo-medium.jpg">
  <source media="(max-width: 1024px)" srcset="http:/devtoweb.be/logo-large.jpg">
  <img src="http://devtoweb.be/logo-large.jpg" alt="Netapsys">
</picture>
```

La condition de la taille est définie par l'attribut "media" qui aura pour valeur des media queries. On peut donc définir différentes images selon la résolution et en définir une par défaut à afficher si un navigateur n'est pas compatible, alors on affiche une image par défaut via cette balise :

```html
<img>
```

## Details et Summary

Ces 2 balises se sont des widgets qui permettent d’afficher et de masquer du contenu sans JavaScript. Fini le JavaScript pour déplier du contenu, la balise "details".

```html
<details></details>
```

a pour but de représenter des informations non visibles par défaut, en cliquant, le contenu devient visible.

```html
<summary></summary>
```

est absent, alors "Détails" est affiché par défaut.

## Menuitem et context

Cette balise est un peu spéciale car elle n'agit pas sur la page en elle même mais sur le menu contextuel de l'utilisateur. Il est ainsi possible de rajouter des éléments dans le menu s'affichant lors du clic droit sur un élément HTML.

> SOURCES : w3.org , grafikart.fr, louistiti.fr

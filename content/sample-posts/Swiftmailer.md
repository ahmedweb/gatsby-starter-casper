---
templateKey: blog-post
title: Swiftmailer
intro: Ceci n'est pas un article approfondi sur les nouvelles fonctionnalités de PHP 7.X, j'en aborde seulement celles qui me semblent intéressant.
date: '2017-07-21'
cover: 'images/posts/postblog_Swiftmailer_1217.png'
---

Débutons par jeter un coup d'œil général sur ce qu'est Swift Mailer et ces fonctionnalités qu’il embarque avec lui. C'est un programme permettant d'effectuer un certain nombre d'opérations (une boîte à outils des fonctionnalités que vous pouvez utiliser dans vos programmes, au lieu de tout programmer vous-même) pour envoyer des e-mails.

Le projet Swift Mailer a été initié en 2005 par Chris Corbyn il y a quelques années. Il a fait un très bon travail au cours des années, essayant de trouver le meilleur façon de faire des emails dans le langage PHP. Mais depuis 2009, il a cédé la maintenance du projet à Fabien Potencier de Symfony, l'un des frameworks PHP les plus utilisés au monde.

Swift Mailer s’associe dans n'importe quelle application web codé en PHP 5, offrant une méthode orientée objet malléable et élégante pour envoyer des emails avec une abondance de fonctionnalités faciles à mettre en réalisation.

## Exemple d’utilisation

Pour l’utiliser vous devez d'abord inclure son autoloader :

```php
require_once '/vendor/autoload.php';
```

Par la suite vous devez renseigner les paramètres de connexion de votre boîte mail :

```php
$transport = (new Swift_SmtpTransport('smtp.adresse.mail', 25))
  ->setUsername('votre@adresse.mail’)
  ->setPassword('password');
```

Delà nous pouvons envoyer un mail, voici la procédure à suivre:
Déclaration de la class Swift_Mailer dans une variable :

```php
$mailer = new Swift_Mailer($transport);
```

Création de l’email avec un sujet, un émetteur, un destinataire et le message:

```php
$message = (new Swift_Message('VOTRE SUJET DE MAIL'))
  ->setFrom(['info@devtoweb.be' => 'Ahmed Web'])
  ->setTo(['destinataire1@domain.org', 'destinataire2@domain.org'])
  ->setBody('Bonjour un nouvel article disponible sur mon site');
```

Voilà l'email est créé, il est temps de l'envoyer, en utilisant la méthode send () de la classe Swift_Mailer :

```php
$mailer = new Swift_Mailer($transport);
```

Dans cet article, j'ai montré comment vous pouvez facilement et rapidement envoyer des emails en utilisant SwiftMailer. C'est une bibliothèque très puissante qui, comme vous l'avez vu, vous permet de faire beaucoup de choses en utilisant une approche POO.

> SOURCES : lynda.com - ourcodeworld.com - devshed.com - swiftmailer.symfony.com - sitepoint.com

---
title: "Eloquent ORM using Slim Framework"
slug: "eloquent-orm-slim-framework"
date: "2021-07-08"
---

Eloquent is the default ORM (object relational mapping) software for Laravel. It is a powerful tool that can save a lot of time with application development, compared to writing SQL queries. Eloquent ORM can be used as a stand-alone ORM.

Below is the code how to use Eloquent ORM with Slim 4.

- Install Slim 4 and Eloquent ORM by running `composer install`

```
{
    "require": {
        "slim/slim": "4.*",
        "slim/psr7": "^1.4",
        "illuminate/database": "^8.50",
        "illuminate/events": "^8.50"
    },
    "autoload": {
         "psr-7": {
             "App\\Controller\\": "app/controllers",
             "App\\Middleware\\": "app/middleware",
             "App\\Model\\": "app/models"
         }
    }
}
```

1. Create an index.php or any-filename.php
1. Load the required libraries with use to run Slim 4 and Eloquent ORM.
1. Create the $app.
1. Load the database connection settings into the Capsule.
1. Interact with your database using Capsule::table('table_name').

```
require __DIR__ . '/vendor/autoload.php';
use Psr\Http\Message\ResponseInterface as Response;
use Psr\Http\Message\ServerRequestInterface as Request;
use Slim\Factory\AppFactory;
use Illuminate\Events\Dispatcher;
use Illuminate\Container\Container;
use Illuminate\Database\Capsule\Manager as Capsule;

$app = AppFactory::create();
$app->addErrorMiddleware(true, true, true);

$container=$app->getContainer();
$capsule = new Capsule;
$capsule->addConnection([
    'driver'    => 'mysql',
    'host'      => 'localhost',
    'database'  => '',
    'username'  => '',
    'password'  => '',
    'charset'   => 'utf8',
    'collation' => 'utf8_unicode_ci',
    'prefix'    => '',
]);
$capsule->setEventDispatcher(new Dispatcher(new Container));
$capsule->setAsGlobal();
$capsule->bootEloquent();

//get row from 'users' where 'username' = $username
Capsule::table('users')->where('username', $username)->get();

//update row from 'users' table where 'email' = $email with $values
$values = [
    'email' => $email,
    'username' => $username,
    'password' => $password
];
Capsule::table('users')->where(['email' => $email])->update($values);
```

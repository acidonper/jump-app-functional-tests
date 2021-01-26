# Jump App Functional Tests

## Introduction

*Jump App Fucntional Tests* includes a set of functional tests based on cypress framework in order to be able to promote from DEV to PRO in a safe way.

## Install Cypress

```$bash
npm install cypress --save-dev
```

## Interactive mode

```$bash
./node_modules/.bin/cypress open --env jump_app_url=https://front-javascript-jump-app-dev.apps.acidonpe.sandbox1736.opentlc.com
cypress_jump_app_url=https://front-javascript-jump-app-dev.apps.acidonpe.sandbox1736.opentlc.com ./node_modules/.bin/cypress open
```

## Execute Tests

```$bash
./node_modules/.bin/cypress run --env jump_app_url=https://front-javascript-jump-app-dev.apps.acidonpe.sandbox1736.opentlc.com
cypress_jump_app_url=https://front-javascript-jump-app-dev.apps.acidonpe.sandbox1736.opentlc.com ./node_modules/.bin/cypress run

```

## Author Information

Asier Cidon

asier.cidon@gmail.com

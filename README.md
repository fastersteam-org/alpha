# Faster Website V2

Updated Faster Website with new stack and redesign

## Installation

-   Pull down the repository
-   run `npm install`
-   run `npm prepare` to install Husky and add precommit hooks
-   run `npm run develop` to start your server in watch mode and access the page on http://localhost:8000/

## Configuring Your Dev Environment

VSCode is the preferred IDE of choice to take advantge of the .vscode settings file. In this file we set prettier to auto format your files for you so you do not have to think about styling while you code.

NOTE: If you do not like to use VSCode (totally okay :smile:) `Prettier` will run on your changed/staged files for you using `lint-staged`.

## GraphiQL IDE

You can test your graphql queries and debug them using this IDE provided by Gatsby. It uses graphql syntax. Refer to [this](https://www.gatsbyjs.com/docs/how-to/querying-data/running-queries-with-graphiql/) for more information

## CSS Framework

We are utilizing Tailwind.css which should remove the need for us to write a lot of custom CSS. Check [this](https://tailwindcss.com/) out for more information.

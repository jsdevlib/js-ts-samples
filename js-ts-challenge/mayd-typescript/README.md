# BeyondNet.Template.NodeTsStarter
A basic template to start nodejs projects with Typescript, Huski, Eslint, Prettier, etc.

# Steps to create a new common library with NPM

1. npm init -y
2. tsc --init
3. npm i typescript del-cli --save-dev

# Git commands

- git status
- git add .
- git commit -m <description>
- npm version patch
- npm run build
- npm publish --access=public

Sometimes we need to use:

- npm login
- pm publish --access public ?? npm login

# Key dependencies

- del-cli: clearing the build directory before build.
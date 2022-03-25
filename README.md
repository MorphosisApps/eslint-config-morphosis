# eslint-config-morphosis

A shareable eslint config designed to be used for frontend apps at morphosis.

# What it includes

The config extends eslint-config-next, so the project using this config does not have to again extend next-related eslint configs (they include react, react-hooks, jsx/a11y).

_WIP: Include a list of rules_

# Usage

## Installation

```sh
yarn add -D https://github.com/MorphosisApps/eslint-config-morphosis
```

We also need to add its peer dependencies:

```sh
yarn add -D eslint eslint-plugin-import
```

## Extending the config

The config can be used by adding `@morphosis` in `extends` array in `.eslintrc`.

```diff
{
+ 	"extends": ["@morphosis"]
}
```

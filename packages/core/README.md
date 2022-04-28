# Tailwind UI

A brief description of what this project does and who it's for.



## Installation

Install @alisyahidin/ui with npm:

```bash
npm install @alisyahidin/ui tailwindcss postcss autoprefixer -D
```
or yarn:

```bash
yarn add @alisyahidin/ui tailwindcss postcss autoprefixer --dev
```

Initialize tailwindcss config with running:

```bash
npx tailwindcss init -p
```

Import @alisyahidin/ui as tailwindcss plugin in `tailwind.config.js` file:
```javascript
module.exports = {
  //...
  plugins: [
    require('@alisyahidin/ui')
  ]
}
```

For more information about tailwindcss installation, please click [here](https://tailwindcss.com/docs/installation).
## Run Locally

Clone the project

```bash
git clone https://github.com/alisyahidin/tailwind-ui.git
```

Go to the project directory

```bash
cd master-ui-tailwind
```

Install dependencies

```bash
yarn install
```

Run lerna bootstrap

```bash
lerna bootstrap
```

Start development server

```bash
yarn docs:dev
```
## Usage/Examples

```javascript
import Component from 'my-project'

function App() {
  return <Component />
}
```


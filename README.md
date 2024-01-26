# Terminal Portfolio Website by Camdyn Zook

![Terminal Portfolio Website by Camdyn Zook](/public/site.png)

![ts](https://badgen.net/badge/Built%20With/TypeScript/blue?style=flat-square)
![Gitmoji](https://img.shields.io/badge/gitmoji-%20😜%20😍-FFDD67.svg?style=flat-square)

My perfolio website in terminal version developed with React, TypeScript and Styled-Components. Multiple themes supported and keyboard shortcuts can be used for some functionalities.

[camdynzook.dev](https://camdynzook.dev)

## Features

- Responsive Design 📱💻
- Multiple themes 🎨
- Autocomplete feature ✨ (TAB | Ctrl + i)
- Go previous and next command ⬆️⬇️
- View command history 📖
- PWA and Offline Support 🔥
- Well-tested ✅

## Tech Stack

**Frontend** - [React](https://reactjs.org/), [TypeScript](https://www.typescriptlang.org/)  
**Styling** - [Styled-Components](https://styled-components.com/)  
**State Management** - [ContextAPI](https://reactjs.org/docs/context.html)  
**Deployment** - [DigitalOcean](https://digitalocean.com/)

## Lighthouse Score

<p align="center">
<img width="710" alt="Camdyn Zook Terminal Lighthouse Score" src="public/lighthouse-result.svg">
</p>

## Running Locally

Clone the project

```bash
git clone https://github.com/zDoda/terminal-portfolio.git
```

Go to the project directory

```bash
cd terminal-portfolio
```

Remove remote origin

```bash
git remote remove origin
```

Install dependencies

```bash
npm install
```

Start the server

```bash
npm run dev
```

Leave instance running on server w/ pm2 (npm i -g pm2)
```bash
pm2 start npm --name "my-dev-app" -- run dev
```

## Inspiration and Credits

Here are some inspiration for this kind of terminal website. Only some features and functionalities are inspired by these following websites. All codes are written on my own.

- [term m4tt72](https://term.m4tt72.com/)
- [Forrest](https://fkcodes.com/)
- [@satnaing](https://satnaing.dev)


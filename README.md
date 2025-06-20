# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default tseslint.config({
	extends: [
		// Remove ...tseslint.configs.recommended and replace with this
		...tseslint.configs.recommendedTypeChecked,
		// Alternatively, use this for stricter rules
		...tseslint.configs.strictTypeChecked,
		// Optionally, add this for stylistic rules
		...tseslint.configs.stylisticTypeChecked,
	],
	languageOptions: {
		// other options...
		parserOptions: {
			project: ["./tsconfig.node.json", "./tsconfig.app.json"],
			tsconfigRootDir: import.meta.dirname,
		},
	},
});
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from "eslint-plugin-react-x";
import reactDom from "eslint-plugin-react-dom";

export default tseslint.config({
	plugins: {
		// Add the react-x and react-dom plugins
		"react-x": reactX,
		"react-dom": reactDom,
	},
	rules: {
		// other rules...
		// Enable its recommended typescript rules
		...reactX.configs["recommended-typescript"].rules,
		...reactDom.configs.recommended.rules,
	},
});
```

## LIBRARY

1. React Query Tanstack for fetching
2. Zustand as Global State Management
3. React Router Dom as Routing
4. React Query Devtools
5. Tailwind Ui Components

> [!NOTE]
> using env for environment variables, vite_token is a secret token [TMDB](https://www.themoviedb.org/) that required for fetching data. Then don't forget to set with your own token [TMDB](https://www.themoviedb.org/)

## HOW TO RUN THE APP

```javascript
npm install
npm run server:dev

// it will be running on port 5173

```

## FEATURE OF WEBSITE

1. All list movies
2. Searching feature movies
3. Filtering movies
4. Detail Movies
5. Pagination

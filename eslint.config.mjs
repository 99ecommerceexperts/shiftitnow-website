import { defineConfig, globalIgnores } from 'eslint/config';
import nextVitals from 'eslint-config-next/core-web-vitals';

const eslintConfig = defineConfig([
  ...nextVitals,
  {
    rules: {
      // The pages were converted from static HTML that used plain <img> tags with fixed sizes and paths
      // under /assets; they are served as-is rather than through the Next image optimizer.
      '@next/next/no-img-element': 'off',
      // Marketing copy uses straight quotes and apostrophes on purpose; they are valid in JSX text.
      'react/no-unescaped-entities': 'off',
      // This rule targets the Pages Router (_document.js). In the App Router the root layout's <head> is the right place.
      '@next/next/no-page-custom-font': 'off',
    },
  },
  globalIgnores(['.next/**', 'out/**', 'build/**', 'next-env.d.ts', '.tmp_first_blog/**', 'node_modules/**']),
]);

export default eslintConfig;

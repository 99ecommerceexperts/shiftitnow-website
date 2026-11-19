// `npm run dev:mock`: the dev server plus a local stand-in for the content API, so the blog and testimonials
// can be reviewed without the Price Mirror backend. Ctrl+C stops both.
import { spawn } from 'node:child_process';
import { startMockContentApi } from './mock-content-api.mjs';

const port = Number(process.env.MOCK_API_PORT || 3400);
const server = await startMockContentApi(port);
console.log(`Mock content API on http://localhost:${port}/api/public/shiftitnow`);

const next = spawn('npx', ['next', 'dev'], {
  stdio: 'inherit',
  env: { ...process.env, CONTENT_API_URL: `http://localhost:${port}/api/public/shiftitnow` },
});
const stop = () => { next.kill(); server.close(); };
process.on('SIGINT', stop);
process.on('SIGTERM', stop);
next.on('exit', code => { server.close(); process.exit(code ?? 0); });

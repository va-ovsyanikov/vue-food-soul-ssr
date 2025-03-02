import express, {Request, Response} from 'express';
import  {renderToString}  from 'vue/server-renderer';
import fs from 'fs';
import path  from 'path';
import { createServer } from 'vite';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
async function initServer() {
  const app = express();

  const vite = await createServer({
    server: { middlewareMode: true },
    appType: 'custom',
  });

  app.use(vite.middlewares);

  app.use('*', async (req: Request, res: Response<string>) => {

    let template = fs.readFileSync(path.resolve(__dirname, '../index.html'), 'utf-8');

    template = await vite.transformIndexHtml(req.originalUrl as string, template);

    const render = (await vite.ssrLoadModule('/src/entry-server.ts')).render;

    const { app:appVue } = await render();

    const appContent = await renderToString(appVue);

    template = template.replace(`<!--app-->`, appContent);

    res.send(template);
  });

  return app;
}

initServer().then((app) =>
  app.listen(3000, () => {
    console.log('ready');
  })
);

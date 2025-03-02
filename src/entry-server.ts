import { createApp } from './main';

export const render = async () => {

  const { app } = createApp();

  return { app };
}

import { Env } from './global';

export default {
  async fetch(request: Request, env: Env, ctx: ExecutionContext): Promise<Response> {
    console.log(env);

    return new Response('Hello World!');
  },
};

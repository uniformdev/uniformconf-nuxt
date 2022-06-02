import { CanvasClient } from '@uniformdev/canvas';

export default defineEventHandler(async (event) => {
  const query = useQuery(event);
  const { apiKey, canvasApiHost, projectId } = useRuntimeConfig();

  const client = new CanvasClient({
    apiKey,
    projectId,
    apiHost: canvasApiHost,
  });

  const { composition } = await client.getCompositionBySlug({
    slug: query.slug.toString(),
    state: parseInt(query.state.toString()),
  });

  return composition;
});

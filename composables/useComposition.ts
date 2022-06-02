import { ComponentInstance } from '@uniformdev/canvas';

export default function ({ slug, state }: { slug: string; state: number }) {
  return useFetch(`/api/composition?slug=${slug}&state=${state}`);
}

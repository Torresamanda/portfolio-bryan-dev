import { getProjects } from '../../lib/projects';

export const revalidate = 3600;

export async function GET() {
  return Response.json(await getProjects());
}

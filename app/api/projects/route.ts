import { getProjects } from '../../lib/projects';

export const dynamic = 'force-dynamic';

export async function GET() {
  return Response.json(await getProjects());
}

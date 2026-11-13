import { projects as fallbackProjects } from '../data/portfolio';

const GITHUB_USER = 'Bryan-OLima';
const FEATURED_TOPIC = 'portfolio-destaque';
const ORDER_TOPIC = /^portfolio-ordem-(\d+)$/;

type GitHubRepository = {
  name: string;
  html_url: string;
  description: string | null;
  homepage: string | null;
  language: string | null;
  topics: string[];
};

export type PortfolioProject = {
  title: string;
  desc: string;
  tags: string[];
  url?: string;
  github?: string;
  image: string | null;
  kind: string;
};

function httpUrl(value: string | null): string | undefined {
  if (!value) return undefined;
  try {
    const url = new URL(value);
    return url.protocol === 'https:' || url.protocol === 'http:' ? url.href : undefined;
  } catch {
    return undefined;
  }
}

export async function getProjects(): Promise<{
  projects: PortfolioProject[];
  source: 'github' | 'fallback';
  reason?: 'unavailable' | 'no_featured';
}> {
  try {
    const headers: HeadersInit = {
      Accept: 'application/vnd.github+json',
      'User-Agent': 'portfolio-bryan-dev',
    };
    if (process.env.GITHUB_TOKEN) headers.Authorization = `Bearer ${process.env.GITHUB_TOKEN}`;

    const repositories: GitHubRepository[] = [];
    for (let page = 1; ; page++) {
      const response = await fetch(
        `https://api.github.com/users/${GITHUB_USER}/repos?per_page=100&page=${page}&type=owner`,
        { headers, cache: 'no-store', signal: AbortSignal.timeout(5000) },
      );
      if (!response.ok) throw new Error(`GitHub respondeu com ${response.status}`);
      const batch: GitHubRepository[] = await response.json();
      if (!Array.isArray(batch)) throw new Error('Resposta inválida do GitHub');
      repositories.push(...batch);
      if (batch.length < 100) break;
    }

    const featured = repositories
      .filter((repo) => repo.topics?.includes(FEATURED_TOPIC))
      .sort((a, b) => {
        const order = (repo: GitHubRepository) => {
          const values = repo.topics.map((topic) => topic.match(ORDER_TOPIC)).filter(Boolean);
          return values.length ? Math.min(...values.map((match) => Number(match![1]))) : Infinity;
        };
        return order(a) - order(b) || a.name.localeCompare(b.name, 'pt-BR');
      });
    if (featured.length === 0)
      return { projects: fallbackProjects, source: 'fallback', reason: 'no_featured' };

    return {
      source: 'github',
      projects: featured.map((repo) => {
        const existing = fallbackProjects.find(
          (project) =>
            ('github' in project &&
              project.github?.toLowerCase() === repo.html_url.toLowerCase()) ||
            ('url' in project && project.url === repo.homepage),
        );
        const tags = repo.topics.filter(
          (topic) => topic !== FEATURED_TOPIC && !ORDER_TOPIC.test(topic),
        );
        return {
          title: existing?.title ?? repo.name.replace(/[-_]+/g, ' '),
          desc: repo.description || existing?.desc || 'Projeto disponível no GitHub.',
          tags: tags.length ? tags : repo.language ? [repo.language] : [],
          url: httpUrl(repo.homepage),
          github: repo.html_url,
          image: existing?.image ?? null,
          kind: existing?.kind ?? 'github',
        };
      }),
    };
  } catch (error) {
    console.error('Não foi possível carregar os projetos do GitHub:', error);
    return { projects: fallbackProjects, source: 'fallback', reason: 'unavailable' };
  }
}

import ProjectCard from './components/ProjectCard';

// Define the type for GitHub repository data
interface Repository {
  name: string;
  description: string | null;
  html_url: string;
};

export default async function Home() {
  // Fetch repositories from GitHub API
  const response = await fetch('https://api.github.com/users/Boril4o/repos', {
    headers: {
      'Accept': 'application/vnd.github.v3+json',
      'Authorization': `token ${process.env.GITHUB_TOKEN}`,
    },
    cache: 'no-store',
  });

  // Handle potential errors
  if (!response.ok) {
    throw new Error(`Failed to fetch repositories: ${response.status}`);
  }

  const repositories: Repository[] = await response.json();

  return (
    <div className="min-h-screen bg-[var(--background)]">
      <main className="max-w-3xl mx-auto mt-10 p-6 bg-[var(--card-bg)] rounded-2xl flex flex-col items-center shadow-sm">
        <section className="w-full mb-8">
          <h2 className="text-2xl font-bold mb-4 text-[var(--foreground)]" style={{ fontFamily: 'Manrope, sans-serif' }}>
            My GitHub Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {repositories.map((repo) => (
              <ProjectCard
                key={repo.name}
                title={repo.name}
                description={repo.description || ''}
                url={repo.html_url}
              />
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
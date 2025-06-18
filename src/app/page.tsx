import Header from './components/Header';
import ProjectCard from './components/ProjectCard';

// Define the type for GitHub repository data
type Repository = {
  name: string;
  description: string | null;
  html_url: string;
};

export default async function Home() {
  // Fetch repositories from GitHub API
  const response = await fetch('https://api.github.com/users/Boril4o/repos', {
    // Add cache: 'no-store' to disable caching
    cache: 'no-store',
    // Add headers to avoid rate limiting
    headers: {
      'Accept': 'application/vnd.github.v3+json',
    },
  });

  // Handle potential errors
  if (!response.ok) {
    throw new Error(`Failed to fetch repositories: ${response.status}`);
  }

  const repositories: Repository[] = await response.json();

  return (
    <div className="min-h-screen">
      <Header />
      <main className="p-8">
        <h1 className="text-4xl font-bold text-center mb-8">My Portfolio</h1>
        
        {/* Projects Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">My GitHub Projects</h2>
          
          {/* Responsive Grid Container */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {repositories.map((repo) => (
              <ProjectCard
                key={repo.name}
                title={repo.name}
                description={repo.description || 'No description available'}
                url={repo.html_url}
              />
            ))}
        </div>
        </section>
      </main>
    </div>
  );
}
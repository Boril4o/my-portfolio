import { URLSearchParams } from 'url';
import BookCard from '../components/BookCard';

interface SearchResult {
  data: {
    results: {
      docType: string;
      key: string;
    }[];
  };
};

interface Book {
  title: string;
  author: string;
  coverImage: string | undefined;
};

interface TitleInfo {
  data: {
    works: {
      title: string,
      author: string,
      _links: [{
        rel: string,
        href: string,
        method: string,
      }];
    }[];
  };
};

async function getSearchResult(): Promise<SearchResult> {
  const params = new URLSearchParams({
    rows: '20',
    q: 'a',
    api_key: `${process.env.PRH_TOKEN}`
  });

  const res = await fetch(
    `https://api.penguinrandomhouse.com/resources/v2/title/domains/PRH.US/search?${params.toString()}`, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
      },
    });

  if (!res.ok) {
    throw new Error("Fetching books");
  }

  return await res.json(); 
};

async function getBooks(searchResult: SearchResult): Promise<Book[]> {
  // Prepare the API key once
  const apiKey = `${process.env.PRH_TOKEN}`;

  // Use Promise.all to fetch all book details in parallel
  const bookPromises = searchResult.data.results.map(result => {
    const params = new URLSearchParams({
      workId: result.key,
      api_key: apiKey
    });
    // Each fetch returns a promise for a single book's data
    return fetch(
      `https://api.penguinrandomhouse.com/resources/v2/title/domains/PRH.US/works?${params.toString()}`,
      {
        method: "GET",
        headers: {
          'Accept': 'application/json',
        },
      },
    )
    .then(res => {
      if (!res.ok) {
        throw new Error(`fetching book(${result.key}) icon`);
      }
      return res.json();
    })
    .then((titleInfo: TitleInfo) => {
      const workInfo = titleInfo.data.works[0];
      return {
        title: workInfo.title,
        author: workInfo.author,
        coverImage: workInfo._links.find(link => link.rel === "icon")?.href,
      };
    });
  });

  // Promise.all will resolve when all fetches are complete, returning an array of Book objects
  return Promise.all(bookPromises);
};

export default async function BooksPage() {
  const searchResult = await getSearchResult();

  // Pick 5 random results from the search result
  const allResults = searchResult.data.results;
  const shuffled = allResults.sort(() => 0.5 - Math.random()); // Shuffle array
  const randomFive = { ...searchResult, data: { ...searchResult.data, results: shuffled.slice(0, 5) } };

  // Only send the 5 random books to getBooks
  const books = await getBooks(randomFive);
  
  return (
    <div className="min-h-screen bg-[var(--background)] py-10">
      <div className="max-w-5xl mx-auto px-4">
        <h1 className="text-3xl font-bold mb-8 text-[var(--foreground)]" style={{ fontFamily: 'Manrope, sans-serif' }}>
          Random Books
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {books.map((book, idx) => (
            <BookCard
              key={idx}
              image={book.coverImage}
              title={book.title}
              author={book.author}
            />
          ))}
        </div>
      </div>
    </div>
  );
} 
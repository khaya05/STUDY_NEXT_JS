import getWikiResults from '@/lib/getWikiResults';
import Item from '../components/Item';

type Props = {
  params: {
    searchTerm: string;
  };
};

export async function generatedMetadata({ params: { searchTerm } }: Props) {
  const wikiData: Promise<SearchResult> = getWikiResults(searchTerm);
  const data = await wikiData;
  const displayTerm = searchTerm.replaceAll('%20', ' ');

  if (!data?.query?.pages) {
    return {
      title: `${displayTerm} Not Found`,
    };
  }

  return {
    title: displayTerm,
    description: `Search results fro ${displayTerm}`,
  };
}

export default async function SearchResultsPage({
  params: { searchTerm },
}: Props) {
  const wikiData: Promise<SearchResult> = getWikiResults(searchTerm);
  const data = await wikiData;
  const results: Result[] | undefined = data?.query?.pages;

  return (
    <main className="bg-slate-200 mx-auto max-w-lg py-1">
      {results ? (
        Object.values(results).map((result) => {
          return <Item key={result.pageid} result={result} />;
        })
      ) : (
        <h2 className="p-2 text-xl">{`${searchTerm} Not Found`}</h2>
      )}
    </main>
  );
}

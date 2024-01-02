import { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { Search } from "@/components/Search/Search";
import { Tiles } from "@/components/Tiles/Tiles";
import { QUERY_KEYS } from "@/const/queryKeys";
import useDebounce from "@/hooks/useDebounce";
import { fetchSearchQuery } from "@/services/api";
import { SearchResult } from "@/types/searchResult";

function Home() {
  const [searchValue, setSearchValue] = useState("");
  const [searchResults, setSearchResults] = useState<SearchResult>({
    page: 0,
    total_pages: 0,
    total_results: 0,
    results: [],
  });
  const searchDebouncedValue = useDebounce(searchValue, 500);

  const { data, refetch } = useQuery({
    queryKey: [QUERY_KEYS.SEARCH],
    queryFn: () => fetchSearchQuery(searchDebouncedValue),
    enabled: false,
  });

  useEffect(() => {
    if (data) {
      setSearchResults(data);
    }
  }, [data]);

  useEffect(() => {
    if (searchDebouncedValue.length > 3) {
      refetch();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchDebouncedValue]);

  return (
    <>
      <Search onChangeHandler={setSearchValue} />
      <Tiles searchResults={searchResults} />
    </>
  );
}

export default Home;

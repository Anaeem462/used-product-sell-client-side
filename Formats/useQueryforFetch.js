import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useQuery } from "@tanstack/react-query";

const queryclient = new QueryClient();
<QueryClientProvider client={queryclient}></QueryClientProvider>;

const { data, isLoading, refetch } = useQuery({
    queryKey: [],
    queryFn: async () => {
        const res = await fetch();
        const data = await res.json();
        return data;
    },
});

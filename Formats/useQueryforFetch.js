import { useQuery } from "@tanstack/react-query";

const { data: specialities = [], isLoading } = useQuery({
    queryKey: ["speciality"],
    queryFn: async () => {
        const res = await fetch(`http://localhost:5000/appointment-Speciality`);
        const data = await res.json();
        return data;
    },
});

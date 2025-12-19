import { useQuery } from "@tanstack/react-query";
import { fetchPhoneCodes } from "../api/FetchPhoneCodes";



export function usePhoneCodes() {
    return useQuery({
        queryKey: ["phone-codes"],
        queryFn: fetchPhoneCodes,
        staleTime: 1000 * 60 * 60,
    })
}
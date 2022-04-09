import useSWR from 'swr'
import { Api } from '../api/Api'

export function useAxios(url){
    const {data, error, mutate} = useSWR(
        url, 
        async(url) =>{
            const response = await Api.get(url)

            return response.data
        }
    )
    return { data, error, mutate}
}


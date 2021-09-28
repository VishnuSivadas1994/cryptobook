import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const cryptoApiHeaders = {
    'x-rapidapi-host': 'coinranking1.p.rapidapi.com',
    'x-rapidapi-key': 'd795149401msha79e75d7202b7d0p1a1d38jsne9edbd918063'
};

const baseUrl = 'https://coinranking1.p.rapidapi.com/coins';


const createRequest = (url) => ({ url, headers: cryptoApiHeaders });

export const cryptoApi = createApi({
    reducerPath: 'cryptoApi',
    baseQuery: fetchBaseQuery({ baseUrl }),
    endpoints: (builder) => ({
        getCryptos: builder.query({
            query: (count) => createRequest(`/?limit=${count}`),
        })
    })
});

export const {
    useGetCryptosQuery,
} = cryptoApi;



//import React from 'react';
import {createApi,fetchBaseQuery} from '@reduxjs/toolkit/query/react';

const rapidAPiKey = import.meta.env.VITE_Rapid_APIKey;
export const articleApi = createApi({
    reducerPath :'articleApi',
    baseQuery:fetchBaseQuery({
        baseUrl: "https://article-extractor-and-summarizer.p.rapidapi.com/",
        prepareHeaders:(headers) =>{
            headers.set('content-type','application/octet-stream');
            headers.set('X-RapidAPI-Key',rapidAPiKey);
            headers.set('X-RapidAPI-Host','article-extractor-and-summarizer.p.rapidapi.com');

            return headers;
        }
    }),
    endpoints:(builder)=>({
        getSummary :builder.query({
            query: (params) => `summarize?url=${encodeURIComponent(params.articleURL)}&length=3`,
        })
    })
})

export const {useLazyGetSummaryQuery} = articleApi;

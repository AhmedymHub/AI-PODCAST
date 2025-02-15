"use client";

import EmptyState from '@/components/EmptyState'
import LoaderSpinner from '@/components/LoaderSpinner';
import PodcastCard from '@/components/PodcastCard';
import Searchbar from '@/components/Searchbar';
import { api } from '@/convex/_generated/api'
import { useQuery } from 'convex/react'
import React from 'react'

const Discover = ({ searchParams: { search } }: { searchParams : {search: string }}) => {
  const podcastsData = useQuery(api.podcast.getPodcastBySearch, { search: search || ''})

  return (
    <div className="flex flex-col gap-9">
      {/* <Image src="/icons/logo.svg" alt="logo" width={23} height={27} /> */}
      <Searchbar />
       <div className="flex flex-col gap-9">
        <h1 className="text-20 font-bold text-white-1">
          {!search ? 'Discover Trending Podcasts' :
          'Search results for '}
          {search && <span className="text-lime-500">
            {search}</span>}
        </h1>
        {podcastsData ? (
          <>
          {podcastsData.length > 0 ? (
           <div className='podcast_grid'>
            {podcastsData?.map(({_id, podcastTitle, podcastDescription, imageUrl }) => (
             <PodcastCard
               key={_id}
               imgUrl={imageUrl!}
               title={podcastTitle}
               description={podcastDescription}
               podcastId={_id}
               />
            ))}
   
            </div>
          ): <EmptyState title="No result found" />}
          </>
        ): <LoaderSpinner />}
       </div>
    </div>
  )
}

export default Discover
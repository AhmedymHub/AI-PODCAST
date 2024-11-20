"use client";

import PodcastCard from '@/components/PodcastCard'
import { Button } from '@/components/ui/button'
import React from 'react'
import { useQuery } from "convex/react";
import { api } from "@/convex/_generated/api";
import Image from 'next/image';


const Home = () => {
  const trendingPodcasts = useQuery(api.podcast.getTrendingPodcasts);

  return (
    <div className="mt-9 flex-col gap-9">
      <section className='flex flex-col gap-5'>
      <Image src="/icons/home-icon.svg" alt="logo" width={23} height={27} />
        <h1 className='text-20 font-bold
         text-white-1'>Trending Podcast</h1>

         <div className='podcast_grid'>
         {trendingPodcasts?.map(({_id, podcastTitle, podcastDescription, imageUrl }) => (
          <PodcastCard
            key={_id}
            imgUrl={imageUrl!}
            title={podcastTitle}
            description={podcastDescription}
            podcastId={_id}
            />
         ))}

         </div>
      </section>
    </div>
  )
}

export default Home
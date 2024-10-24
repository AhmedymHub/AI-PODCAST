import React from 'react'

const PodcastDetails = ({params }: { params: { PodcastId: string } }) => {
  return (
    <p className='text-white-1'>PodcastDetails for {params.PodcastId}</p>
  )
}

export default PodcastDetails
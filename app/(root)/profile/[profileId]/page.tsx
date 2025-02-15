"use client";

import { useQuery } from "convex/react";

import EmptyState from "@/components/EmptyState";
import LoaderSpinner from "@/components/LoaderSpinner";
import PodcastCard from "@/components/PodcastCard";
import ProfileCard from "@/components/ProfileCard";
import { api } from "@/convex/_generated/api";

const ProfilePage = ({
  params,
}: {
  params: {
    profileId: string;
  };
}) => {
  const user = useQuery(api.users.getUserById, {
    clerkId: params.profileId,
  });
  const podcastsData = useQuery(api.podcast.getPodcastByAuthorId, {
    authorId: params.profileId,
  });

  if (!user || !podcastsData) return <LoaderSpinner />;

  return (
    <section className="mt-9 flex flex-col">
      <h1 className="text-20 font-bold text-white-1 max-md:text-center">
        Podcaster Profile
      </h1>
      <div className="mt-6 flex flex-col gap-6 max-md:items-center md:flex-row">
        <ProfileCard
          podcastData={podcastsData}
          imageUrl={user.imageUrl || "/default-profile.png"} // Handle fallback
          userFirstName={user.name || "Unknown"} // Handle fallback
        />
      </div>
      <section className="mt-9 flex flex-col gap-5">
        <h1 className="text-20 font-bold text-white-1">All Podcasts</h1>
        {podcastsData.podcasts && podcastsData.podcasts.length > 0 ? (
          <div className="podcast_grid">
            {podcastsData.podcasts.slice(0, 4).map((podcast) => (
              <PodcastCard
                key={podcast._id}
                imgUrl={podcast.imageUrl || "/default-podcast-image.png"} // Handle fallback
                title={podcast.podcastTitle || "Untitled Podcast"} // Handle fallback
                description={podcast.podcastDescription || "No description available"} // Handle fallback
                podcastId={podcast._id}
              />
            ))}
          </div>
        ) : (
          <EmptyState
            title="You have not created any podcasts yet"
            buttonLink="/create-podcast"
            buttonText="Create Podcast"
          />
        )}
      </section>
    </section>
  );
};

export default ProfilePage;


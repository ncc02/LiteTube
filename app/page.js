"use client";
import { useEffect, useState } from "react";
import axios from "axios";
import Card from "./components/card";

export default function Home() {
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get(process.env.NEXT_PUBLIC_API_VIDEOS)
      .then((response) => {
        console.log(response.data.results);
        setVideos(response.data.results);
        setLoading(false);
      })
      .catch((error) => setError(error.message));
  }, []);

  if (error) {
    return <div className="text-red-500">Error: {error}</div>;
  }

  if (loading) {
    return (
      <div className="pl-8">
        <span className="loading loading-bars loading-lg"></span>{" "}
      </div>
    );
  }

  return (
    <div className="flex justify-around bg-[#171717]">
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 ">
        {videos.map((video) => (
          <Card
            key={video.id}
            image={video.thumbnail}
            id={video.id}
            title={video.title}
            description={video.description}
            img={video.thumbnail}
          />
        ))}
      </div>
    </div>
  );
}

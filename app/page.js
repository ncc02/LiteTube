"use client";
import { useEffect, useState } from "react";
import axios from "axios";
import Card from "./components/card";

export default function Home() {
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [next, setNext] = useState(null);
  const [back, setBack] = useState(null);
  const [url, setUrl] = useState(process.env.NEXT_PUBLIC_API_VIDEOS);

  const handleLeftClick = () => {
    if (back != null) setUrl(back);
  };

  const handleRightClick = () => {
    if (next != null) setUrl(next);
  };

  useEffect(() => {
    axios
      .get(url)
      .then((response) => {
        console.log(response.data.results);
        setVideos(response.data.results);
        setNext(response.data.next);
        setBack(response.data.previous);
        setLoading(false);
      })
      .catch((error) => setError(error.message));
  }, [url]);

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
    <div className="flex flex-col items-center min-h-screen bg-[#171717]">
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 pt-4">
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

      <div className="flex justify-center space-x-4 py-4">
        <button
          onClick={handleLeftClick}
          className="btn bg-[#262626] hover:bg-[#444444]"
        >
          «
        </button>
        <button
          onClick={handleRightClick}
          className="btn bg-[#262626] hover:bg-[#444444]"
        >
          »
        </button>
      </div>
    </div>
  );
}

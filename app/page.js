'use client'
import { useEffect, useState } from "react";
import axios from "axios";
import Card from "./components/card";

export default function Home() {

  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {

    axios.get(process.env.NEXT_PUBLIC_API_VIDEOS)
    .then((response) => {
      console.log(response.data.results);
      setVideos(response.data.results);
      setLoading(false);
    })
    .catch((error) => setError(error.message));

  },[]);


  if (error) {
    return <div className="text-red-500">Error: {error}</div>;
  }

  if (loading) {
    return <div className="text-white">Loading...</div>;
  }


  return (
    <div className="sm:px-4 sm:py-0 bg-[#171717]">
      <div className="grid grid-cols-2 md:grid-cols-6 gap-4 gap-y-4 md:pl-1 pl-2">
        {videos.map((video) => (
          <Card key={video.id} title={video.title} description={video.description} img={video.thumbnail} />
        ))}
      </div>
    </div>
  );
  
}

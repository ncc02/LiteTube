"use client";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import Video from "../components/video";
import axios from "axios";

export default function Page() {
  const url = usePathname();

  const [video, setVideo] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get(process.env.NEXT_PUBLIC_API_VIDEOS + url)
      .then((response) => {
        console.log(response.data);
        setVideo(response.data);
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
    <main>
      <div className="m-6">
        <Video
          video_file={video.video_file}
          title={video.title}
          description={video.description}
        />
      </div>
    </main>
  );
}

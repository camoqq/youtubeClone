import { formatDistanceToNow } from "date-fns";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";

type VideoProps = {
  id: string;
  title: string;
  channel: {
    id: string;
    name: string;
    profileUrl: string;
  };
  views: number;
  postedAt: Date;
  duration: number;
  thumbnailUrl: string;
  videoUrl: string;
};

const VideoGridItem = ({
  id,
  title,
  channel,
  views,
  postedAt,
  thumbnailUrl,
  videoUrl,
}: VideoProps) => {
  const [isVideoPlaying, setisVideoPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current == null) return; // not on hover

    //on hover
    if (isVideoPlaying) {
      videoRef.current.play();
      videoRef.current.currentTime = 0;
    } else {
      videoRef.current.pause();
    }
  }, [isVideoPlaying]);

  const relativePostedAt = formatDistanceToNow(new Date(postedAt), {
    addSuffix: true,
  });

  const formatViews = (views: number) => {
    const viewsNumber = parseInt(String(views).replace(/,/g, "")); // Remove commas and convert to number

    if (viewsNumber >= 1000000) {
      return (viewsNumber / 1000000).toFixed(1) + "M";
    } else if (viewsNumber >= 1000) {
      return (viewsNumber / 1000).toFixed(1) + "K";
    } else {
      return viewsNumber.toString();
    }
  };

  return (
    <div
      className="flex flex-col gap-2 pr-4"
      onMouseEnter={() => setisVideoPlaying(true)}
      onMouseLeave={() => setisVideoPlaying(false)}
    >
      <a href={`/watch?v=${id}`} className="relative aspect-video ">
        <Image
          src={thumbnailUrl}
          alt="thumbnail"
          className={`block w-full h-full object-cover rounded-xl transition-[border-radius] ${
            isVideoPlaying ? "rounded-none" : "rounded-xl"
          }  `}
          width={200}
          height={200}
        />
        <video
          src={videoUrl}
          ref={videoRef}
          muted
          playsInline
          className={`block h-full object-cover absolute inset-0 transition-opacity duration-200 ${
            isVideoPlaying ? "opacity-100" : "opacity-0"
          }`}
        ></video>
      </a>
      <div className="absolute bottom-1 right-1 bg-slate-500 text-sm px-0.5 text-white rounded">
        {channel.name}
      </div>

      <div className="flex gap-2">
        <a href={`/@${channel.id}`} className="flex-shrink-0">
          <Image
            alt="alt"
            className="rounded-full"
            src={channel.profileUrl}
            width={30}
            height={30}
          ></Image>
        </a>
        <div className="flex flex-col">
          <a href={`/watch?v=${id}`} className="font-bold">
            {title}
          </a>
          <a href={`@${channel.id}`} className="text-gray-500 text-sm">
            {channel.name}
          </a>
          <div className="flex align-items-center">
            <p className="text-gray-500 text-sm">{formatViews(views)} views</p>
            <p className="text-gray-500  transform -translate-y-3 text-2xl">
              &nbsp;.&nbsp;
            </p>
            <p className="text-gray-500 text-sm">
              {/* {postedAt.toLocaleString()} */}
              {relativePostedAt}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoGridItem;

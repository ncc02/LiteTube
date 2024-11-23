import React, { useRef, useState } from "react";

export default function Video({ video_file, title, description }) {
  return (
    <div className="flex flex-col">
      {/* Video */}
      <div className="w-full lg:w-8/12 mb-4">
        <video width="1600" controls>
          <source src={video_file} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      {/* Title và Description */}
      <div className="w-full lg:w-8/12">
        <h1 className="text-xl font-bold mb-2">{title}</h1>
        <span className="text-xs">
          {description.split("\r\n").map((line, index) => (
            <span key={index}>
              {line.split("\t").map((part, partIndex) => (
                <React.Fragment key={partIndex}>
                  {part}
                  {partIndex < line.split("\t").length - 1 && (
                    <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
                  )}
                </React.Fragment>
              ))}
              <br />
            </span>
          ))}
        </span>
      </div>
    </div>
  );
}

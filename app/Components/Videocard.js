// "use client";
// import Image from "next/image";
// import { Cloudinary } from "@cloudinary/url-gen";
// import { useRef } from "react";
// const cld = new Cloudinary({
//   cloud: {
//     cloudName: "duavblp7s",
//   },
//   url: {
//     secure: true, // force https, set to false to force http
//   },
// });
// const VideoCard = ({ video }) => {
//   const playerRef = useRef();

//   function onMouseOver() {
//     playerRef.current.videoRef.current.play();
//   }

//   function onMouseOut() {
//     playerRef.current.videoRef.current.pause();
//   }

//   return (
//     <div
//       className={styles.video}
//       onMouseOver={onMouseOver}
//       onMouseOut={onMouseOut}
//     >
//       <AdvancedImage
//         cldImg={cld
//           .image(video.id)
//           .setAssetType("video")
//           .delivery("q_auto")
//           .format("auto:image")}
//       />
//       <AdvancedVideo
//         ref={playerRef}
//         loop
//         muted
//         width='100%'
//         cldVid={cld
//           .video(video.id)
//           .effect("e_preview:duration_4")
//           .delivery("q_auto")
//           .format("auto")}
//         plugins={[lazyload()]}
//       />

//       <h3 className={styles.videoTitle}>
//         <a href={video.link} rel='noreferrer'>
//           {video.title}
//         </a>
//       </h3>
//     </div>
//   );
// };
// export default VideoCard;

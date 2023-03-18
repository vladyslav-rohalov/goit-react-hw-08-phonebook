import React, { useEffect, useState, useRef } from 'react';
import {
  Container,
  Video,
  Canvas,
  ButtonPhoto,
  ButtonGallery,
  IconGallery,
} from './camera.styled';

export default function Camera() {
  const [gallery, setGallery] = useState([]);
  const videoRef = useRef(null);
  const photoRef = useRef(null);
  // const stripRef = useRef(null);

  useEffect(() => {
    getVideo();
  }, [videoRef]);

  const getVideo = () => {
    navigator.mediaDevices
      .getUserMedia({
        video: {
          width: { min: 360, ideal: 720, max: 980 },
          height: { min: 640, ideal: 1280, max: 1920 },
          facingMode: 'user',
        },
      })
      .then(stream => {
        let video = videoRef.current;
        video.srcObject = stream;
        video.play();
      })
      .catch(err => {
        throw new Error(err);
      });
  };

  // const getVideo = () => {
  //   navigator.mediaDevices
  //     .getUserMedia({ video: { width: 300 } })
  //     .then(stream => {
  //       let video = videoRef.current;
  //       video.srcObject = stream;
  //       video.play();
  //     })
  //     .catch(err => {
  //       console.error('error:', err);
  //     });
  // };

  const paintToCanvas = () => {
    let video = videoRef.current;
    let photo = photoRef.current;
    let ctx = photo.getContext('2d');
    const width = 720;
    const height = 1280;
    photo.width = width;
    photo.height = height;
    return setInterval(() => {
      ctx.drawImage(video, 0, 0, width, height);
    }, 200);
  };

  // const paintToCanvas = () => {
  //   let video = videoRef.current;
  //   let photo = photoRef.current;
  //   let ctx = photo.getContext('2d');

  //   const width = 320;
  //   const height = 240;
  //   photo.width = width;
  //   photo.height = height;

  //   return setInterval(() => {
  //     ctx.drawImage(video, 0, 0, width, height);
  //   }, 200);
  // };

  const takePhoto = () => {
    let photo = photoRef.current;
    const data = photo.toDataURL('image/jpeg');
    const image = { src: data };
    setGallery([...gallery, image]);
    console.log(gallery);
  };

  // const takePhoto = () => {
  //   let photo = photoRef.current;
  //   let strip = stripRef.current;

  //   console.warn(strip);

  //   const data = photo.toDataURL('image/jpeg');

  //   console.warn(data);
  //   const link = document.createElement('a');
  //   link.href = data;
  //   link.setAttribute('download', 'myWebcam');
  //   link.innerHTML = `<img src='${data}' alt='thumbnail'/>`;
  //   strip.insertBefore(link, strip.firstChild);
  // };

  return (
    <Container>
      <Video onCanPlay={() => paintToCanvas()} ref={videoRef} />
      <Canvas ref={photoRef} />
      <ButtonGallery type="button">
        <IconGallery />
      </ButtonGallery>
      <ButtonPhoto type="button" onClick={() => takePhoto()}></ButtonPhoto>
      {/* <button onClick={() => takePhoto()}>Take a photo</button>
      <video onCanPlay={() => paintToCanvas()} ref={videoRef} />
      <canvas ref={photoRef} />
      <div>
        <div ref={stripRef} />
      </div> */}
    </Container>
  );
}

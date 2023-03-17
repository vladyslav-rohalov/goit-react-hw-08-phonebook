import styled from '@emotion/styled';
import { GrGallery } from 'react-icons/gr';

export const Container = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
`;

export const Frame = styled.iframe`
  border-top-left-radius: 1.2em;
  border-top-right-radius: 1.2em;
`;

export const Video = styled.video`
  position: absolute;
  width: 300px;
  height: 95%;
  object-fit: cover;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
`;

export const Canvas = styled.canvas`
  display: none;
`;

export const ButtonPhoto = styled.button`
  position: absolute;
  bottom: 7%;
  left: 50%;
  transform: translate(-50%, -7%);
  width: 56px;
  height: 56px;
  border-radius: 50%;
  border: none;
  background: #ffffffcc;
  z-index: 2;
  cursor: pointer;
`;

export const ButtonGallery = styled.button`
  position: absolute;
  bottom: 7%;
  left: 20%;
  transform: translate(-50%, -7%);
  width: 56px;
  height: 56px;
  border-radius: 50%;
  border: none;
  z-index: 2;
  background: transparent;
`;

export const IconGallery = styled(GrGallery)`
  width: 100%;
  height: 100%;
  fill: #ffffff;
`;

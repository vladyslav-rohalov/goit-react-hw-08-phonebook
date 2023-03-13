import styled from '@emotion/styled';

const backdrop = require('../../backdrop.webp');

export const Container = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  left: 0;
  background-color: black;
  height: 100%;
  width: 100%;
  border-radius: 1.125em;
  background-image: url(${backdrop});
  background-size: cover;
  overflow-y: auto;
  &::-webkit-scrollbar {
    width: 0px;
    height: 0px;
  }
`;

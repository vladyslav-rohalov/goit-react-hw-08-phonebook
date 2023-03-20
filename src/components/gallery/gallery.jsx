import { Container } from './gallery.styled';
import 'react-image-gallery/styles/css/image-gallery.css';
import { Gallery } from 'react-grid-gallery';

export default function GalleryMobile({ gallery }) {
  const images = [];

  gallery.map(image => {
    return images.push({
      src: image.src,
      width: 320,
      height: 240,
    });
  });

  return (
    <Container>
      <Gallery images={images} />
    </Container>
  );
}

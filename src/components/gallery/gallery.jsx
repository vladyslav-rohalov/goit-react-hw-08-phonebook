import { Container } from './gallery.styled';
import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';

export default function Gallery({ gallery }) {
  const images = [];
  gallery.map(image => {
    return images.push({
      original: image.src,
      thumbnail: image.src,
      originalHeight: 500,
      originalWidth: '100%',
      originalClass: 'featured-slide',
      thumbnailHeight: 60,
      thumbnailWidth: 40,
    });
  });

  return (
    <Container>
      <ImageGallery items={images} />
    </Container>
  );
}

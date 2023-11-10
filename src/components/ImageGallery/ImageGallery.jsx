import { ImageGalleryItem } from '../ImageGalleryItem/ImageGalleryItem';



export const ImageGallery = ({ galleryItems }) => {
  return (
    <ul>
      {galleryItems.map(galleryItem => {
        return (
          <ImageGalleryItem key={galleryItem.id} galleryItem={galleryItem} />
        );
      })}
    </ul>
  );
};
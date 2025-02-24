import Zoom from 'react-medium-image-zoom';
import 'react-medium-image-zoom/dist/styles.css';
import { Box } from '@mui/material';
import { FC } from 'react';
import Image from 'next/image';

interface Props {
  src: string;
  alt: string;
  width?: number;
}

const ZoomableImage: FC<Props> = ({src, alt, width}) =>  {
  return (
    <Box display="flex" justifyContent="center">
      <Zoom>
        <Image
          src={src}
          alt={alt}
          fill
          style={{ borderRadius: '8px', cursor: 'pointer', objectFit: 'cover' }}
        />
      </Zoom>
    </Box>
  );
}

export default ZoomableImage
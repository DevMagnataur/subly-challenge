import React from 'react';
import { Card, CardContent, CardMedia, Typography } from '@mui/material';

interface ImageCardProps {
  image: string;
  title: string;
  subtitle: string;
}

const ImageCard: React.FC<ImageCardProps> = ({ image, title, subtitle }) => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="140"
        image={image}
        alt={title}
      />
      <CardContent>
        <Typography variant="h6" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {subtitle}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default ImageCard;

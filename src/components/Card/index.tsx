import React from 'react';
import { Card, CardContent, CardMedia, Typography } from '@mui/material';

interface IProps {
  cover: string;
  name: string;
  last_editied: string;
}

const ImageCard: React.FC<IProps> = (props) => {
  const { cover, name, last_editied } = props
   return (
    <Card sx={{ maxWidth: 345, borderRadius: 2, boxShadow: 3 }}>
      <CardMedia
        component="img"
        height="200"
        image={cover}
        alt={'img'}
      />
      <CardContent>
        <Typography variant="h6" component="div" gutterBottom>
          {name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {last_editied}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default ImageCard;

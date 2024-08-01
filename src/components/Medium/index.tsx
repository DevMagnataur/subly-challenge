import React from 'react';
import { Container, Grid } from '@mui/material';
import Card from '../Card';
import { IMedium } from '../../types';

interface IProps {
  media: IMedium[];
}

const Medium: React.FC<IProps> = (props) => {
  const { media } = props;
  return (
    <Container>
      <Grid container spacing={4}>
        {media.map((medium) => (
          <Grid item key={medium.id} xs={12} sm={6} md={4}>
            <Card
              cover={medium.cover}
              name={medium.name}
              last_editied={medium.updatedAt}
            />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Medium;

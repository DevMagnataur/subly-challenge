import React from 'react';
import { Container, Grid } from '@mui/material';
import Card from '../Card';
import { Medium } from '../../types';

interface IProps {
  media: Medium[];
}

const ParentComponent: React.FC<IProps> = (props) => {
  const { media } = props;
  return (
    <Container>
      <Grid container spacing={4}>
        {media.map((medium) => (
          <Grid item key={medium.id} xs={12} sm={6} md={4}>
            <Card
              cover={medium.cover}
              name={medium.name}
              last_editied={'xyz'}
            />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default ParentComponent;

import React from 'react';
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Box,
  Button,
  IconButton,
  LinearProgress,
} from '@mui/material';
import { calculateTime } from '../../utils/date.utils';
import { Delete, Edit, Translate } from '@mui/icons-material';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import { IStatus } from '../../types';

interface IProps {
  cover: string;
  name: string;
  last_editied: string;
  status: IStatus;
  languages: string[];
}

const StatusCard: React.FC<IProps> = (props) => {
  const { cover, name, last_editied, status } = props;
  const [hover, setHover] = React.useState(false);
  return (
    <>
      <Card
        sx={{
          maxWidth: 345,
          position: 'relative',
          overflow: 'hidden',
        }}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        {status == IStatus.READY ? (
          <>
            <CardMedia
              sx={{
                filter: hover ? 'blur(4px)' : 'none',
              }}
              component='img'
              height='200'
              image={cover}
              alt={'img'}
            />
            {hover && (
              <Box
                sx={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'white',
                }}
              >
                <Button
                  variant='outlined'
                  startIcon={<Edit />}
                  sx={{
                    mb: 2,
                    borderColor: 'white',
                    color: 'white',
                    '&:hover': {
                      borderColor: 'white',
                      color: 'white',
                    },
                  }}
                >
                  Edit
                </Button>
                <IconButton
                  sx={{
                    position: 'absolute',
                    top: 8,
                    right: 8,
                    color: 'white',
                  }}
                >
                  <Delete />
                </IconButton>
                <Box
                  sx={{
                    position: 'absolute',
                    top: 8,
                    left: 8,
                    backgroundColor: '#8253EE',
                    pl: 1,
                    borderRadius: 1,
                    display: 'flex',
                    alignItems: 'center',
                  }}
                >
                  <Translate sx={{ mr: 1 }} />
                  <Box
                    sx={{
                      backgroundColor: 'white',
                      p: 1,
                    }}
                  >
                    <Typography variant='body2' color='text.primary'>
                      {props.languages.length} languages
                    </Typography>
                  </Box>
                </Box>
              </Box>
            )}
          </>
        ) : status == IStatus.TRANSCRIBING ? (
          <>
            <CardMedia
              component='img'
              height='200'
              image={cover}
              alt={'das'}
              sx={{ filter: 'brightness(50%)' }}
            />
            <Box
              sx={{
                position: 'absolute',
                top: -90,
                left: 0,
                right: 0,
                bottom: 0,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'white',
              }}
            >
              <Typography variant='h6' component='div'>
                Transcribing subtitles
              </Typography>
              <Typography variant='body2' component='div' mb={2}>
                {name}
              </Typography>
              <LinearProgress
                sx={{ width: '80%', color: '#8253EE', height: '4px' }}
                variant='indeterminate'
              />
            </Box>
          </>
        ) : (
          <CardContent sx={{ backgroundColor: '#ffe6e6', height: '170px' }}>
            <Box display='flex' alignItems='center' mb={2}>
              <ErrorOutlineIcon sx={{ color: '#d32f2f', mr: 1 }} />
              <Typography variant='body1' color='textPrimary'>
                An error occurred while processing your file. Delete file to try
                again, and report issue if the problem persists.
              </Typography>
            </Box>
            <Box display='flex' justifyContent='end'>
              <Button
                sx={{
                  mr: 1,
                }}
                size='small'
                variant='outlined'
                color='error'
              >
                Delete file
              </Button>
              <Button
                size='small'
                variant='contained'
                color='primary'
                sx={{ backgroundColor: '#6f42c1' }}
              >
                Report issue
              </Button>
            </Box>
          </CardContent>
        )}
        <Box
          sx={{
            p: 2,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
          }}
        >
          <Typography variant='subtitle1' component='div'>
            {name}
          </Typography>
          <Typography variant='body2' color='textSecondary'>
            {calculateTime(last_editied)}
          </Typography>
        </Box>
      </Card>
    </>
  );
};

export default StatusCard;

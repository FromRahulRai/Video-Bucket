import React from 'react'
import { Box, Typography, CardContent, CardMedia } from '@mui/material'
import { Link } from 'react-router-dom'
import { demoProfilePicture } from '../utils/constants'

const ChannelCard = ({ channelDetail, marginTop }) =>
(
  <Box
    sx={{
      boxShadow: 'none',
      borderRadisu: '20px',
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      width: { xs: '356px', md: '320px' },
      height: '326px',
      margin: 'auto',
      marginTop
    }}
  >
    <Link to={`/channel/${channelDetail?.id?.channelId}`}>
      <CardContent sx={{ display: 'flex', flexDirection: "coulmn", justifyContent: "center", textAlign: "center", color: "#fff" }}>
        <CardMedia
          image={channelDetail?.snippet?.thumbnails?.high?.url || demoProfilePicture}
          alt={channelDetail?.snippet?.title}
          sx={{ borderRadius: "50%", height: '180px', width: '180px', mb: 2, border: '1px solid #e3e3e3' }}
        />
        <Typography variant='h6' marginTop='67px' marginLeft='20px'>

          {channelDetail?.snippet?.title}

          {channelDetail?.statistics?.subscriberCount && (

            <Typography sx={{ fontSize: '15px', fontWeight: 500, color: 'white' }}>

              {parseInt(channelDetail?.statistics?.subscriberCount).toLocaleString()} Subscribers

            </Typography>
          )}
        </Typography>

      </CardContent>
    </Link>
  </Box>
)


export default ChannelCard
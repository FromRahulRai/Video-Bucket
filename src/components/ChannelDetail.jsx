import React from 'react'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Box } from '@mui/material'
import { Videos, ChannelCard } from './'
import { fetchFromAPI } from '../utils/fetchFromAPI'

const ChannelDetail = () => {

  const [channelDeatil, setChannelDetail] = useState(null)
  const [videos, setVideos] = useState([])

  const { id } = useParams()

  useEffect(() => {

    fetchFromAPI(`channels?part=snippet&id=${id}`)
      .then((data) => setChannelDetail(data?.items[0]))

    fetchFromAPI(`search?channelId=${id}&part=snippet&order=date`)
      .then((data) => setVideos(data?.items))

  }, [id])

  return (
    <Box minHeight="95vh" >
      <Box>
        <div style={{
          background: 'linear-gradient(90deg, rgba(102,165,194,1) 0%, rgba(249,128,90,1) 74%, rgba(224,45,146,1) 100%)',
          zIndex: 10,
          height: '300px'
        }} />
        <ChannelCard channelDetail={channelDeatil} marginTop='-155px' />
      </Box>
      <Box p={2} display="flex" >
        <Box sx={{ mr: { sm: '100px' } }} />
        <Videos videos={videos} />
      </Box>

    </Box>
  )
}


export default ChannelDetail
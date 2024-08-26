import * as React from 'react'
import ImageList from '@mui/material/ImageList'
import ImageListItem from '@mui/material/ImageListItem'

import image1 from '../../assets/image1.jpg'
import image2 from '../../assets/image2.jpg'
import image3 from '../../assets/image3.jpg'
import image4 from '../../assets/image4.jpg'
import image5 from '../../assets/image5.jpg'
import image6 from '../../assets/image6.jpg'

function srcset(image, size, rows = 1, cols = 1) {
  return {
    src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${size * cols}&h=${size * rows
      }&fit=crop&auto=format&dpr=2 2x`,
  };
}

export default function QuiltedImageList() {
  return (
    <>



      {/* <video style={{marginTop:"15px"}} width ='100%' height="600px" objectFit = 'cover' controls autoPlay muted loop>
           <source src={require('../../assets/home.webm')} type='video/webm' />
    </video> */}
      <div>
        <video style={{ marginTop: "15px" }} width='100%' height="600px" controls autoPlay muted loop playsInline>
          <source src={require(`../../assets/home.mp4`)} type="video/mp4" />
        </video>

      </div>

      <ImageList
        sx={{ width: "100%", height: 450 }}
        variant="quilted"
        cols={4}
        rowHeight={121}
      >
        {itemData.map((item) => (
          <ImageListItem key={item.img} cols={item.cols || 1} rows={item.rows || 1}>
            <img
              {...srcset(item.img, 121, item.rows, item.cols)}
              alt={item.title}
              loading="lazy"
            />
          </ImageListItem>
        ))}
      </ImageList>
    </>
  )
}

const itemData = [
  {
    img: image1,
    title: 'image1',
    rows: 2,
    cols: 2,
  },
  {
    img: image2,
    title: '',
  },
  {
    img: image3,
    title: '',
  },
  {
    img: image4,
    title: '',
    cols: 2,
  },
  {
    img: image5,
    title: '',
    cols: 2,
  },
  {
    img: image6,
    title: '',
    rows: 2,
    cols: 2,
  },
  {
    img: image6,
    title: '',
  },
  {
    img: image6,
    title: '',
  },
];


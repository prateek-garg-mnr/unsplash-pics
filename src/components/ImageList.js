// import './ImageList.css'
// import React from 'react'
// import ImageCard from './ImageCard'
// const ImageList=(props)=>{
//     const images = props.images.map((image)=>{
//         return (
//                 <ImageCard key={image.id} image={image} />
//             )
//     })
//     return (
//         <div className="image-list">
//             {images}
//         </div>
//     )
// }



// export default ImageList


// import './ImageList.css'

// using material-ui
import React from 'react'
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
// import ImageCard from './ImageCard'
const ImageList=(props)=>{
    const images = props.images.map((image)=>{
        return (

            <GridListTile cols={2} rows={2} key={image.id}>
            <img 
            alt ={image.description}
            src={image.urls.regular}
            />
            </GridListTile>
            
            )

    })
    return (
        <div>
      <GridList cellHeight={200} cols={4}>
        {images}
      </GridList>
    </div>
    )
}



export default ImageList
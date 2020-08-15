import React from 'react'
import unsplash from '../api/unsplash'
import SearchBar from './SearchBar'
import ImageList from './ImageList'

class App extends React.Component {


    state = {
        images: []
    }

    onSearchSubmit=async(term)=>{
        const images = await unsplash.get(`/search/photos`,{
            params:{
                query:term
            },
        })
        
        this.setState({
                images:images.data.results
            })
    }

    render(){
        return(
            <div className="ui container" style={{marginTop:'10px'}}>
            
                <SearchBar whenSubmit={this.onSearchSubmit}  />
                Found:{this.state.images.length} images
                <ImageList images={this.state.images}/>
            </div>)
    }
   
}

export default App
import axios from 'axios'

export default axios.create({
    baseURL:'https://api.unsplash.com',
    headers:{
        Authorization:'Client-ID ZSX1p0UjtlaaG8cJe3zIk1Nf42HuYKKyKkcl_i0QTpo'
    }
})
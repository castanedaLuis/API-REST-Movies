import { API_KEY } from "./secrets.js";

const URL = 'https://api.themoviedb.org/3'


async function getMovieTendenciasPreview(){
    const respuesta = await fetch(`${URL}/trending/movie/day?api_key=${API_KEY}`)
    const data = await respuesta.json()
    const movies = data.results
    console.log(movies);

    const arrayNodos = []
    const trendingPreviewMoviesContainer = document.querySelector('#trendingPreview .trendingPreview-movieList')
    trendingPreviewMoviesContainer.innerHTML = ''
    movies.forEach(movie =>{
        const movieContainer = document.createElement('div')
        movieContainer.classList.add('movie-container')

        const movieImg = document.createElement('img')
        movieImg.classList.add('movie-img')
        movieImg.setAttribute('alt', movie.title)
        movieImg.src= `https://image.tmdb.org/t/p/w300/${movie.poster_path}`

        movieContainer.appendChild(movieImg)
        arrayNodos.push(movieContainer)
    })
    trendingPreviewMoviesContainer.append(...arrayNodos)
}

async function getMovieCategoriesPreview(){
    const respuesta = await fetch(`${URL}/genre/movie/list?api_key=${API_KEY}`)
    const data = await respuesta.json()
    const categories = data.genres
    console.log(categories);

    const arrayNodos = []
    const previewCategoriesConteiner = document.querySelector('#categoriesPreview .categoriesPreview-list')
    previewCategoriesConteiner.innerHTML = ""

    categories.forEach(category =>{
        const categoryContainer = document.createElement('div')
        categoryContainer.classList.add('category-container')

        const categoryTitle = document.createElement('h3')
        categoryTitle.classList.add('category-title')
        categoryTitle.setAttribute('id', 'id'+category.id)

        const categoryTitleText = document.createTextNode(category.name)
        
        categoryTitle.appendChild(categoryTitleText)
        categoryContainer.appendChild(categoryTitle)
        arrayNodos.push(categoryContainer)
    })
    previewCategoriesConteiner.append(...arrayNodos)
}


export { getMovieCategoriesPreview, getMovieTendenciasPreview}


// getMovieTendenciasPreview()
// getMovieCategoriesPreview()
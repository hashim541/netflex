import { useEffect,useState } from 'react'
import './styleHome.css'
import GData from './movieGenresData'
import Footer from './components/Footer'
import NavbarMain from './components/NavbarMain'
import HeroSection from './components/HeroSection'
import EachSection from './components/EachGenre'
import VideoLayer from './components/VideoLayer'

export default function Home(){
    const [loading,setLoading]=useState(false)
    const homeGenreId=[28,35,27,18,9648,14,878]
    const homeData=[];
    const [mainData,setMainData]=useState([]);
    const [pickRandom,setPickRandom]=useState({})
    const tmdbApiKey='663b5f6d7ffe30b07a578d8f933ea791'
    const imgURL='https://image.tmdb.org/t/p/w1280'
    const smallImgURL='https://image.tmdb.org/t/p/w400'
    var today=new Date().getDay();
    const [videoL,setVideoL]=useState(false)
    const [videoData,setVideoData]=useState({
        adult: false,
        backdrop_path: "/628Dep6AxEtDxjZoGP78TsOxYbK.jpg",
        id: 575264,
        title: "Mission: Impossible - Dead Reckoning Part One",
        original_language: "en",
        original_title: "Mission: Impossible - Dead Reckoning Part One",
        overview: "Ethan Hunt and his IMF team embark on their most dangerous mission yet: To track down a terrifying new weapon that threatens all of humanity before it falls into the wrong hands. With control of the future and the world's fate at stake and dark forces from Ethan's past closing in, a deadly race around the globe begins. Confronted by a mysterious, all-powerful enemy, Ethan must consider that nothing can matter more than his mission—not even the lives of those he cares about most.",
        poster_path: "/NNxYkU70HPurnNCSiCjYAmacwm.jpg",
        media_type: "movie",
        genre_ids: [
            28,
            53
        ],
        popularity: 2568.301,
        release_date: "2023-07-08",
        video: false,
        vote_average: 7.719,
        vote_count: 1777
    })
    const GenresData=GData;



    async function trendingFetch(){
        const trending=`https://api.themoviedb.org/3/trending/movie/week?api_key=${tmdbApiKey}`
        try {
            const response = await fetch(trending);
            const gotData= await response.json();
            const movieList={
                id:1,
                genre:'Trending',
                result:gotData.results
            }
            setPickRandom(gotData.results[randomData()])
            if(!homeData.includes(movieList)){
                homeData.push(movieList)
            }
            
        } catch (error) {
            console.log(error);
        }
        setLoading(true)
    }
    
    async function genreFetch(id,genreType){
        const genreURL=`https://api.themoviedb.org/3/discover/movie?api_key=${tmdbApiKey}&with_genres=`
        try {
            const response = await fetch(genreURL+id)
            const data = await response.json();
            const movieList={
                id:id,
                genre:genreType,
                result:data.results
            }
            
            if(!homeData.includes(movieList)){
                homeData.push(movieList)
            }
        } catch (error) {
            console.log(error);
        }
    }
    function randomData(){
        const rand=Math.floor(Math.random()*20)
        return rand;
    }
    const apiKeys=[
        'AIzaSyCPWWRU7EpsbsyD0Uacxlw1DtqPnqezsd4',
        'AIzaSyC0V26G4aQcQ78mizKG1Q-4HkQzvxnrhfY',
        'AIzaSyDPncF-oUkWAsXx6Ja53ldB8NydVpuSqKo',
        'AIzaSyClPiBJh60mC4uDUwB9-6qlp-dhUtQVjb8',
        'AIzaSyDq4rRcqtHKkb3zP2optLrSs2FH85nbBWw',
        'AIzaSyDxl8mu89dEgRA3ZZfAr_XQGmNrDZWegkQ'
    ]
    const [key,setKey]=useState(apiKeys[0]);
    

    useEffect( ()=>{
        
        GenresData.map(gd =>{
            if(homeGenreId.includes(gd.id)){
                genreFetch(gd.id,gd.genre)
            }
        })
        setMainData(homeData)
        trendingFetch()
        setInterval(()=>{
            if(today!==new Date().getDay()){
                today=new Date().getDay();
                setKey(apiKeys[0])
            }
        },3600000)
        return () => {
            genreFetch();
            trendingFetch();
        };
        
    },[])

    function handelVideo(data){
        setVideoL(true);
        setVideoData(data)
    }

    if(loading){
        const newGenreData=[]
        const tempObj={}
        mainData.forEach( d=>{
            const key=d.id;
            if(!tempObj[key]){
                tempObj[key]=true
                newGenreData.push(d)
            }
        })
        newGenreData.sort()
        return (
            
            <main className='home-main'>
                <NavbarMain /> 
                
                <HeroSection data={pickRandom} imgURL={imgURL} handelVideo={handelVideo}/>
                <div className="home-genre">
                    {newGenreData.map(data =>(
                        <EachSection key={data.id} data={data} smallImgURL={smallImgURL} handelVideo={handelVideo} />
                    ))}
                </div>
                <Footer />
                <VideoLayer keyz={key} apiKeys={apiKeys} setKey={setKey} videoL={videoL} setVideoL={setVideoL}  data={videoData}/>
            </main>
        )
    }else{
        return(
            <main className='home-main'>
            </main>
        )
    }
    
    
}
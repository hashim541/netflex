import PlaySVG from "./PlaySVG"
import MoreInfo from "./MoreInfoSVG"

export default function HeroSection({data,imgURL,handelVideo}){
    return(
        <div className="hero-div">
            <img className="heroimg" src={imgURL+data.backdrop_path} alt="" />
            <div className="hero-img-layer"></div>
            <div className="img-content">
                <h2 className="hero-title">{data.title}</h2>
                <div className="hero-info">
                    <p className="hero-pop">{Math.floor(data.vote_average*10)}%</p>
                    <p className="hero-rel-date">{data.release_date}</p>
                </div>
                <p className="hero-desc">{data.overview.length >100 ?data.overview.slice(0,250)+' ...':data.overview}</p>
                <div className="btns">
                    <button className="play h-play" onClick={()=>handelVideo(data)}><PlaySVG /> Play</button>
                    <button className="more h-more"><MoreInfo /> More Info</button>
                </div>
            </div>
        </div>
    )
}
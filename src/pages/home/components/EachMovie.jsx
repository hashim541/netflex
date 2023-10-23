import PlaySVG from "./PlaySVG";

export default function EachMovie({data ,smallImgURL,handelVideo}){
    return(
        <div className="each-movie">
            <img className="movie-image" src={smallImgURL+data.backdrop_path} alt="" />
            <div className="movie-info">
                <p className="movie-title">{data.title.length>30?data.title.slice(0,30)+'...':data.title}</p>
                <button className="play play2" onClick={()=>handelVideo(data)}><PlaySVG /></button>
            </div>
        </div>
    )
}
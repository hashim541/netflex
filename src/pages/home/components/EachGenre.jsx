import EachMovie from "./EachMovie";

export default function EachSection({data ,smallImgURL,handelVideo}){
    
    return(
        <div className="each-genre">
            <h3 className="genre-title">{data.genre}</h3>
            <p className="scroll-shortcut">&#x2190; SHIFT + SCROLL &#x2192;</p>
            <div className="movies-list">
                
                {data.result.map(d =>(
                    <EachMovie key={d.id} data={d} smallImgURL={smallImgURL} handelVideo={handelVideo}/>
                ))}
            </div>
        </div>
    )
}
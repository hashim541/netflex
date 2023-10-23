import { useEffect, useState } from "react";

export default function VideoLayer({keyz,apiKeys,setKey,videoL,setVideoL,data}){
    const fallback={
        kind: "youtube#searchResult",
        etag: "xKZNChLIB_ES97RnH3oxKy4Vf4M",
        id: {
            kind: "youtube#video",
            videoId: "dQw4w9WgXcQ"
        },
        snippet: {
            publishedAt: "2009-10-25T06:57:33Z",
            channelId: "UCuAXFkgsw1L7xaCfnd5JJOw",
            title: "Rick Astley - Never Gonna Give You Up (Official Music Video)",
            description: "The official video for “Never Gonna Give You Up” by Rick Astley. The new album 'Are We There Yet?' is out now.  !!!!!!!!!!!!!!!!!!_Note:_Daily_limit_exceded_!!!!!!!!!!!!!!!!!!!!!",
            thumbnails: {
                default: {
                    url: "https://i.ytimg.com/vi/dQw4w9WgXcQ/default.jpg",
                    width: 120,
                    height: 90
                },
                medium: {
                    url: "https://i.ytimg.com/vi/dQw4w9WgXcQ/mqdefault.jpg",
                    width: 320,
                    height: 180
                },
                high: {
                    url: "https://i.ytimg.com/vi/dQw4w9WgXcQ/hqdefault.jpg",
                    width: 480,
                    height: 360
                }
            },
            channelTitle: "Rick Astley",
            liveBroadcastContent: "none",
            publishTime: "2009-10-25T06:57:33Z"
        }
    }
    const [videoD,setVideoD]=useState(fallback)
    const [YTloading,setYTLoading]=useState(false)
    
    async function getYTData(){
        const YTapi=`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=1&q=${data.title} movie official trailor%20&type=video&key=${keyz}`
        try {
            const response=await fetch(YTapi)
            const resData=await response.json()
            
            setVideoD(resData.items[0])
            
        } catch (error) {
            if (apiKeys.indexOf(keyz)===apiKeys.length-1){
                setVideoD(fallback)   
            }else{
                setKey(apiKeys[apiKeys.indexOf(keyz)+1])
            }
            
        }
        
        setYTLoading(true)
    }
    
    useEffect(()=>{
        if(videoL){
        getYTData();
        return ()=>{
            getYTData();
        }}
        
    },[videoL,keyz])
    
    if(YTloading){
        return(
            <div className={videoL?"video-layer vis":"video-layer"}>
                <button className="wrong" onClick={()=>setVideoL(false)}>+</button>
                <div className={videoL?"video-div scl":"video-div"}>
                    <iframe title={videoD.id.videoId} style={videoL?{display:'block'}:{display:'none'}} className="iframe" src={"https://www.youtube.com/embed/"+videoD.id.videoId} frameBorder="0" allowFullScreen></iframe>
                    <div className="movie-video-info">
                        <h2 className="video-title">{data.title}</h2>
                        <div className="video-info hero-info">
                            <p className="video-pop hero-pop">{Math.floor(data.vote_average*10)}%</p>
                            <p className="video-rel-date hero-rel-date">{data.release_date}</p>
                        </div>
                        <p className="video-desc hero-desc">{data.overview}</p>
                    </div>
                </div>
            </div>
        )
    }else{
        return(
            <></>
        )
    }
    
}
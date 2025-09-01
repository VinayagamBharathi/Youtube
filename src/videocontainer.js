import { useState,useEffect } from "react"
import { Link } from "react-router-dom"
const Video=(props)=>{
    return <div className="video">
         <img className="tube-img" src={props.data.snippet.thumbnails.high.url}></img>
         <h3 className="title">{props.data.snippet.title}</h3>
         <p className="title">{props.data.snippet.channelTitle}</p>
         <p className="title">{props.data.statistics.viewCount} views</p>
    </div>
}

const VideoContainer=()=>{
  const [videoArray,setvideoArray]=useState([])
    async function youtube(){
      const data=await fetch("https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key=AIzaSyAH4Wf4FBYHOC7wXrHHCzIV0n6uVibQyPs")
      const originalData=await data.json()
      console.log(originalData.items)
      setvideoArray(originalData.items)
    }
    useEffect(()=>{
       youtube()
    },[])

return <div className="videocontainer">
  {
    videoArray.map((x)=>{
      return <Link to={"/videos/"+x.id}className="Link"><Video data={x}/></Link>
    })
  }
</div>
  }
export default VideoContainer

import Navigators_Bar from "./components/Navigators_Bar"
import Header from "./components/Header";



import 'swiper/css';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/modules';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';


export default function Leafshorts() {



 
  return (
    <div className='container leafshorts'>
<Header nm={"Leaf shorts"}></Header>


<Swiper
        direction={'vertical'}
        pagination={{
          clickable: true,
        }}
        className="mySwiper"

        onReachEnd={() => {
          console.log("Its End");
        }}
        onSlideChange={() => console.log('slide change')}
       
      >
           <SwiperSlide className="slides" >   <h5 className="taatoo fa fa-leaf"></h5>
         <section className="musics">
         <AudioPlayer
    autoPlay
    src="demo.aac"
    onPlay={e => console.log("onPlay")}
    className="music"
    showJumpControls
    showDownloadProgress
    // other props here
  />
          <p>Title : </p>
          <p>Uploaded By  </p> 
          <p>Time :</p>


         </section>
        </SwiperSlide>

        <SwiperSlide className="slides" >   <h5 className="taatoo fa fa-leaf"></h5>
         <section className="musics">
         <AudioPlayer
    autoPlay
    src="demo.aac"
    onPlay={e => console.log("onPlay")}
    className="music"
    showJumpControls
    showDownloadProgress
    // other props here
  />
          <p>Title : </p>
          <p>Uploaded By  </p> 
          <p>Time :</p>

         </section>
        </SwiperSlide>
        <SwiperSlide className="slides" >   <h5 className="taatoo fa fa-leaf"></h5>
         <section className="musics">
         <AudioPlayer
    autoPlay
    src="demo.aac"
    onPlay={e => console.log("onPlay")}
    className="music"
    showJumpControls
    showDownloadProgress
    // other props here
  />
          <p>Title : </p>
          <p>Uploaded By  </p> 
          <p>Time :</p>

         </section>
        </SwiperSlide>
         <SwiperSlide className="slides" >   <h5 className="taatoo fa fa-leaf"></h5>
         <section className="musics">
         <AudioPlayer
    autoPlay
    src="demo.aac"
    onPlay={e => console.log("onPlay")}
    className="music"
    showJumpControls
    showDownloadProgress
    // other props here
  />
          <p>Title : </p>
          <p>Uploaded By  </p> 
          <p>Time :</p>

         </section>
        </SwiperSlide>
       
      </Swiper>



<Navigators_Bar x={4}/>
    </div>
  )
}

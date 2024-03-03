import React from 'react';

const videos = document.querySelectorAll('video');


videos.forEach(video => {
  video.addEventListener('mouseenter', () => {
    video.play();
  });
  
  video.addEventListener('mouseleave', () => {
    video.pause();
    video.currentTime = 2;
  });
});

const Video = () => {
  return (
    <div><h3>Songs</h3>

<div className="responsive">
    <div className="gallery">
      <h6>Add to Vimeo Staff Picks</h6>  
    <video width="280
    " height="360" title="Advertisement"
    webkit-playsinline="true"
    playsinline="true">
         <source
          src="Mera.mp4"
          type="video/mp4"
          autoPlay
        />
     </video>
     Mera  na Sidhu
     <br/>
     50M-view.
     <br/>
     <br/>
     5911 rect.
    </div>
  </div>

  
  
  <div className="responsive">
    <div className="gallery">
    <h6>Add to Vimeo Staff Picks</h6>  
    <video width="280
    " height="360" title="Advertisement"
    webkit-playsinline="true"
    playsinline="true">
        <source
          src="sidhu.mp4"
          type="video/mp4"
          autoPlay
        />
     </video>Level - Sidhu Moose Wala
     <br/>
     20M-view.
     <br/>
     <br/>
     5911 rect.
     </div>
  </div>
  
  <div className="responsive">
    <div className="gallery">
    <h6>Add to Vimeo Staff Picks</h6>  
    <video width="280
    " height="360" title="Advertisement"
    webkit-playsinline="true"
    playsinline="true">
        <source
          src="Judaa_h.mp4"
          type="video/mp4"
          autoPlay
        />
     </video>Amrinder Gill
     <br/>
     80K-view.
    <br/>
     Gill rect.</div>
  </div>

  
  <div className="responsive">
    <div className="gallery">
    <h6>Add to Vimeo Staff Picks</h6>  
    <video width="280
    " height="360" title="Advertisement"
    webkit-playsinline="true"
    playsinline="true">
        <source
          src="Feeling_h.mp4"
          type="video/mp4"
          autoPlay
        />
     </video>Kour b 
     <br/>
     50K-view.
    <br/>
     Whitehell rect.</div>
   </div>
  
  
  <div className="responsive">
    <div className="gallery">
    <h6>Add to Vimeo Staff Picks</h6>  
    <video width="280
    " height="360" title="Advertisement"
    webkit-playsinline="true"
    playsinline="true">
        <source
          src="Feeling_h.mp4"
          type="video/mp4"
          autoPlay
        />
     </video>Kour b 
     <br/>
     50K-view.
    <br/>
     Whitehell rect.</div>
   </div>
  
  <div className="responsive">
    <div className="gallery">
    <h6>Add to Vimeo Staff Picks</h6>  
    <video width="280
    " height="360" title="Advertisement"
    webkit-playsinline="true"
    playsinline="true">
        <source
          src="sidhu.mp4"
          type="video/mp4"
          autoPlay
        />
     </video>Level - Sidhu Moose Wala
     <br/>
     20M-view.
     <br/>
     <br/>
     5911 rect.
     </div>
  </div>
  
  <div className="responsive">
    <div className="gallery">
    <h6>Add to Vimeo Staff Picks</h6>  
    <video width="280
    " height="360" title="Advertisement"
    webkit-playsinline="true"
    playsinline="true">
        <source
          src="Judaa_h.mp4"
          type="video/mp4"
          autoPlay
        />
     </video>Amrinder Gill
     <br/>
     80K-view.
    <br/>
     Gill rect.</div>
  </div>
  
  <div className="responsive">
    <div className="gallery">
      <h6>Add to Vimeo Staff Picks</h6>  
    <video width="280
    " height="360" title="Advertisement"
    webkit-playsinline="true"
    playsinline="true">
         <source
          src="Mera.mp4"
          type="video/mp4"
          autoPlay
        />
     </video>
     Mera  na Sidhu
     <br/>
     50M-view.
     <br/>
     <br/>
     5911 rect.
    </div>
  </div>
  <div className="clearfix"></div></div>
  )
}

export default Video;
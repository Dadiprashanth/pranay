import './sports.scss'

function Path() {
  return (
    <div className='first-div'>
      <div className='container  img-contain' >
           <span className="iconb-burger"></span>
           <span className="iconb-menu-logo-2-copy-2-1 d-flex justify-content-start"><span className="path1"></span><span className="path2"></span><span className="path3"></span><span className="path4"></span><span className="path5"></span></span>
             <p className='tagselect'>
              purpletalk india private ltd
              </p>
      </div>
      <div className='back-ground-video'>
        <video autoPlay loop muted  >
          <source src={require('file:///home/prashanthdadi/Downloads/ocean-small.mp4')} type="video/mp4"  />
        </video>
        <h2>video in text<br/><span>Back ground</span></h2>
      </div>
     
    </div>
  )
}

export default Path
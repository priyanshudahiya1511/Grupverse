import React, { useState } from 'react';
import './cssFolder/index.css';


const PostCard = (props) => {
  const { id, title, username, likes, dislikes, shares, comments, mediano, mediatypes, mediaextensions, about, profilepic, tagImage , teamName} = props;

  const [showFullAbout, setShowFullAbout] = useState(false);
  let  [currentIndex, setCurrentIndex] = useState(0);
  let [display,setDisplay] = useState(false)

  const copy = async () => {
    const postLink = `https://grupverse.com?postid=${id}`;
    try {
      await navigator.clipboard.writeText(postLink);
      console.log('Post Link Copied To Clipboard');
       
    } catch (err) {
      console.error('Failed to copy: ', err);
    }
    setDisplay(true)
    setTimeout(()=>{
    setDisplay(false)
    },1000)
  };

  const toggleAbout = () => {
    setShowFullAbout(!showFullAbout);
  };

  const shortAbout = about.slice(0, 150);

  const handleNext = () => {
    if (currentIndex === mediano - 1) {
      return;
    }
    setCurrentIndex(currentIndex + 1);
   
  };

  const handlePrev = () => {
    if (currentIndex === 0) {
      return;
    }
    setCurrentIndex(currentIndex - 1);
  
  };

  return (
    <>
      <div className="postCard" id={`${id}`} >
        <div className="categoryContainer">
          <div className="box">
            {profilepic === './scriptFolder/buttonScript' ? <img src={`${profilepic}`} className="category" alt="" /> : <img src={`https://grupverse.com/${profilepic}?profilepic=''`} className="category" alt="" />}
            <span>{username}</span>
          </div>
          <div className="box">
            <img src={`https://grupverse.com/${tagImage}`} className="category" alt="" />
            <span>{teamName}</span>
          </div>
        </div>
        <h3 className="heading">{title}</h3>

        {
          (mediano === '' || mediaextensions === '' || mediatypes === '') ?
            ''
            :
            <div className="imgContainer" >
              
         
              {mediano > 1 ? Number(window.innerWidth>600) ? (
  mediaextensions.split(",").map((extension, i) => (
    <img
      className="img"
      key={i}
      src={`https://grupverse.com/media/${mediatypes.split(",")[i]}/${id}_${
        i + 1
      }.${extension}`}
      alt=""
      style={{
        zIndex: 1,
        opacity: i === currentIndex ? 1 : 0,
      }}
    />
  ))
) : (
  <>
    <swiper-container class="mySwiper" pagination="true" pagination-dynamic-bullets="true">
    {
        mediaextensions.split(",").map((extension,i)=>(
                <swiper-slide><img src={`https://grupverse.com/media/${mediatypes.split(",")[i]}/${id}_${i + 1}.${extension}`} alt=""/></swiper-slide>
        ))
    }

    </swiper-container>
  </>
) : (
  <img
    className='img'
    src={`https://grupverse.com/media/${mediatypes}/${id}_${mediano}.${mediaextensions}`}
    alt=""
    style={{ zIndex: 1 }}
  />
)}

  <div className="dotContainer">
    {mediano > 1 && (window.innerWidth > 600) &&
      (() => {
        const dots = [];
        for (let i = 0; i < mediano; i++) {
          dots.push(
            <div
              key={i}
              id={`${i + 1}-1`}
              className="dot"
              style={{
                backgroundColor: i === currentIndex ? "blue" : 'gray',
              }}
              onClick={() => setCurrentIndex(i)}
            />
          );
        }
        return dots;
      })()}
  </div>



                {
                  mediano > 1 && Number(window.innerWidth) > 600 ?
                    <>
                      <div className="swiper-button-prev" onClick={handlePrev}></div>
                      <div className="swiper-button-next" onClick={handleNext}></div>
                    </>
                    :
                    ''
                }

            <div className="swiper-scrollbar"></div>
          </div>
       
        }
        <div className="quoteContainer">
          {showFullAbout ? about : shortAbout}{' '}
          {about.length > 30 && (
            <button className="read-more-button" onClick={toggleAbout}>
              {showFullAbout ? 'Read less' : 'Read more'}
            </button>
          )}
        </div>
 <div className="buttonsContainer">
 {/* { Likes } */}
 <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M20,8h-5.612l1.123-3.367c0.202-0.608,0.1-1.282-0.275-1.802S14.253,2,13.612,2H12c-0.297,0-0.578,0.132-0.769,0.36 L6.531,8H4c-1.103,0-2,0.897-2,2v9c0,1.103,0.897,2,2,2h3h10.307c0.829,0,1.581-0.521,1.873-1.298l2.757-7.351 C21.979,12.239,22,12.12,22,12v-2C22,8.897,21.103,8,20,8z M4,10h2v9H4V10z M20,11.819L17.307,19H8V9.362L12.468,4l1.146,0 l-1.562,4.683c-0.103,0.305-0.051,0.64,0.137,0.901C12.377,9.846,12.679,10,13,10h7V11.819z"></path></svg>
     {likes}
   {/* { Dislikes } */}
   <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M20,3h-3H6.693C5.864,3,5.112,3.521,4.82,4.298l-2.757,7.351C2.021,11.761,2,11.88,2,12v2c0,1.103,0.897,2,2,2h5.612 L8.49,19.367c-0.203,0.608-0.101,1.282,0.274,1.802C9.14,21.689,9.746,22,10.388,22H12c0.297,0,0.578-0.132,0.769-0.36l4.7-5.64 H20c1.103,0,2-0.897,2-2V5C22,3.897,21.103,3,20,3z M11.531,20h-1.145l1.562-4.684c0.103-0.305,0.051-0.64-0.137-0.901 C11.623,14.154,11.321,14,11,14H4v-1.819L6.693,5H16v9.638L11.531,20z M18,14V5h2l0.001,9H18z"></path></svg>
   {dislikes}
     {/* { Comments } */}
     <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 576 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M532 386.2c27.5-27.1 44-61.1 44-98.2 0-80-76.5-146.1-176.2-157.9C368.3 72.5 294.3 32 208 32 93.1 32 0 103.6 0 192c0 37 16.5 71 44 98.2-15.3 30.7-37.3 54.5-37.7 54.9-6.3 6.7-8.1 16.5-4.4 25 3.6 8.5 12 14 21.2 14 53.5 0 96.7-20.2 125.2-38.8 9.2 2.1 18.7 3.7 28.4 4.9C208.1 407.6 281.8 448 368 448c20.8 0 40.8-2.4 59.8-6.8C456.3 459.7 499.4 480 553 480c9.2 0 17.5-5.5 21.2-14 3.6-8.5 1.9-18.3-4.4-25-.4-.3-22.5-24.1-37.8-54.8zm-392.8-92.3L122.1 305c-14.1 9.1-28.5 16.3-43.1 21.4 2.7-4.7 5.4-9.7 8-14.8l15.5-31.1L77.7 256C64.2 242.6 48 220.7 48 192c0-60.7 73.3-112 160-112s160 51.3 160 112-73.3 112-160 112c-16.5 0-33-1.9-49-5.6l-19.8-4.5zM498.3 352l-24.7 24.4 15.5 31.1c2.6 5.1 5.3 10.1 8 14.8-14.6-5.1-29-12.3-43.1-21.4l-17.1-11.1-19.9 4.6c-16 3.7-32.5 5.6-49 5.6-54 0-102.2-20.1-131.3-49.7C338 339.5 416 272.9 416 192c0-3.4-.4-6.7-.7-10C479.7 196.5 528 238.8 528 288c0 28.7-16.2 50.6-29.7 64z"></path></svg>
    {comments}
   {/* { Copy } */}
   <span className='spanCopy'>
    <svg className='copyButton' onClick = {copy}stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 16 16" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>
    <small style={{ visibility: display ? 'visible' : 'hidden' }}>Copied!</small>
   </span>

   {/* { Share } */}
     <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><circle cx="18" cy="5" r="3"></circle><circle cx="6" cy="12" r="3"></circle><circle cx="18" cy="19" r="3"></circle><line x1="8.59" y1="13.51" x2="15.42" y2="17.49"></line><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"></line></svg>
    {shares}


 </div>  
 </div>
    </>
  );
};

export default PostCard;




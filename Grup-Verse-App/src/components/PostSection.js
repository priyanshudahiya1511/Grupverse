import React, { useEffect, useState } from "react";
import PostCard from "./PostCard";
import InfiniteScroll from "react-infinite-scroll-component";
import userImage from "./imgFolder/userImage.png";
const PostSection = () => {
  const [posts, setPosts] = useState([]);
  const [hasMore, setHasMore] = useState(true);

  const updateNews = async () => {
    const url = `https://grupverse.com/sendpostsunauthenticated`;
    const options = {
      method: "POST",
    };
    let data = await fetch(url, options);
    let parsedData = await data.json();
    console.log(parsedData);
    setPosts(parsedData);
  };

  const fetchMoreData = async () => {
    const postsArray = [];
    for (let i = 0; i < posts.length; i++) {
      postsArray.push(posts[i][0].id);
    }
    const lastpostsData = JSON.stringify(postsArray);
    const url = `https://grupverse.com/sendpostsunauthenticated?seenposts=${lastpostsData}`;
    const options = {
      method: "POST",
    };
    let data = await fetch(url, options);
    let parsedData = await data.json();
    setPosts(posts.concat(parsedData));
    if (parsedData[parsedData.length - 1] === "Theend") {
      setHasMore(false);
    }
  };

  useEffect(() => {
    updateNews();
  }, []);

  return (
    <>
      <section className="post-section">
        <h2>Top Posts</h2>
        <InfiniteScroll
          dataLength={posts.length}
          next={fetchMoreData}
          hasMore={hasMore}
        >
          {posts
            .filter((post) => post[2][0].profilepic !== undefined)
            .map((element) => {
              const myObject = element[0];
              const title = element[0].title;
              const likes = element[0].likes;
              const dislikes = element[0].dislikes;
              const shares = element[0].shares;
              const comments = element[0].comments;
              const mediano = element[0].mediano;

              const mediatypes = element[0].mediatypes;

              const mediaextensions = element[0].mediaextentions;

              const about = element[0].about;
              const myArray2 = element[2];
              const username = myArray2[0].username;
              const profilepic =
                myArray2[0].profilepic !== undefined
                  ? myArray2[0].profilepic
                  : userImage;
              const tagImage = myArray2[1].profilepic;
              const teamName = myArray2[1].name;

              return (
                <PostCard
                  key={myObject.id.value}
                  id={myObject.id.value}
                  title={title}
                  username={username}
                  likes={likes}
                  dislikes={dislikes}
                  comments={comments}
                  shares={shares}
                  mediano={mediano ? mediano : ""}
                  mediatypes={mediatypes ? mediatypes : ""}
                  mediaextensions={mediaextensions ? mediaextensions : ""}
                  about={about}
                  profilepic={profilepic ? profilepic : userImage}
                  tagImage={tagImage ? tagImage : ""}
                  teamName={teamName ? teamName : ""}
                />
              );
            })}
        </InfiniteScroll>
      </section>
    </>
  );
};

export default PostSection;

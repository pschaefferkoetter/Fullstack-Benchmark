import React from "react";
import Post from "./Post.jsx";
import moment from 'moment';

const Feed = function(props) {

  console.log(props);

  //sort data in reverse chronological order
  let feedData = props.feedData;
  feedData.sort((a, b) => {
    let aDate = a.updatedAt;
    let bDate = b.updatedAt;
    return (moment().diff(aDate, 'seconds') - moment().diff(bDate, 'seconds'));
  });


  return (
    <div className='feed'>
      {/* section for post form */}

      {/* section for all posts */}
      {feedData.map((postItem) => {
        return <Post key = {postItem._id} postItem = {postItem} />;
      })}
    </div>
  );
};

export default Feed;

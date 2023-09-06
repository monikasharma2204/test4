import React, { useState } from "react";
import Avatar from "../avatar/Avatar";
import { uniqueId } from "lodash";
import { TextField, Button } from "@mui/material";
import "./Post.scss";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { likeAndUnlikePost, addComments } from "../../services/feeddata";

function Post({ post }) {
  const dispatch = useDispatch();
  const [comment, setComment] = useState("");

  async function handlePostLiked() {
    dispatch({
      type: "REPLACE_POSTS",
      payload: likeAndUnlikePost({
        postId: post.postId,
        like: !post.isLiked,
      }),
    });
  }

  const addComment = () => {
    dispatch({
      type: "REPLACE_POSTS",
      payload: addComments({
        postId: post.postId,
        commentText: comment,
      }),
    });
    setComment("");
  };

  return (
    <div className="Post">
      <div className="heading">
        <Avatar src={post.owner?.userProfile} />
        <h4>{post.owner?.userName}</h4>
      </div>
      <div className="content">
        {post?.postUrl && <img src={post?.postUrl} alt="" />}
      </div>
      <div className="footer">
        <div className="like" onClick={handlePostLiked}>
          {post.isLiked ? (
            <AiFillHeart style={{ color: "red" }} className="icon" />
          ) : (
            <AiOutlineHeart className="icon" />
          )}
          <h4>{`${post.likes} likes`}</h4>
        </div>
        <p className="caption">{post.postContent}</p>
        <h6 className="time-ago">{post?.timeAgo}</h6>
        <div className="commentSection">
          <div>Comments:</div>
          <div className="commentBox">
            <TextField
              value={comment}
              variant="outlined"
              placeholder="Add Comment"
              size="small"
              fullWidth
              onChange={(e) => setComment(e.target.value)}
            />
            <Button
              variant="contained"
              onClick={() => addComment()}
              disabled={!comment}
            >
              {" "}
              Add{" "}
            </Button>
          </div>
        </div>
        <div className="commentList">
          {post.comments?.map((cmt) => {
            return (
              <div key={cmt.commentId} className="comment">
                <span className="commentUser">
                  <Avatar src={cmt.userProfile} />
                  <div>{cmt.userName}</div>
                </span>
                <div className="commentText">{cmt.commentText}</div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Post;

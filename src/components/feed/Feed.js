import React, { useEffect, useState } from "react";
import Follower from "../follower/Follower";
import Post from "../post/Post";
import { Button, TextField } from "@mui/material";
import { Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import "./Feed.scss";
import { useSelector, useDispatch } from "react-redux";
import { getPostData, createPost } from "../../services/feeddata";


function Feed() {
  const dispatch = useDispatch();
  const [createPostModal, setCreatePostModal] = useState(false);
  const [postContent, setPostContent] = useState("");
  const [postUrl, setPostUrl] = useState("");
  const posts = useSelector((state) => {
    const userIds = state.followersReducer.followers;
    const myProfile = state.myProfileReducer.myProfile;
    const posts = state?.postReducer?.posts?.filter((p) =>
      [...userIds, myProfile.userId].includes(p.userId)
    );
    return posts;
  });

  const followings = useSelector((state) => {
    const userIds = state.followersReducer.followers;
    const users = state.usersReducer.users;
    const myProfile = state.myProfileReducer.myProfile;
    const followings = users?.filter(
      (p) => [...userIds].includes(p.userId) && p.userId !== myProfile.userId
    );
    return followings;
  });

  const suggestions = useSelector((state) => {
    const userIds = state.followersReducer.followers;
    const users = state.usersReducer.users;
    const myProfile = state.myProfileReducer.myProfile;
    const suggestions = users?.filter(
      (p) => ![...userIds].includes(p.userId) && p.userId !== myProfile.userId
    );
    return suggestions;
  });

  useEffect(() => {}, []);

  const toggle = () => setCreatePostModal(!createPostModal);

  const createNewPost = () => {
    dispatch({
      type: "REPLACE_POSTS",
      payload: createPost({
        postContent,
        postUrl,
      }),
    });
    closeCreatePostModal();
  };

  const closeCreatePostModal = () => {
    setCreatePostModal(false);
    setPostContent("");
    setPostUrl("");
  };
  return (
    <div className="Feed">
      <Modal isOpen={createPostModal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Create Post</ModalHeader>
        <ModalBody>
          <div className="createPostField">
            <TextField
              value={postContent}
              variant="outlined"
              placeholder="Add Caption"
              onChange={(e) => setPostContent(e.target.value)}
            />
            <TextField
              value={postUrl}
              variant="outlined"
              placeholder="Add post image url"
              onChange={(e) => setPostUrl(e.target.value)}
            />
          </div>
        </ModalBody>
        <ModalFooter>
          <div className="createPostActionBtn">
            <Button
              color="primary"
              variant="contained"
              disabled={!postUrl}
              onClick={() => createNewPost()}
            >
              Add Post
            </Button>{" "}
            <Button
              color="primary"
              variant="outlined"
              onClick={() => closeCreatePostModal()}
            >
              Cancel
            </Button>
          </div>
        </ModalFooter>
      </Modal>
      <div className="createPost">
        <Button variant="contained" onClick={() => setCreatePostModal(true)}>
          Create Post
        </Button>
      </div>
      <div className="container">
        <div className="left-part">
          {posts?.map((post) => (
            <Post key={post.postId} post={post} />
          ))}
        </div>
        <div className="right-part">
          <div className="following">
            <h3 className="title">You Are Following</h3>
            {followings?.map((user) => (
              <Follower key={user.userId} user={user} isFollowed />
            ))}
          </div>
          <div className="suggestions">
            <h3 className="title">Suggested For You</h3>
            {suggestions?.map((user) => (
              <Follower key={user.userId} user={user} isFollowed={false} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Feed;

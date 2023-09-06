import { useSelector, useDispatch } from "react-redux";
import { cloneDeep, uniqueId } from "lodash";
import store from "../store";
import { posts } from "../data";

export const getPostData = () => {
  return posts;
};

export const likeAndUnlikePost = (data) => {
  const { postId, like } = data;
  const state = store.getState();
  const posts = cloneDeep(state?.postReducer?.posts) || [];
  const fIndex = posts.findIndex((p) => p.postId === postId);
  if (fIndex > -1) {
    if (like) {
      posts[fIndex].likes = posts[fIndex].likes + 1;
      posts[fIndex].isLiked = true;
    } else {
      posts[fIndex].likes = posts[fIndex].likes - 1;
      posts[fIndex].isLiked = false;
    }
  }
  return posts;
};

export const addComments = (data) => {
  const { postId, commentText } = data;
  const state = store.getState();
  const posts = cloneDeep(state?.postReducer?.posts) || [];
  const myProfile = cloneDeep(state?.myProfileReducer?.myProfile) || {};
  const fIndex = posts.findIndex((p) => p.postId === postId);
  if (fIndex > -1) {
    posts[fIndex].comments.push({
      commentId: uniqueId(),
      commentText,
      ...myProfile,
    });
  }
  return posts;
};

export const createPost = (data) => {
  const { postUrl, postContent } = data;
  const state = store.getState();
  const posts = cloneDeep(state?.postReducer?.posts) || [];
  const myProfile = cloneDeep(state?.myProfileReducer?.myProfile) || {};

  posts.push({
    postId: "id_" + uniqueId(),
    postUrl,
    postContent,
    userId: myProfile.userId,
    owner: myProfile,
    comments: [],
    likes: 0,
    isLiked: false,
  });

  return posts;
};

export const followAndUnfollowUser = (data) => {
  const { userId, isFollowed } = data;
  const state = store.getState();
  const followers = cloneDeep(state?.followersReducer?.followers) || [];

  if (isFollowed) {
    followers.push(userId);
    return followers;
  } else {
    const fIndex = followers.findIndex((p) => p === userId);
    if (fIndex > -1) {
      followers.splice(fIndex, 1);
    }
  }
  return followers;
};

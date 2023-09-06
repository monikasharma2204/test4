import React, { useEffect, useState } from "react";
import { Button } from "@mui/material";
import Avatar from "../avatar/Avatar";
import "./Follower.scss";
import { useSelector, useDispatch } from "react-redux";
import { followAndUnfollowUser } from "../../services/feeddata";

function Follower({ user, isFollowed }) {
  const dispatch = useDispatch();

  function handleUserFollow() {
    dispatch({
      type: "UPDATE_FOLLOWERS",
      payload: followAndUnfollowUser({
        userId: user.userId,
        isFollowed: !isFollowed,
      }),
    });
  }

  return (
    <div className="Follower">
      <div className="user-info">
        <Avatar src={user?.userProfile} />
        <h4 className="name">{user?.userName}</h4>
      </div>

      <Button
        onClick={() => handleUserFollow()}
        variant={isFollowed ? "outlined" : "contained"}
      >
        {isFollowed ? "Unfollow" : "Follow"}
      </Button>
    </div>
  );
}

export default Follower;

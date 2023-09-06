export const myProfile = {
  userId: "1",
  userName: "Monika Sharma",
  userProfile:
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlvb7oCctgrtaeQjubWTqFAOvtAEU_KIYJ8A&usqp=CAU",
};
export const users = [
  myProfile,
  {
    userId: "2",
    userName: "Nikita sharma",
    userProfile:
      "https://assets.stickpng.com/images/585e4bcdcb11b227491c3396.png",
  },
  {
    userId: "3",
    userName: "krishna",
    userProfile:
      "https://static.vecteezy.com/system/resources/previews/000/439/863/original/vector-users-icon.jpg",
  },
  {
    userId: "4",
    userName: "Mahi Shrama",
    userProfile:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnfZb8Dj9TGp5crOzGwJvh-h4-FjZCU8q8nGGHNFByq6Z8ztESm5HDxT4azZIupmduHAQ&usqp=CAU",
  },
];

export const posts = [
  {
    userId: "1",
    postId: "1",
    postContent: "All is Well !!!!!",
    postUrl:
      "https://thumbs.dreamstime.com/b/environment-earth-day-hands-trees-growing-seedlings-bokeh-green-background-female-hand-holding-tree-nature-field-gra-130247647.jpg",
    likes: 12,
    isLiked: false,
    owner: {
      userId: "1",
      userName: "Monika Sharma",
      userProfile:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlvb7oCctgrtaeQjubWTqFAOvtAEU_KIYJ8A&usqp=CAU",
    },

    comments: [],
  },
  {
    userId: "2",
    postId: "11",
    postContent: "Chase your dreams with all your might",
    postUrl:
      "https://iso.500px.com/wp-content/uploads/2016/03/stock-photo-142984111-1500x1000.jpg",
    likes: 12,
    isLiked: false,
    owner: {
      userName: "Nikita sharma",
      userId: "2",
      userProfile:
        "https://assets.stickpng.com/images/585e4bcdcb11b227491c3396.png",
    },

    comments: [],
  },
  {
    userId: "3",
    postId: "31",
    postContent: "Rise above the storm, you'll find the sunshine",
    postUrl:
      "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg",
    likes: 12,
    isLiked: false,
    owner: {
      userName: "krishna",
      userId: "3",
      userProfile:
        "https://static.vecteezy.com/system/resources/previews/000/439/863/original/vector-users-icon.jpg",
    },

    comments: [],
  },
];

export const followers = ["2", "3"];

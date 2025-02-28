import { UserProfilesEntity } from "./users.entities";

export interface PostsEntity {
  _id: string;
  userId: string;
  caption: string;
  imageURL: string;
  likeCount: number;
  commentCount: number;
  isLiked: boolean;
  isSaved: boolean;
  isFollowing: boolean;
  shareCount: number;
  saveCount: number;
  createdAt: Date;
  user: UserProfilesEntity;
  comments?: CommentsEntity[];
  saves?: SavesEntity;
  price:number
}

export interface CreatePostInput {
  caption: string;
  imageURL: string;
}
export interface UpdatePostInput {
  caption: string;
}

export interface CommentPostInput {
  comment: string;
}

export interface CommentsEntity {
  _id: string;
  comment: string;
  postId: string;
  createdAt: string;
  user: UserProfilesEntity;
}

export interface SavesEntity {
  userId: string;
  postId: string;
  reelsId: string;
}
import React from 'react';
import {
    CommentText,
    CommentMetadata,
    CommentGroup,
    CommentContent,
    CommentAvatar,
    CommentAuthor,
    Comment,
    Icon,
  } from 'semantic-ui-react'
  

interface CommentRowProps{
    author:string
    time:string;
    comment:string;
    avatar:string;
}

const CommentRow = (props:CommentRowProps) => { // Aquí le decimos que son obligatorios los props
return(
    <Comment>
      <CommentAvatar src={props.avatar} />
      <CommentContent>
        <CommentAuthor as='a'>{props.author}</CommentAuthor>
        <CommentMetadata>
          <div>{props.time}</div>
        </CommentMetadata>
        <CommentText>
          {props.comment}
        </CommentText>
      </CommentContent>
    </Comment>
);
}

export default CommentRow //con esto (default) se puede poner con cualqueir otro nombre cuando se importa, es muy raro usarlo


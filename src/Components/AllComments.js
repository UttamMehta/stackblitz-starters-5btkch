import React, { useState } from 'react';
import '../style.css';
import Input from './Input';

export default function AllComments(props) {
  const [data, setData] = useState({ img: 'Images' });
  const [allComment, setAllComment] = useState([]);
  const [comment, SetCommnet] = useState(false);

  function addComments(obj) {
    console.log(obj);
    let arr = allComment;
    console.log(arr);
    arr.push(obj);
    setAllComment(arr);
  }

  function sorting() {
    allComment.sort((a, b) => {
      return a.upvote - b.upvote;
    });
  }

  return (
    <div>
      <h1>{data.img}</h1>
      {comment ? (
        <Input addComments={addComments} width={15} />
      ) : (
        <p onClick={() => SetCommnet(true)}>Add Comments</p>
      )}
    </div>
  );
}

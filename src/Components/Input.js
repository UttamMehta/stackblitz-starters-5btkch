import React, { useState } from 'react';
import '../style.css';
import Comments from './Comments';

export default function Input({ addComments, width }) {
  const [input, setInput] = useState('');
  const [showComment, setShowComment] = useState(false);
  const [show, setShow] = useState([]);

  function commentback() {
    setShowComment(false);
  }

  function add() {
    setShowComment(!showComment);
    let arr = show;
    arr.push(input);
    setShow(arr);
  }

  return (
    <div>
      {!showComment ? (
        <div>
          <input
            type="text"
            placeholder="Enter Your Comments"
            onChange={(e) => setInput(e.target.value)}
          />
          <button onClick={add}>Enter</button>
        </div>
      ) : (
        <p onClick={commentback}>Add comment</p>
      )}
      <div>
        {show.length > 0
          ? show.map((el, i) => {
              return <Comments comment={el} width={+width + 1} />;
            })
          : ''}
      </div>
    </div>
  );
}

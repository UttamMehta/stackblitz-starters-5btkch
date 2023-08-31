import React, { useState } from 'react';
import '../style.css';
import Input from './Input';

export default function Comments(props) {
  const [upVote, setUpVote] = useState(0);
  const [downVote, setDownVote] = useState(0);
  const [reply, setReply] = useState(false);

  function IncreaseVote() {
    setUpVote(10);
  }
  console.log(props.width + 100);

  return (
    <div style={{ marginLeft: props.width }}>
      <h1>{props.comment}</h1>
      <button onClick={() => setUpVote((prev) => prev + 1)}>Up:{upVote}</button>

      <button onClick={() => setDownVote((prev) => prev + 1)}>
        Down:{downVote}
      </button>
      <span>Scores:{upVote - downVote}</span>
      <div>
        {!reply ? (
          <button onClick={() => setReply(true)}>add reply</button>
        ) : (
          <Input width={+props.width + 1} />
        )}
      </div>
    </div>
  );
}

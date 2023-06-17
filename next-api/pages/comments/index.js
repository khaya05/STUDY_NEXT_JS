import { useState } from 'react';

export default function CommentsPage() {
  const [comments, setComments] = useState([]);
  const [comment, setComment] = useState('');

  const fetchComments = async () => {
    const resp = await fetch('/api/comments');
    const data = await resp.json();
    setComments(data);
  };

  const submitComment = async () => {
    const response = await fetch('/api/comments', {
      method: 'POST',
      body: JSON.stringify({ comment }),
      headers: { 'Content-Type': 'application/json' },
    });
    const data = await response.json();
    console.log(data);
    setComment('');
  };

  const deleteComment = async (commentId) => {
    const response = await fetch(`/api/comments/${commentId}`, {
      method: 'DELETE',
    });
    // const data = await response.json();
    // console.log(data);
    fetchComments();
  };

  return (
    <>
      <input
        type="text"
        value={comment}
        onChange={(e) => setComment(e.target.value)}
      />
      <button onClick={submitComment}>Submit comment</button>

      <button onClick={fetchComments}>Load Comments</button>
      {comments.map(({ id, text }) => (
        <div key={id}>
          {id} | {text}
          {'                           '}
          <button onClick={() => deleteComment(id)}>❌</button>
        </div>
      ))}
    </>
  );
}

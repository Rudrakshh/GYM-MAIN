import React, { useState } from 'react';

function ReplyForm({ postId, onReply }) {
  const [replyText, setReplyText] = useState('');

  const handleReply = async () => {
    try {
      const response = await fetch(`/api/posts/${postId}/replies`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ text: replyText }),
      });

      if (response.ok) {
        const newReply = await response.json();
        onReply(postId, newReply);
        setReplyText('');
      } else {
        console.error('Failed to create reply');
      }
    } catch (error) {
      console.error('Error creating reply:', error);
    }
  };

  return (
    <div className="reply-form">
      <textarea
        placeholder="Add your reply..."
        value={replyText}
        onChange={(e) => setReplyText(e.target.value)}
      />
      <button onClick={handleReply}>Reply</button>
    </div>
  );
}

export default ReplyForm;

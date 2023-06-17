import { comments } from '../../../data/comments';

export default function handler(req, res) {
  const { commentId } = req.query;
  const comment = comments.find(
    (comment) => comment.id === parseInt(commentId)
  );

  switch (req.method) {
    case 'DELETE':
      comments.splice(commentId - 1, 1);
      res.status(204).json(comment);
      break;

    default:
      res.status(200).json(comment);
      break;
  }
}

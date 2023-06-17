import { comments } from '../../../data/comments';

export default function handler(req, res) {
  switch (req.method) {
    case 'POST':
      const { comment } = req.body;
      const newComment = {
        id: comments.length + 1,
        text: comment,
      };

      comments.push(newComment);
      res.status(201).json(newComment);
      break;

    default:
      res.status(200).json(comments);
      break;
  }
}

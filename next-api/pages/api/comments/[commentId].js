import { comments } from '../../../data/comments';

export default function Comment({ comment }) {
  return (
    <div>
      {comment.id} {comment.text}
    </div>
  );
}

export async function getStaticPaths() {
  const paths = comments.map((comment) => {
    return { params: { commentId: comment.id } };
  });

  return { paths, fallback: false };
}

export async function getStaticProps(context) {
  const { params } = context;
  const { commentId } = params;

  const comment = comments.find(
    (comment) => comment.id === parseInt(commentId)
  );
  return {
    props: {
      comment,
    },
  };
}

// export default function handler(req, res) {
//   const { commentId } = req.query;
//   const comment = comments.find(
//     (comment) => comment.id === parseInt(commentId)
//   );

//   switch (req.method) {
//     case 'DELETE':
//       comments.splice(commentId - 1, 1);
//       res.status(204).json(comment);
//       break;

//     default:
//       res.status(200).json(comment);
//       break;
//   }
// }

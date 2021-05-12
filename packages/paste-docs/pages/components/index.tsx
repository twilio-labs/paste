import Link from 'next/link';
import {getAllComponentPages} from '@api';

export default function Components(props) {
  return (
    <div>
      <p>List of posts:</p>
      <ul>
        {props.posts.map(function (post, idx) {
          return (
            <li key={idx}>
              <Link href={'/components/' + post.slug}>
                <a>{post.title}</a>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export async function getStaticProps() {
  const allPosts = await getAllComponentPages();
  console.log(1, allPosts);
  return {
    props: {
      posts: allPosts,
    },
  };
}

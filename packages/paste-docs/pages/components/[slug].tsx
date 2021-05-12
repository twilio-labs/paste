import Link from 'next/link';
import marked from 'marked';
import {getAllComponentPages, getComponentPageBySlug} from '@api';

export default function DocPage(props) {
  console.log(222, props);
  return (
    <div>
      <h1>{props.meta.title}</h1>
      <h2>{props.meta.description}</h2>
      <article dangerouslySetInnerHTML={{__html: props.content}} />
    </div>
  );
}

export async function getStaticProps({params}) {
  const doc = await getComponentPageBySlug(params.slug);

  const content = marked(doc.content || '');

  return {
    props: {
      ...doc,
      content,
    },
  };
}

export async function getStaticPaths() {
  const docs = await getAllComponentPages();
  console.log(docs);
  return {
    paths: docs.map((doc) => {
      return {
        params: {
          slug: doc.slug,
        },
      };
    }),
    fallback: false,
  };
}

//import { useRouter } from "next/router";
import { server } from "../../../config";
import { GetStaticPaths, GetStaticProps } from "next";
import Link from "next/link";
import Meta from "../../../components/Meta";
import { ArticleProps } from "../../../Interfaces";

const article = ({ article }: ArticleProps) => {
  //   const router = useRouter();
  //   const { id } = router.query;
  return (
    <>
      <Meta title={article.title} description={article.excerpt} />
      <h1>{article.title}</h1>
      <p>{article.body}</p>
      <br />
      <Link href="/">Volver</Link>
    </>
  );
};

export const getStaticProps: GetStaticProps = async (context: any) => {
  const res = await fetch(`
        ${server}/api/articles/${context.params.id} `);
  const article = await res.json();
  return {
    props: {
      article,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const res = await fetch(`${server}/api/articles`);
  const articles = await res.json();
  const paths = articles.map((article: any) => ({
    params: { id: article.id.toString() },
  }));
  return {
    paths,
    fallback: false,
  };
};

/* export const getStaticProps: GetStaticProps = async (context: any) => {
  const res = await fetch(`
        https://jsonplaceholder.typicode.com/posts/${context.params.id} `);
  const article = await res.json();
  return {
    props: {
      article,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const articles = await res.json();
  const paths = articles.map((article: any) => ({
    params: { id: article.id.toString() },
  }));
  return {
    paths,
    fallback: false,
  };
}; */

//Este export debe ir de ultimo en el archivo para
//que funcione el getStaticProps y el getServerSideProps.
export default article;

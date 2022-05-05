//import { useRouter } from "next/router";
import styled from "styled-components";
import { server } from "../../../config";
import { GetStaticPaths, GetStaticProps } from "next";
import Link from "next/link";
import Meta from "../../../components/Meta";
import { ArticleProps } from "../../../Interfaces";
import Image from "next/image";

const Section = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 8rem;
  overflow: hidden;
  position: relative;
  @media (max-width: 768px) {
    padding: 2rem;
  }

  .date {
    font-size: 0.8rem;
    margin: 0.5rem;
    align-self: flex-start;
  }
  .title {
    font-size: 3rem;
    font-weight: bold;
    margin-bottom: 1rem;
  }
  .body {
    font-size: 1.5rem;
    margin-bottom: 1rem;
  }
`;

const article = ({ article }: ArticleProps) => {
  //   const router = useRouter();
  //   const { id } = router.query;
  return (
    <Section>
      <Meta title={article.title} description={article.excerpt} />
      <div style={{ height: "500px", width: "100%", position: "relative" }}>
        <Image src={article.picture} layout="fill" />
      </div>
      <p className="date">{article.date}</p>
      <p className="author">{article.author}</p>
      <h1 className="title">{article.title}</h1>
      <p className="body">{article.body}</p>
      <br />
      <div className="link-wrapper">
        <Link href="/">Volver</Link>
      </div>
    </Section>
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

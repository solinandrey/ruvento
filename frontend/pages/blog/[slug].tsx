import Layout from "@src/components/Layout";
import { fetchAPI } from "lib/api";
import ReactMarkdown from "react-markdown";
import styles from "./Blog.module.scss";
import { urlBuilder } from "@src/mixins";
import Image from "next/image";
import remarkGfm from "remark-gfm";
import remarkImages from "remark-images";

const ArticlePage = ({ article }: any) => {

  return (
    <Layout>
      <div className={styles.article}>
        <div className={styles.title}>{article.title}</div>
        <div className={styles.content}>
          {// eslint-disable-next-line
          }
          <ReactMarkdown
            children={article.content}
            remarkPlugins={[remarkGfm, [remarkImages, { exclude: "external" }]]}
            transformImageUri={(uri) => urlBuilder(uri)}
          />
        </div>
      </div>
    </Layout>
  );
};

export default ArticlePage;

export async function getStaticProps({ params }: any) {
  const res = await fetchAPI(`/articles/${params.slug}`, {
    populate: "deep",
  });

  console.log(params.slug, res, "res");
  return {
    props: {
      article: res.data.attributes,
    },

    revalidate: 60,
  };
}

export const getStaticPaths = async () => {
  return {
    paths: [], //indicates that no page needs be created at build time
    fallback: "blocking", //indicates the type of fallback
  };
};

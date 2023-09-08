import { api } from "@/services/api";
import { Ipost } from "../page";

interface IPageProps {
  params: { id: string };
}

export const revalidate = 30;

export async function generateStaticParams() {
  const response = await api.get<Ipost[]>("/posts", {
    params: {
      _limit: 5,
      _page: 1,
    },
  });
  return response.data.map((post) => post.id + ""); // equal to toString or class String()
}

// const params = generateStaticParams();
// // [{id: 1}, {id: 2}, {id: 3}]

// params.map((param) => <PostPage params={param}/>)

export default async function PostPage({ params }: IPageProps) {
  const response = await api.get<Ipost>(`posts/${params.id}`);
  const post = response.data;

  return (
    <>
      <h1>{post.title}</h1>
      {post.content.map((paragraph) => (
        <p key={paragraph.slice(0, 15)}>{paragraph}</p>
      ))}
    </>
  );
}

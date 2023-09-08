import Card from "@/components/Card";
import { api } from "@/services/api";
import styles from "./styles.module.scss";
export interface Ipost {
  id: number;
  title: string;
  description: string;
  content: string[];
}

async function getPosts() {
  try {
    const response = await api.get<Ipost[]>("posts");

    // Apenas para simular o loading
    await new Promise((resolve) => {
      setTimeout(resolve, 1000);
    });

    return response.data;
  } catch (error) {
    console.error(error);
    throw new Error("Falied");
  }
}

export default async function PostPage() {
  const posts = await getPosts();
  return (
    <ul className={styles.container}>
      {posts.map((post, index) => {
        const color = index % 2 ? "first" : "second";
        return <Card key={post.id} post={post} color={color} />;
      })}
    </ul>
  );
}

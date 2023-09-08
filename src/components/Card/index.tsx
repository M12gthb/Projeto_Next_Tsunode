"use client";

import { Ipost } from "@/app/posts/page";
import Link from "next/link";
import styles from "./style.module.scss";
import { useContext, useEffect, useRef } from "react";
import { TestContext } from "@/providers/TestContext";
interface ICardProps {
  post: Ipost;
  color: "first" | "second";
}

export default function Card({ post, color }: ICardProps) {
  // const test = useContext(TestContext);
  const liElement = useRef<HTMLLIElement>(null);

  useEffect(() => {
    const liCurrent = liElement.current;

    if (!liCurrent) {
      return;
    }

    const sizeRow = Math.floor(liCurrent.offsetHeight / 9);

    liCurrent.style.gridRowEnd = `span ${sizeRow}`;
  }, []);
  return (
    <li ref={liElement} className={styles.container} data-color={color}>
      <h3>{post.title}</h3>
      <p>{post.description}</p>
      <Link href={`/posts/${post.id}`}>Acessar</Link>
    </li>
  );
}

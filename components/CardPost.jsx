import React from "react";
import InfoPost from "./InfoPost";
import Link from "next/link";

export default function CardPost({ thumbnail, ...infoPost }) {
  return (
    <article>
      <Link href="/detail">
        <a>
          <img src={thumbnail} alt="" />
        </a>
      </Link>
      <InfoPost {...infoPost} />
    </article>
  );
}

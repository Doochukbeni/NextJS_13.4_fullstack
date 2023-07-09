import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Blog",
  description:
    "you can as well share your ideas and leave a comment on any thing",
};

async function getData() {
  const res = await fetch("http://localhost:3000/api/posts", {
    cache: "no-store",
  });

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

const Blog = async () => {
  const data = await getData();

  return (
    <section>
      {data.map((blog) => (
        <Link
          key={blog._id}
          href={`/blog/${blog._id}`}
          className="flex gap-10 items-center cat__item border-5 mb-4 shadow-2xl p-3"
        >
          <div className="flex-1 relative img__container2">
            <Image
              src={blog.image}
              alt="blog-image"
              className="cat__img rounded-md"
              fill={true}
            />
          </div>
          <div className="flex-1">
            <h1>{blog.title}</h1>
            <p>{blog.desc}</p>
          </div>
        </Link>
      ))}
    </section>
  );
};

export default Blog;

import Link from 'next/link'

export default function Post({ post }) {
  return (
    <>
    <head>
      <script
        type="text/javascript"
        async="async"
        src="//pl18342317.highcpmrevenuenetwork.com/78/c8/bc/78c8bc6
    79de968d3ea881edfe3d9c47c.js"
      ></script>
      </head>
      <body>
      <div className="card">
        <img src={post.frontmatter.cover_image} alt="" />
        <div className="post-date">posted on {post.frontmatter.date}</div>
        <h3>{post.frontmatter.title}</h3>

        <p>{post.frontmatter.excerpt}</p>

        <Link href={`/blog/${post.slug}`}>
          <a className="style">Read More</a>
        </Link>
      </div>
      </body>
    </>
  );
}
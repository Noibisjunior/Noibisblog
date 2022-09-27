import matter from 'gray-matter'
import path from 'path'
import fs from 'fs'
import Head from 'next/head'
import Post from '../components/post'
import Script from 'next/script';
import { sortByDate } from '../utils'

export default function Home({ posts }) {

  return (
    <>
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      
        <title>NOIBIS blog</title>
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5322277310257930"
          crossOrigin="anonymous"
        ></script>
        <meta name="blog" content="coding blog" />
        </Head>
      <div className="posts">
        {posts.map((post, index) => (
          <Post key={index} post={post} />
        ))}
      </div>
    
    </>
  );
}
export async function getStaticProps() {
  // Get files from the post dir
  const files = fs.readdirSync(path.join('posts'))
  //console.log(files)

  // Get slug and frontmatter from posts
  const posts = files.map(filename => {
    // create slug
    const slug = filename.replace('.md', '')

    // Get frontmatter

    const markdownWithMeta = fs.readFileSync(
      path.join('posts',filename),'utf-8'
    )

const { data: frontmatter } = matter(markdownWithMeta)

    return {
      slug,
      frontmatter,
    }
  })

  
  return {
    props: {
      posts: posts.sort(sortByDate),
        },
  }
}
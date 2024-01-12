import FeaturedPost from "@/components/home-page/featured-post";
import Hero from "@/components/home-page/home-page";
import { getFeaturedPosts } from "@/lib/posts-util";
import { Fragment } from "react";

function HomePage(props) {
  return (
    <Fragment>
      <Hero />
      <FeaturedPost posts={props.featuredPosts}/>
    </Fragment>
  );
}
export async function getStaticProps(){
  const featuredPosts= getFeaturedPosts();

  return {
    props: {
      featuredPosts: featuredPosts
    }
  }
}
export default HomePage;

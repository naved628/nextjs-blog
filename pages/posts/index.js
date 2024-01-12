import AllPosts from "@/components/posts/all-posts";
import { getAllPosts } from "@/lib/posts-util";

function AllPostPages(props){
    return <AllPosts posts={props.allPosts}/>

}

export async function getStaticProps(){
    const allPosts = getAllPosts();

    return {
        props:{
            allPosts:allPosts
        }
    }
}

export default AllPostPages;
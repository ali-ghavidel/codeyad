

import swal from "sweetalert";
import JPService from "../JPService";


let byAuthor = [];
let arr1,arr2,arr3 = [];
export const getAllPostsService = async (setPosts, setMainPosts, page, setTotal) => {
    const res3 = await JPService.get('posts');
    const res = await JPService.get('posts', {params: { _page: page, _limit: 10}});
    
    arr3 = res3.data;
    arr1 = res.data;
    setTotal(arr3.length / 10);

    try {
        const res2 = await JPService.get('users');
        arr2 = res2.data;
        
        try{
            arr1.forEach((post)=>{
                arr2.forEach((user) => {
                    if(user.id === post.userId){
                        byAuthor = [...byAuthor, {
                            userId: post.userId,
                            author: user.name,
                            id: post.id,
                            title: post.title,
                            body: post.body
                        }];
                        

                    }
                })
            });
            setPosts(byAuthor);
            setMainPosts(byAuthor);
            byAuthor = [];
        }catch (error){
            console.log(error);
        }
    }catch(error){
        console.log(error);
    }
    
    
}
export const getUserPosts = async (userId, setPosts, page, setTotal, setUser) => {
    const res = await JPService.get(`users/${userId}/posts`, {params: {_page: page, _limit: 10}});
    
    
    try{
        
        setTotal(res.data.length / 10);
        setPosts(res.data);
        const res2 = await JPService.get(`users/${userId}`);
        try{
            setUser(res2.data);
        } catch(error){
            console.log(error);
        }
        
    } catch (error){
        console.log(error);
    }
}

export const setNewPostService = async (post, userId) => {
    const res = await JPService.post('posts', {
        userId: userId,
        title: post.title,
        body: post.body
    });
    try{
        swal("انجام شد", `پست ${res.data.title} اضافه شد`, "success", {buttons: "حله"});
    } catch (error) {
        console.log(error);
    }
}

export const getByPostIdService = async (postId, setPost) => {
    const res = await JPService.get(`/posts/${postId}`);
    try{
        setPost(res.data);
    } catch (error) {
        console.log(error);
    }


}

export const updatePostService = async (post, userId) => {
    const res = await JPService.put(`posts/${post.id}`,{
        id: post.id,
        title: post.title,
        body: post.body,
        userId
    })

    try {
        swal("انجام شد", `پست ${res.data.title} بروزرسانی شد`, "success", {buttons: "حله"});
    } catch (error) {
        console.log(error);
    }
}

export const deletePostService = async (id, title) => {
    await JPService.delete(`posts/${id}`);
    try {
        swal(`پست ${title} با موفقیت حذف شد`, {
            icon: "success",
          });
    } catch (error) {
        swal(`خطایی رخ داد: ${error}`, {
            icon: "success",
          });
    }
}
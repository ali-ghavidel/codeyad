import JPService from "../JPService"


export const getCommentsOfPost = async (postId, setComments, setMainComments) => {
    const res = await JPService.get(`posts/${postId}/comments`);
    try {
        setComments(res.data);
        setMainComments(res.data);
    } catch (error) {
        console.log(error);
    }
}
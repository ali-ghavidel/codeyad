
import JPService from "../JPService"
import swal from 'sweetalert';
export const getAlbumsService = async (setAlbums, setMainAlbums, page) => {
    let byAuthor = [];
    const res = await JPService.get('albums', {params: {_page: page, _limit:10}});
    const userRes = await JPService.get('users');
    try {
        res.data.forEach((album)=>{
            userRes.data.forEach((user)=>{
                if(user.id === album.userId){
                    byAuthor = [...byAuthor, {
                        id: album.id,
                        author: user.name,
                        title: album.title,
                        userId: album.userId
                    }];
                }
            })
        })
        setAlbums(byAuthor);
        setMainAlbums(byAuthor);
        byAuthor = [];
    } catch (error) {
        swal("اوپس!", `خطایی رخ داده: ${error.data}`, "success");
    }
}
export const getPhotosService = async (setPhotos, setMainPhotos, page, albumId, setTotal) => {
    let byAlbum = [];
    const res = await JPService.get(`albums/${albumId}/photos`, {params: {_page: page, _limit:10}});
    const resFullAlbum = await JPService.get(`albums/${albumId}/photos`);
    setTotal(resFullAlbum.data.length);
    const albumRes = await JPService.get('albums');
    try {
        res.data.forEach((photo)=>{
            albumRes.data.forEach((album)=>{
                if(album.id === photo.albumId){
                    byAlbum = [...byAlbum, {
                        albumId: album.id,
                        albumTitle: album.title,
                        title: photo.title,
                        url: photo.url,
                        thumbnailUrl: photo.thumbnailUrl,
                        id: photo.id
                    }];
                }
            })
        })
        setPhotos(byAlbum);
        setMainPhotos(byAlbum);
        byAlbum = [];
    } catch (error) {
        swal("اوپس!", `خطایی رخ داده: ${error.data}`, "success");
    }
}
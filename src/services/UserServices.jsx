import swal from "sweetalert";
import JPService from "../JPService";



export const addUserService = async (newUser) => {
    const res = await JPService.post('users', newUser);
    if(res){
        if(res.status === 200 || res.status === 201){
            swal("احسنت!", `${newUser.name} به عنوان کاربر جدید اضافه شد`, "success");
        }else{
            swal("اوپس!", "افزودن کاربر ناموفق بود", "error");
        }
    }
}

export const updateUserService = async (userId, newUser) => {
    const res = await JPService.put(`users/${userId}`, newUser);
    if(res){
        if(res.status === 200 || res.status === 201){
            swal("احسنت!", `اطلاعات کاربر ${newUser.name} ویرایش شد`, "success");
        }else{
            swal("اوپس!", "ویرایش کاربر ناموفق بود", "error");
        }
    }
}

export const getUserByIdService = async (setNewUser, userId) => {
    const res = await JPService.get(`users/${userId}`);
    if(res){
        setNewUser({
            name: res.data.name,
            username: res.data.username,
            email: res.data.email,
            address: {
            street: res.data.address.street,
            suite: res.data.address.suite,
            city: res.data.address.city,
            zipcode: res.data.address.zipcode
            }
        })
    }
}

export const getInitAllUsers = async (setInitUsers, setIsSetUser) => {
    const res = await JPService.get('users');
    try {
        setInitUsers(res.data);
        setIsSetUser(true);
    }catch (error){
        console.log(error);
    }
}

export const getAllUsersSErvice = async (setUsers, setMainUsers) => {
    const res = await JPService.get('users');
    // if(res){
    //     setUsers(res.data);
    //     setAltUsers(res.data);
    // }
    try {
        setUsers(res.data);
        setMainUsers(res.data);
    } catch (error) {
        console.log(error);
    }
}

export const deleteUserService = async (id , users, setUsers) => {
    const res = await JPService.delete(`users/${id}`);
    try {
        if(res.status === 200){
            const newUsers = users.filter((v)=>v.id !== id);
            setUsers(newUsers);
            swal("کاربر با موفقیت حذف شد", {
                icon: "success",
                buttons: "حله"
            });
        }else{
            swal("خطایی رخ داد", {
                icon: "error",
                buttons: "حله"
            });
        }
    } catch(error) {
        console.log(error);
    }
}
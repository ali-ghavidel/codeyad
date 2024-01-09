import swal from "sweetalert";
import JPService from "../JPService"

export const getAllUsers2 = async ( dispatch )=> {
    const res = await JPService.get('users');
    try {
        // dispatch(res.data);  
        dispatch({act:"getUsers", value:res.data});  
    } catch (error) {
        console.log(error);
    }
    
}
export const getAllUsers = async ( setUsers )=> {
    const res = await JPService.get('users');
    try {
        // dispatch(res.data);  
        // dispatch({act:"getUsers", value:res.data});  
        setUsers(res.data);
    } catch (error) {
        console.log(error);
    }
    
}
export const getUserTodosService = async (userId, setTodos , setMainTodos, page, setTotal) => {

    const resTotal = await JPService.get(`users/${userId}/todos`);
    try {
        setTotal(resTotal.data);
    } catch (error) {
        console.log(error);
    }
    const res = await JPService.get(`users/${userId}/todos` , {params: {_page: page, _limit:10}});
    
    try {
        setTodos(res.data);
        setMainTodos(res.data);
    } catch (error) {
        console.log(error);
    }
}
export const deleteTodoService = async (id, title) => {
    await JPService.delete(`posts/${id}`);
    try {
        swal(`کار ${title} با موفقیت حذف شد`, {
            icon: "success",
          });
    } catch (error) {
        swal(`خطایی رخ داد: ${error}`, {
            icon: "success",
          });
    }
}
export const addNewTodo = async (todo) => {
    const res = await JPService.post('todos', {
        userId: todo.userId,
        title: todo.title,
        completed: todo.completed
    });
    try {
        swal(`کار ${res.data.title} با موفقیت اضافه شد`, {
            icon: "success",
          });
          
    } catch (error) {
        console.log(error);
    }
}
export const getTodoInfo = async (dispatch, todoId) => {
    const res = await JPService.get(`todos/${todoId}`);
    try {
        // setTodo(res.data);
        dispatch({act: "getTodo", value: res.data});
    } catch (error) {
        console.log(error);
    }
}
export const updateTodoService = async (todo, todoId) => {
    const res = await JPService.update(`todos/${todoId}`, {
        userId: todo.userId,
        title: todo.title,
        completed: todo.completed
    });
    try {
        swal(`کار ${res.data.title} با موفقیت بروزرسانی شد`, {
            icon: "success",
          });
          
    } catch (error) {
        console.log(error);
    }
}
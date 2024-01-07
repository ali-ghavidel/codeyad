import { createContext } from "react";

export const MainContext = createContext({
    showMenu: false,
    setShowMenu: ()=>{}
});
export const UsersContext = createContext({
    currentUser: [],
    setCurrentUser: ()=>{}
});
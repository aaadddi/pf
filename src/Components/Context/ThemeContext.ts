import { createContext,  } from "react";

type themes = "light" | "dark"
interface ContextProps{
    theme: themes,
    changeTheme: () => void
}
export const ThemeContext = createContext<ContextProps>({theme: "light",changeTheme: ()=>{} })

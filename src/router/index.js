import About from "../views/about/about";
import Home from "../views/home";
import Center from "../views/center/Center";
import Login from "../views/login/Login";
import { Navigate,useLocation,
    useNavigate } from 'react-router-dom'
    import {useEffect} from 'react'
export default ([
    {
        path: '/Home',  //路径
        element: <AuthRouter> <Home /></AuthRouter>,  //组件
        // element: <Navigate to='/Login' />
        children: [
            {
                path: 'Center',
                element: <Center />
            },
            {
                path: 'About',
                element: <About />
            },

        ]


    },
    {
        path: 'login',
        element: <Login />
    },
    {
        path: '/',
        //实现路由重定向
        element: <Navigate to='/Login' />
    }
])

const getToken = () => {
    return localStorage.getItem("token")
}
 
 
 
// 创建一个高阶组件，高阶组件就是 把一个组件当做另一个组件的参数传入 然后通过判断 返回新的组件
// 下面的 AuthRouter 就是一个高阶组件
 
function AuthRouter( {children} ) {
    // 获取token
    const token = getToken()
    console.log(token,"agagag");
    // 判断token是否存在 存在直接渲染主页面
    if (token) {
        return <>{children}</>
    } else {
        return <Navigate to={'/login'}></Navigate>  //没有token跳转登录页面
    }
}


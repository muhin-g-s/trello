import { lazy } from "react"
import { Route, Routes } from "react-router-dom"
import SuspenseWrapper from "./SuspenseWrapper"
import MainLayout from "../layout/MainLayout"

//TODO сделать спинер
//TODO сделать non found

const Board = lazy(() => import("../component/page/Board"))

const Router = () => {
    return (
        <Routes>
            <Route path="/" element={<MainLayout />}>
                <Route index element={<SuspenseWrapper children={<Board />} />} />
            </Route>
        </Routes>
    )
}

export default Router
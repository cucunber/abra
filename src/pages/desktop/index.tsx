import { Programs } from "../../widgets/pc/programs"
import { PC } from "../../shared/layouts/pc"
import { Outlet } from "react-router-dom"
import { Windows } from "../../widgets/pc/windows"

export const Desktop = () => {
    return (
        <PC>
            <Programs />
            <Windows />
            <Outlet />
        </PC>
    )
}
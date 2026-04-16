import { NavLink } from "react-router-dom";

const PageNotFound = () => {
    return (
        <div className="h-screen flex flex-col gap-10 items-center justify-center">
            <p className="text-6xl text-center">404 page found</p>
            <NavLink to="/" className="bg-(--color-primary) text-white py-5 px-10 rounded-lg"> Go Back </NavLink>
        </div>
    )
}

export default PageNotFound;
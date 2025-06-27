import { createRootRoute, Link, Outlet } from '@tanstack/react-router'

export const Route = createRootRoute({
    component: () => (
        <>
            <div className="p-2 flex gap-2">
                <Link to="/" className="[&.active]:font-bold">
                    Home
                </Link>{' '}
                <Link to="/about" className="[&.active]:font-bold">
                    About
                </Link>
                <Link to="/menu" className="[&.active]:font-bold">
                    Menu
                </Link>
                <Link to="/reservations" className="[&.active]:font-bold">
                    Reservations
                </Link>
                <Link to="/order" className="[&.active]:font-bold">
                    Order Online
                </Link>
                <Link to="/login" className="[&.active]:font-bold">
                    Login
                </Link>
            </div>
            <hr />
            <Outlet />
        </>
    ),
})
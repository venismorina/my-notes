import { Outlet } from "react-router-dom";  

function Layout() {
  return (
    <main className="bg-slate-100">
        <Outlet/>
    </main>
  )
}

export default Layout
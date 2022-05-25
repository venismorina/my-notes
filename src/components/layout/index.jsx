import { Outlet } from "react-router-dom";  

function Layout() {
  return (
    <main className="bg-slate-100 dark:bg-slate-800">
        <Outlet/>
    </main>
  )
}

export default Layout
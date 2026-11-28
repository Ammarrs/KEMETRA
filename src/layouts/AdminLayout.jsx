import Dashboard from '../pages/Admin/Dashboard'
import AdminNavbar from './../components/AdminNavbar';

function AdminLayout() {
  return (
    // Column on mobile (top bar above content), row from md up (sidebar beside content).
    <div className='flex min-h-screen flex-col md:flex-row'>
      <AdminNavbar/>
      <Dashboard/>
    </div>
  )
}

export default AdminLayout

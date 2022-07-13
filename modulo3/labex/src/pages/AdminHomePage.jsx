import { useProtectedPage } from "../hooks/useProtectedPage";


function AdminHomePage() {
    
    useProtectedPage();

    return (
        <div>
            <h1>Admin Home Page</h1>
        </div>
    )
}

export default AdminHomePage;
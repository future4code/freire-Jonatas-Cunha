import { useEffect } from "react";
import { useProtectedPage } from "../hooks/useProtectedPage";

function TripDetailsPage() {

        useProtectedPage();

    return (
        <div>
            <h1>Trip Details Page</h1>
        </div>
    )
}

export default TripDetailsPage;
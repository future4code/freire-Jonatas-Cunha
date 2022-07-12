import { useState, useEffect } from "react";

function ListOfCountries() {

    const [countries, setCountries] = useState({});

    useEffect(() => {
        fetch("./countries.json")
            .then(res => res.json())
            .then(data => {
                setCountries(data);
            }
            );
    }, []);

    return (
        {countries}
    )
}

export default ListOfCountries;
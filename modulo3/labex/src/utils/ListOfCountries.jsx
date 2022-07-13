import { useState, useEffect } from "react";

function ListOfCountries() {

    const [countries, setCountries] = useState([]);

    useEffect(() => {
        fetch("/countries.json", {
            headers: {
                Accept: "application/json",
            }
        })
            .then(res => res.json())
            .then(data => {
                let countries = [];
                data.forEach(country => {
                    countries = ([...countries, {label: country.nome, code: country.sigla2}]);
                    ;
                    setCountries(countries)
                })
            }
            );
    }, []);


    return (
        {countries}
    )
}

export default ListOfCountries;
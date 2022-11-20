import * as s from "./styles";
import Sidebar from "../../components/Sidebar/Sidebar";
import Results from "../../components/Results/Results";
import LoaderError from "../../components/LoaderError/LoaderError";
import { useState, useEffect } from "react";
import { getResults } from "../../services/getResults";


const ResultsPage = () => {

    const games = ["mega-sena", "quina", "lotofacil", "lotomania", "timemania", "dia-de-sorte"];

    const [selectValue, setSelectValue] = useState("mega-sena");
    const [results, setResults] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    const [reload, setReload] = useState(false);

    useEffect(() => {
        getResults(selectValue, setLoading, setResults, setError);
    }, [selectValue, reload]);



    return (
        <s.Container>


            {error ? < LoaderError  setReload={setReload} reload={reload}/> : (
                <>
                    <Sidebar
                        games={games}
                        setSelectValue={setSelectValue}
                        selectValue={selectValue}
                        results={results}
                        loader={loading}
                    />

                    <Results
                        results={results.dezenas}
                        loading={loading}
                        selectValue={selectValue}
                    />
                </>

            )}
        </s.Container>
    );
};

export default ResultsPage;
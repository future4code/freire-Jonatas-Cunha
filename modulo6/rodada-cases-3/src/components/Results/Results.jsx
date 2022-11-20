import * as s from "./styles";
import { BollsQuantity } from "../../utils/BollsQuantity";

const Results = ({ results, loading, selectValue }) => {

    const arrayLoader = Array(BollsQuantity(selectValue)).fill("");

    const ShowLoader = () => {
        return arrayLoader.map((item, index) => (
            <s.Boll key={index}> </s.Boll>
        ));
    };


    const ShowResults = () => {
        return results.map((result, index) => {
            return (
                <s.Boll key={index}>
                    <p>{result}</p>
                </s.Boll>
            );
        });
    };


    return (
        <s.ResultsContainer>
            <s.ResultBox>
                {loading ? <ShowLoader /> : <ShowResults />}
            </s.ResultBox>
        </s.ResultsContainer>
    )

};

export default Results;
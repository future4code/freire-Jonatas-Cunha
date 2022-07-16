import { useRequestList } from '../../hooks/useRequestList';
import { useState } from 'react';
import { ContainerTrips, BoxTrip, BoxPlanet, ContainerSearchBar } from './style';
import { Loader } from "../../components/Loader/Loader"
import { useNavigate } from 'react-router-dom';
import ImgPlanets from '../../utils/ImgPlanets';
import { BiSearch } from 'react-icons/bi';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import { ContainerWidth } from '../../base/GlobalStyles';




function ListTripsPage() {

    const [valueSearch, setValueSearch] = useState("");

    const [trips, loading] = useRequestList();
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/trips/application');
    }

    const changeValueSearch = (e) => {
        setValueSearch(e.target.value);
    }

    const RenderTrips = () => {
        return (trips
            .filter((trip) => {
                return (
                    trip.name.toLowerCase().includes(valueSearch.toLowerCase()) ||
                    trip.planet.toLowerCase().includes(valueSearch.toLowerCase()) ||
                    trip.description.toLowerCase().includes(valueSearch.toLowerCase())
                )
            })
            .map(trip => {
                return (
                    <BoxTrip key={trip.id}>
                        <h3>{trip.name}</h3>
                        <p>{trip.description}</p>
                        <BoxPlanet>
                            <p>{trip.planet}</p>
                            <ImgPlanets planet={trip.planet} />
                        </BoxPlanet>
                        <p><strong>Dias:</strong> {trip.durationInDays}</p>
                        <p>{trip.date}</p>
                        <button onClick={handleClick}>Apply</button>
                    </BoxTrip>
                );
            }));
    }


    return (
        <ContainerWidth>
            <div style={{margin: "0 auto"}}>
                {loading ? <Loader /> :
                    <>
                        <ContainerSearchBar>

                            <BiSearch size={30} color="#979797" />

                            <input
                                value={valueSearch}
                                onChange={changeValueSearch}
                                type="text"
                                placeholder="Search"
                            />

                            {valueSearch.length > 0 ? <button
                                onClick={() => setValueSearch("")}
                            ><AiOutlineCloseCircle size={30} color="#979797" /></button> : null}

                        </ContainerSearchBar>
                        <ContainerTrips>
                            <RenderTrips />
                        </ContainerTrips>
                    </>
                }
            </ div>
        </ContainerWidth>

    )
}
export default ListTripsPage;
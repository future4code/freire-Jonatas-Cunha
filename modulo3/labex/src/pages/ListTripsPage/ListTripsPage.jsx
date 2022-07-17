import { useRequestList } from '../../hooks/useRequestList';
import { useState, useEffect, useCallback } from 'react';
import { ContainerTrips, BoxTrip, BoxPlanet, ContainerSearchBar } from './style';
import { Loader } from "../../components/Loader/Loader"
import { useNavigate } from 'react-router-dom';
import ImgPlanets from '../../utils/ImgPlanets';
import { BiSearch } from 'react-icons/bi';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import { ContainerWidth } from '../../base/GlobalStyles';
import NoResults from '../../components/NoResults/NoResults';

function ListTripsPage() {

    const [trips, loading] = useRequestList();
    const [valueSearch, setValueSearch] = useState("");
    const [listTrips, setListTrips] = useState([]);

    const navigate = useNavigate();

    const handleClick = (id) => {
        navigate(`/trips/application/${id}`)
    }

    const changeValueSearch = (e) => {
        setValueSearch(e.target.value);
    }
    
    const handleSubmit = (e) => {
        e.preventDefault();
        document.activeElement.blur();
    }

    const handleSearch = useCallback(() => {
        setListTrips(trips.filter(trip => {
            return (
                trip.name.toLowerCase().includes(valueSearch.toLowerCase()) ||
                trip.planet.toLowerCase().includes(valueSearch.toLowerCase()) ||
                trip.description.toLowerCase().includes(valueSearch.toLowerCase())
            )
        }))
    }, [valueSearch, trips]);


    useEffect(() => {
        handleSearch();
    }, [handleSearch]);

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
                        <p><strong>Duração:</strong> {trip.durationInDays}</p>
                        <p><strong>Partida:</strong> {trip.date}</p>
                        <button onClick={() => handleClick(trip.id)}>Inscreva-se</button>
                    </BoxTrip>
                );
            }))
    }


    return (
        <ContainerWidth>
            <div style={{ margin: "0 auto" }}>
                {loading ? <Loader /> :
                    <>
                        <ContainerSearchBar>

                            <BiSearch size={30} color="#979797" />
                            <form onSubmit={handleSubmit}>
                                <input
                                    value={valueSearch}
                                    onChange={changeValueSearch}
                                    type="text"
                                    placeholder="Search"
                                />
                            </form>
                            <button
                                onClick={() => setValueSearch("")}
                            >{valueSearch.length > 0
                                ? <AiOutlineCloseCircle size={30} color="#979797" style={{ cursor: "pointer" }} />
                                : null}
                            </button>

                        </ContainerSearchBar>
                        <ContainerTrips>

                        {listTrips.length > 0 ? <RenderTrips /> : <NoResults />}
                        </ContainerTrips>
                    </>
                }
            </ div>
        </ContainerWidth>

    )
}
export default ListTripsPage;
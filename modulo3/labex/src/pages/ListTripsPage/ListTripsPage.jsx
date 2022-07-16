import { useRequestList } from '../../hooks/useRequestList';
import { ContainerTrips, BoxTrip, BoxPlanet } from './style';
import { Loader } from "../../components/Loader/Loader"
import { useNavigate } from 'react-router-dom';
import ImgPlanets from '../../utils/ImgPlanets';

function ListTripsPage() {

    const [trips, loading] = useRequestList();

    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/trips/application');
    }

    const RenderTrips = () => {
        return trips.map(trip => {
            console.log(trip);
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
        });
    }


    return (

        <div>
            {loading ? <Loader /> :

                <ContainerTrips>
                    <RenderTrips />
                </ContainerTrips>

            }
        </ div>
    )
}
export default ListTripsPage;
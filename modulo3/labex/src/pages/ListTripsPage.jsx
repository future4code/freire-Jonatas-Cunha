import { useResquestList } from '../hooks/useRequestList';
import { Loader } from "../components/Loader/Loader"




function ListTripsPage() {

    const [trips, loading] = useResquestList();

    const RenderTrips = () => {
        return trips.map(trip => {
            return (
                <div key={trip.id}>
                    <h3>{trip.name}</h3>
                    <p>{trip.description}</p>
                </div>
            );
        });
    }


    return (

        <div>
            {loading ? <Loader /> : <RenderTrips />}
        </ div>
    )
}
export default ListTripsPage;
import { useState } from 'react';
import { useEffect } from 'react';
import StatusCard from './StatusCard';

function Status() {
	const [flightStatuses, setFlightStatuses] = useState([]);

	useEffect(() => {
		const fetchData = async () => {
			const response = await fetch('http://localhost:8080/check-status');
			const { airportQueryResult } = await response.json();
      if(airportQueryResult.length){
        setFlightStatuses(airportQueryResult);
      }
		};
		fetchData();
	}, []);
	return (
		<>
			<div className="bg-gray-200">
				<div>
					<span>Check status of all flights here</span>
				</div>
				<div>
					{flightStatuses.length <= 0 ? (
						<div>
							<span>No Data available</span>
						</div>
					) : (
						flightStatuses.map((flight) => (
							<div>
								<StatusCard flighStatus={flight} />
							</div>
						))
					)}
				</div>
			</div>
		</>
	);
}

export default Status;

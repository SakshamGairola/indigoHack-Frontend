function StatusCard({ flighStatus }) {
	const convertToLocalDateTimeString = (utcTimestamp) => {
		if (!utcTimestamp) {
			return null;
		}

		// Parse the UTC timestamp to a Date object
		const date = new Date(utcTimestamp);

		// Options for the date and time formatting
		const options = {
			weekday: 'long',
			year: 'numeric',
			month: 'long',
			day: 'numeric',
			hour: '2-digit',
			minute: '2-digit',
			second: '2-digit',
			timeZoneName: 'short',
		};

		// Convert to local date and time string
		const localDateTimeString = date.toLocaleString('en-US', options);

		return localDateTimeString;
	};

	const colorStatus = (status) => {
		switch (status.toLowerCase()) {
			case 'ontime':
			case 'arrived':
			case 'scheduled':
				return 'text-green-500';
			case 'delayed':
				return 'text-orange-400';
			case 'cancelled':
				return 'text-red-500';
			default:
				return 'text-gray-500';
		}
	};

	return (
		<>
			<div className="m-10 p-10 bg-white">
				<div className="flex justify-around">
					<div>{flighStatus.flight}</div>
					<div className={`${colorStatus(flighStatus.status)}`}>
						<b>{flighStatus.status}</b>
					</div>
					<div>{flighStatus.airline}</div>
				</div>
				<br />
				<div className="flex justify-around">
					<div className="flex flex-col ml-[6rem]">
						<div>
							<b>Arrival Gate:</b> {flighStatus.arrival_gate ?? '-'}
						</div>
						<div>
							<b>Departure Gate:</b> {flighStatus.departure_gate ?? '-'}
						</div>
					</div>
					<div className="flex flex-col ml-[6rem]">
						<div>
							<b>Scheduled Arrival:</b> {convertToLocalDateTimeString(flighStatus.scheduled_arrival) ?? '-'}
						</div>
						<div>
							<b>Actual Arrival:</b> {convertToLocalDateTimeString(flighStatus.actual_arrival) ?? '-'}
						</div>
					</div>
					<div className="flex flex-col ml-[6rem]">
						<div>
							<b>Scheduled Departure:</b> {convertToLocalDateTimeString(flighStatus.scheduled_departure) ?? '-'}
						</div>
						<div>
							<b>Actual Departure:</b> {convertToLocalDateTimeString(flighStatus.actual_departure) ?? '-'}
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default StatusCard;

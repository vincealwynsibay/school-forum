import React, { Fragment } from "react";
import { Spinner as LoadingSpinner } from "react-bootstrap";

const Spinner = () => (
	<Fragment>
		<LoadingSpinner animation='border' role='status'>
			<span className='visually-hidden'>Loading...</span>
		</LoadingSpinner>
	</Fragment>
);

export default Spinner;

import { useCollection } from "../../hooks/useCollection";
import ProfilesList from "./ProfilesList";

const Profiles = () => {
	const { documents, error } = useCollection("users");
	console.log(documents);
	return (
		<div>
			{error && <p className='text-danger'>{error.message}</p>}
			<ProfilesList profiles={documents} />
		</div>
	);
};

export default Profiles;

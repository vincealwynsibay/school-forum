import { useCollection } from "../../hooks/useCollection";
import ProfilesList from "./ProfilesList";

const Profiles = () => {
	const { documents, error } = useCollection("users");
	return (
		<div>
			{error && <p>{error.message}</p>}
			<ProfilesList profiles={documents} />
		</div>
	);
};

export default Profiles;

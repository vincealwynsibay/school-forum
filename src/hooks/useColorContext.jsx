import { useContext } from "react";
import { ColorContext } from "../context/ColorContext";
const useColorContext = () => {
	const context = useContext(ColorContext);

	if (!context) {
		throw Error("useColorContext must be inside ColorContextProvider");
	}
	return context;
};

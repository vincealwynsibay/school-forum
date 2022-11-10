import { createContext } from "react";

export const ColorContext = createContext();

export const ColorContextProvider = ({ children }) => {
	return (
		<ColorContext.Provider theme={{ ...initialState }} value={{}}>
			{children}
		</ColorContext.Provider>
	);
};

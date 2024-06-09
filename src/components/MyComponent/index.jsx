import MobileComponent from "../MobileComponent";
import DesktopComponent from "../DesktopComponent";
import { useViewport } from "../hooks";

const MyComponent = () => {
	const { width } = useViewport();
	console.log(useViewport());
	const breakpoint = 620;

	return width < breakpoint ? <MobileComponent /> : <DesktopComponent />;
};

export default MyComponent;

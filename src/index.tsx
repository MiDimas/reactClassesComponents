import {createRoot} from "react-dom/client";
import {HelloComponent} from "./components/HelloComponent/HelloComponent";

const domNode = document.getElementById('root');
const root = createRoot(domNode);
root.render(<HelloComponent />);
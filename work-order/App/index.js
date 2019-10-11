import React from "react";
import RootNav from "./navigators/RootNav";
import { createAppContainer } from 'react-navigation';



const Root = createAppContainer(RootNav)
const App = () => {
    return <Root />
}
export default App;
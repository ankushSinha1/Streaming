import React from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import StreamCreate from "./streams/streamCreate";
import StreamShow from "./streams/streamShow";
import StreamEdit from "./streams/streamEdit";
import StreamList from "./streams/streamList";
import StreamDelete from "./streams/streamDelete";
import Header from "./header";
import history from "../history";
import { useParams } from "react-router-dom";
let App = () => {
    return(
        <div className="ui container">
            <div>
                <BrowserRouter history={history}>
                    <Header />
                    <Routes>
                        <Route path="/"  element={<StreamList />}/>
                        <Route path="/streams/:id" element={<ShowRoute/>}/>
                        <Route path="/streams/edit/:id" element={<EditRoute/>}/>
                        <Route path="/streams/delete/:id" element={<DeleteRoute/>}/>
                        <Route path="/streams/new" element={<StreamCreate />} />
                    </Routes>
                </BrowserRouter>
            </div>
        </div>
    )
}
let ShowRoute = () => {
    let {id} = useParams();
    return <StreamShow props = { {id} }/>
}
let EditRoute = () => {
    let {id} = useParams();
    return <StreamEdit props={ {id} }/>
}
let DeleteRoute = () => {
    let {id} = useParams();
    return <StreamDelete props = {{id}}/>
}
export default App
import { Route, Routes } from "react-router-dom";

import NewsMainModule from "./main";
import NewsCreateModule from "./main/createNews";
import NewsViewModule from "./main/viewNews";

const NewsModule = () => {
    return (
        <Routes>
            <Route path="/" element={<NewsMainModule />} />
            <Route path="/create" element={<NewsCreateModule />} />
            <Route path="/:id/view" element={<NewsViewModule />} />
        </Routes>
    );
};

export default NewsModule;

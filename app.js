const h1 = React.createElement("h1", {
    id: "heading1"
}, "This is H1");

const h2 = React.createElement("h2", {
    id: "heading2"
}, "This is H2");

const container = React.createElement("div", {
    hello: "world",
    id: "container"
}, [h1, h2]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(container);

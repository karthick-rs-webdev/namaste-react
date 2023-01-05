import ReactDOM from "react-dom/client";

const heading = (
    <h1>
        This is heading1
    </h1>
)

const Title = () => (
    <div>
        <h1>This is title</h1>
    </div>
)

const HeaderComponent = ({content}) => {
    return (
        <div>
            {heading}
            {Title()}
            <h2>{content}</h2>
        </div>
    )
}
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeaderComponent content="This is test" />);

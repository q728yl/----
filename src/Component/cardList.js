
import MyCard from "./MyCard";

const event = {
    name: "Europe Street beat",
    description: "www.instagram.com",
    time: "2022-06-01 10:00:00",
    location: "Europe",
    cover: "https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
};

function App() {
    return (
        <div className="App">
            <MyCard event={event} />
        </div>
    );
}

export default App;


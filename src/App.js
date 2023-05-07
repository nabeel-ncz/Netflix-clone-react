import Header from "./components/Header/Header";
import Banner from "./components/Banner/Banner";
import RowPost from "./components/RowPost/RowPost";
import { Originals,Trending,TopRated, Actions ,Fantasy,Mystery,ScienceFriction,Family} from "./urls/Urls";

function App() {
  
  return (
    <div className="App">
      <Header />
      <Banner /> 
      <RowPost title="Netflix Originals" url={Originals} class="card" showDetails={true}/> 
      <RowPost title="Trending" url={Trending} class="poster-card" poster/>
      <RowPost title="Actions" url={Actions} class="poster-card" poster />
      <RowPost title="TopRated" url={TopRated} class="poster-card" poster/>
      <RowPost title="Family" url={Family} class="poster-card" poster/>
      <RowPost title="Science Friction" url={ScienceFriction} class="poster-card" poster/>
      <RowPost title="Mystery" url={Mystery} class="poster-card" poster/>
      <RowPost title="Fantasy" url={Fantasy} class="poster-card" poster/>
        
    </div>
  );
}

export default App;

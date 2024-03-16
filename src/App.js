import logo from "./logo.svg";
import "./App.css";
import { getDatabase, ref, onValue, child, get } from "firebase/database";
import { database } from "./firebase";
function App() {
  const dbRef = ref(database);
  get(child(dbRef, `Teacher/ZYPmauNOW5OJZsTzZpqPYp4Xu3J2`))
    .then((snapshot) => {
      if (snapshot.exists()) {
        console.log(snapshot.val());
      } else {
        console.log("No data available");
      }
    })
    .catch((error) => {
      console.error(error);
    });
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
    </div>
  );
}

export default App;

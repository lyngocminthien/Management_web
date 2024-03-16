import logo from "./logo.svg";
import "./App.scss";
import { useState, useEffect } from "react";
import { getDatabase, ref, onValue, child, get } from "firebase/database";
import { database } from "./firebase";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";

function App() {
  const [data, setData] = useState({}); // Khởi tạo state data

  useEffect(() => {
    const dbRef = ref(database);
    get(child(dbRef, `Teacher`))
      .then((snapshot) => {
        if (snapshot.exists()) {
          setData(snapshot.val()); // Cập nhật state data với dữ liệu mới
        } else {
          console.log("No data available");
        }
      })
      .catch((error) => {
        console.error(error);
      });
  }, []); // Chỉ chạy một lần sau khi component được render

  return (
    <div className="App">
      {Object.keys(data).map(
        (
          key // Chuyển đổi object thành array và render
        ) => (
          <main key={key} className="container">
            {/* Bạn có thể thay đổi cách hiển thị thông tin `Teacher` dựa trên cấu trúc dữ liệu của bạn */}
            <p>SĐT: {data[key].numbers}</p>
            <p>Email: {data[key].email}</p>
            <FontAwesomeIcon icon={faHouse} className="house-icon" />
          </main>
        )
      )}
    </div>
  );
}

export default App;

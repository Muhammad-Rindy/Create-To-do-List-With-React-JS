const root = document.querySelector("#root");

// function App() {
//   const [login, setLogin] = React.useState(false);
//   if (login) {
//     return (
//       <>
//         <h1>Mantap, sudah login ngab!</h1>
//         <button
//           onClick={function () {
//             setLogin(false);
//           }}
//         >
//           Log Out guys!
//         </button>
//       </>
//     );
//   }
//                                                        //* State & Rendering *//
//   return (
//     <>
//       <h1>LOGIN NGAB</h1>
//       <button
//         onClick={function () {
//           setLogin(true);
//         }}
//       >
//         LOGIN
//       </button>
//     </>
//   );
// }

// function App() {
//   const [login, setLogin] = React.useState(false);
//   return (
//     <>
//       <h1>LOGIN NGAB</h1>
//       <p>{login ? "Sudah Login" : "Belum Login"}</p>
//       <button
//         onClick={function () {
//           setLogin(true);
//                                                         //* Ternary Operator *//
//         }}
//       >
//         LOGIN
//       </button>
//     </>
//   );
// }

// return (
//   <>
//     <h1>LOGIN NGAB</h1>
//     <p>{login && 'Sudah Login'}</p>
//     <button
//       onClick={function () {
//         setLogin(true);
//                                                      //* Ternary Operator dengan && *//
//       }}
//     >
//       LOGIN
//     </button>
//   </>
// );
// }

// function App() {
//   const judulRef = React.useReff(null);
//   React.useEffect(function () {
//     judulRef.current.textContent = "Muhammad";
//                                                            //* Manipulasi DOM *//
//   }, []);
//   console.log(judulRef);
//   return (
//     <>
//       <h1 ref={judulRef}>Rindy</h1>
//     </>
//   );
// }

// function App () {
//   const fruit = ['mobil', 'motor', 'kapal', 'pesawat'];
//   console.log (fruit);
//   return (
//     <ul>
//       {fruit.map(function (fruits) {
//                                                              //* List in React *//
//       return <li key={fruits}>{fruits}</li>
//     })}
//     </ul>
//   );
// }

// function App() {
//   const [nama, setNama] = React.useState("");
//   function ketikaSumbit(event) {
//     event.preventDefault();
//   }
//   console.log("Nama :", name);
//   return (
//     <form onSumbit={ketikaSumbit}>
//       {" "}
//                                                               //* Form in React *//
//       <label>
//         Name:
//         <input type="text" name="name" />
//       </label>
//       <input type="submit" value="Submit" />
//     </form>
//   );
// }

// function App() {
//   React.useEffect(function () {
//     const getData = fetch("https://api.spaceflightnewsapi.net/v3/blogs")
//       .then(function (response) {
//         console.log(response);
//         return response.json();
//       })
//       .then(function (response) {});
//                                                                 //* Data Fetching *//
//     console.log(getData); //* Data Fetching */
//   }, []);
//   return <h1>Muhammad Rindy</h1>;
// }
// function App() {
//   const [news, setNews] = React.useState([]);

//   React.useEffect(function () {
//     async function getData() {
//       const request = await fetch(
//         "https://api.spaceflightnewsapi.net/v3/blogs"
//       );
//       const response = await request.json();
//       setNews(response);
//     }
//     getData();
//   }, []);
//                                                        //* Menampilkan Data from Server to UI *//
//   return (
//     <>
//       <h1>Muhammad Rindy</h1>
//       <ul>
//         {news.map(function (item) {
//           return <li key={item.id}>{item.title}</li>;
//         })}
//       </ul>
//     </>
//   );
// }

function App() {
  const [activity, setActivity] = React.useState(""); //React state//
  const [edit, setEdit] = React.useState({}); //React state//
  const [todos, setTodos] = React.useState([]);
  const [message, setMessage] = React.useState("");

  function generateId() {
    //fungsi untuk membuat id menjadi unik//
    return Date.now();
  }

  function saveTodoHandler(event) {
    //fungsi untuk kosongkan kotak tulisan ketika submit//
    event.preventDefault();

    if (!activity) {
      return setMessage("Nama aktivitas jangan kosong!");
    }
    setMessage("");

    if (edit.id) {
      const updatedTodo = {
        ...edit,
        activity,
      };

      const editTodoIndex = todos.findIndex(function (todo) {
        return (todo.id = edit.id);
      });

      const updatedTodos = [...todos];
      updatedTodos[editTodoIndex] = updatedTodo;

      setTodos(updatedTodos);

      return cancelEditHandler();
    }

    setTodos([
      ...todos,
      {
        id: generateId(),
        activity,
        done: false,
      },
    ]); //parameter untuk activity kedua (Logika untuk melakukan activity pada nilai tersebut)//
    setActivity("");
  }

  function removeTodoHandler(todosNewid) {
    const filteredtodose = todos.filter(function (todosNew) {
      return todosNew.id !== todosNewid;
    });

    setTodos(filteredtodose);
    if (edit.id) cancelEditHandler();
  }

  function editTodoHandler(todo) {
    setActivity(todo.activity);
    setEdit(todo);
  }

  function cancelEditHandler() {
    setEdit({});
    setActivity("");
  }

  function doneTodoHandler(todo) {
    const updatedTodo = {
      ...todo,
      done: todo.done ? false : true,
    };

    const editTodoIndex = todos.findIndex(function (currentTodo) {
      return currentTodo.id === todo.id;
    });

    const updatedTodos = [...todos];
    updatedTodos[editTodoIndex] = updatedTodo;

    setTodos(updatedTodos);
  }

  return (
    //Return//
    <>
      <h1>Simple to do list</h1>
      {message && <div style={{ color: "red" }}>{message}</div>}
      <form onSubmit={saveTodoHandler}>
        <input //empty element//
          type="text"
          placeholder="name aktivities"
          value={activity}
          onChange={function (event) {
            setActivity(event.target.value);
          }}
        />
        <button type="submit">{edit.id ? "simpan perubahan" : "Tambah"}</button>
        {edit.id && <button onClick={cancelEditHandler}>Batal edit</button>}
      </form>

      {todos.length > 0 ? (
        <ul>
          {todos.map(function (todo) {
            return (
              <li key={todo.id}>
                <input
                  type="checkbox"
                  checked={todo.done}
                  onChange={doneTodoHandler.bind(this, todo)}
                ></input>
                {todo.activity}({todo.done ? "Selesai" : "Belum Selesai"});
                <button onClick={editTodoHandler.bind(this, todo)}>Edit</button>
                <button onClick={removeTodoHandler.bind(this, todo.id)}>
                  Hapus
                </button>
              </li>
            );
          })}
        </ul>
      ) : (
        <p>
          <i>Tidak ada todo</i>
        </p>
      )}
    </>
  );
}

ReactDOM.render(<App />, root); //render//

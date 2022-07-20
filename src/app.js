const root = document.querySelector("#root");


  function App () {

    const [diklik, setDiklik] = React.useState(false);
    const [count, setCount] = React.useState(0);


    React.useEffect ( function (){
      console.log ('Muhammad Rindy di render')
    }
    [dicklik, count]
    );



    return ( 
    <>
    <h1 id="judul">Hello Ini judul</h1>
    <button 
    onClick= {function () {
      setDiklik(true);
    }}>
    Klik ME
    </button>

    <button 
    onClick= {function () {
      setCount(count + 1);
    }}>
    PLUS
    </button>

    Nilai saat ini: {count}



    </>
  ); 
  }
ReactDOM.render(<App />, root);

import React, { Component, useState, useEffect} from 'react'
import './App.css';
import cidades from "./cidades"
import CardColor from "./cardColor"
import 'mdb-react-ui-kit/dist/css/mdb.min.css'
import { MDBBtn, MDBRow, MDBCol } from 'mdb-react-ui-kit';
import getData from "./processData";
import plotGraph from './setupGraphs'
import 'react-finderselect/dist/index.css'
import estados from "./estados";


function App() {
  const [cidadeEscolhida, setCidadeEscolhida] = useState("");
  const [selecaoBuffer, setSelecaoBuffer] = useState("");
  const [data, setData] = useState([]);
  // Put a loading option

  const handleChange = (escolha) => {
    setCidadeEscolhida(escolha);
    let localidade = "../brazil/" + escolha + ".json";
    document.title = escolha;
    console.log(localidade)
    fetch(localidade).then(function(response) {
      response.json().then(function(data1) {
        data1 = JSON.stringify(response.data1)
        console.log(data1);
        // setData(data1);
      });
    });
  }

  const searchOptions = (value) =>{
    let filterOption = cidades.filter(cidade => value === cidade);
    setSelecaoBuffer(filterOption);
  }

  useEffect(() => {
    document.title = "CoronaBrasil";
  }, [])


  // const updateGraphs = (cidadeEscolhida);

  return (
    // <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>

    <div className="App">
      <main className="App-header">
        <div className="jumbotron text-center">
          <h1>{cidadeEscolhida ? cidadeEscolhida : "CoronaBrasil"}</h1>
        </div>

        <div className="container">
            <div class="container col-12">
              <h5>Escolha ou digite a cidade</h5>

              <select className="btn" onChange={(e) => handleChange(e.target.value)}>
              <input type='text'
                  onChange={(e) => {searchOptions(e.target.value)}} />
              {
                cidades.map((cidade) => {
                  return <option value={cidade.name}>{cidade.name}</option>;
                })
              }
            </select>
            </div>


          <br></br>
          <h5>Ou você pode <br /> Escolher um estado </h5>
          <div className="container">
            <select className="btn" onChange={(e) => handleChange(e.target.value)}>
              {
                estados.map((estado) => {
                  return <option value={estado.value}>{estado.name}</option>;
                })
              }
            </select>

          </div>
          <br></br>

          <MDBBtn rounded color='danger' onClick={() => handleChange("Brasil")}>Brasil</MDBBtn>
        </div>

        <br></br>
        <MDBRow >
          <MDBCol sm="12" md='6'>
            <CardColor color="danger" className="cardInfo" title="Total de casos" text="0" />

            <CardColor color="danger" className="cardInfo" title="Média móvel de casos" text="0" />

            <CardColor color="danger" className="cardInfo" title="Variação da Média móvel" text="0" />
          </MDBCol>


          <MDBCol md='6'>
            <CardColor color="dark" className="cardInfo" title="Total de mortes" text="0" />

            <CardColor color="dark" className="cardInfo" title="Média móvel de mortes" text="0" />

            <CardColor color="dark" className="cardInfo" title="Variação da Média móvel" text="0" />
          </MDBCol>
        </MDBRow>



        <plotGraph />

      </main>





    </div>





  );
}

export default App;

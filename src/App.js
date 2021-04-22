import React, { Component, useState } from 'react'
import './App.css';
import cidades from "./cidades"
import CardColor from "./cardColor"
import 'mdb-react-ui-kit/dist/css/mdb.min.css'
import { MDBBtn, MDBRow, MDBCol } from 'mdb-react-ui-kit';
import getData from "./processData";


function App() {
  const [cidadeEscolhida, setCidadeEscolhida] = useState("");
  const [data, setData] = useState([]);
  // Put a loading option

  const handleChange = (cidadeEscolhida) =>{
    let newData = getData(cidadeEscolhida.toString())
    setData(newData);
    setCidadeEscolhida(cidadeEscolhida);
  }

  let options = [];
  const defineOptions = () => {
    // eslint-disable-next-line array-callback-return
    cidades.map((cidade) => {
      options.push({ value: cidade.toString(), label: cidade.toString() })
    });
  }
  defineOptions();

  // const updateGraphs = (cidadeEscolhida);

  return (
    <div className="App">
      <main className="App-header">
        <div className="jumbotron text-center">
          <h1>{cidadeEscolhida ? cidadeEscolhida : "CoronaBrasil"}</h1>
        </div>

        <div className="container">
          <div className="container col-12">
            <h5>Escolha ou digite a cidade</h5>
            <br></br>
            <select className="btn" name="city">
              {
                cidades.map((cidade) => {
                  return <option value={cidade} onChange={(e) => { handleChange(e.target.value.toString()) }}>{cidade}</option>
                })
              }
            </select>
          </div>
          <br></br>
          <h5>Ou você pode <br /> Escolher um estado </h5>
          <div className="container">
            <select className="btn" name="state">
              <option value="AC">Acre</option>
              <option value="AL">Alagoas</option>
              <option value="AP">Amapá</option>
              <option value="AM">Amazonas</option>
              <option value="BA">Bahia</option>
              <option value="CE">Ceará</option>
              <option value="DF">Distrito Federal</option>
              <option value="ES">Espírito Santo</option>
              <option value="GO">Goiás</option>
              <option value="MA">Maranhão</option>
              <option value="MT">Mato Grosso</option>
              <option value="MS">Mato Grosso do Sul</option>
              <option value="MG">Minas Gerais</option>
              <option value="PA">Pará</option>
              <option value="PB">Paraíba</option>
              <option value="PR">Paraná</option>
              <option value="PE">Pernambuco</option>
              <option value="PI">Piauí</option>
              <option value="RJ">Rio de Janeiro</option>
              <option value="RN">Rio Grande do Norte</option>
              <option value="RS">Rio Grande do Sul</option>
              <option value="RO">Rondônia</option>
              <option value="RR">Roraima</option>
              <option value="SC">Santa Catarina</option>
              <option value="SP">São Paulo</option>
              <option value="SE">Sergipe</option>
              <option value="TO">Tocantins</option>
            </select>

          </div>
          <br></br>

          <MDBBtn rounded color='danger' >Brasil</MDBBtn>
        </div>

              <br></br>
        <MDBRow >
          <MDBCol sm="12" md='6'>
            <CardColor color="danger" className="cardInfo" title="Total de casos"  text="0" />

            <CardColor color="danger"  className="cardInfo" title="Média móvel de casos"  text="0" />

            <CardColor color="danger"  className="cardInfo" title="Variação da Média móvel"  text="0" />
          </MDBCol>


          <MDBCol md='6'>
            <CardColor color="dark"  className="cardInfo" title="Total de mortes" text="0" />

            <CardColor color="dark" className="cardInfo" title="Média móvel de mortes" text="0" />

            <CardColor color="dark"  className="cardInfo" title="Variação da Média móvel" text="0" />
          </MDBCol>
        </MDBRow>



      </main>
    </div>
  );
}

export default App;

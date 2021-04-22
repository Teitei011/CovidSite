import React, { Component, useState } from 'react'
import './App.css';
import cidades from "./cidades"
import {} from "./setupGraphs"
import Button from 'react-bootstrap/Button';


function App() {
  const [cidadeEscolhida, setCidadeEscolhida] = useState("");

  // Put a loading option

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
          <h5>Digite a cidade</h5>
          <div class="container col-12">
            <h5>Escolha ou digite a cidade</h5>
            <select class="btn" name="city">
              {
                cidades.map((cidade) => {
                  return <option value={cidade} onChange={() => { }}>{cidade}</option>
                })
              }
            </select>
          </div>
          <h5> Ou você pode </h5>

          <h5>Escolher um estado </h5>
          <div className="container">
            <select class="btn" name="state">
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
          <Button className="btn">Brasil</Button>
        </div>

        <div class="row secao-numeros">
            <div class="col-md-6 coluna-casos">
              <div class="card text-white bg-danger mb-3">
                <div class="card-body">
                  <h5 class="card-title"> Total de casos: </h5>
                  <p id="casos" class="card-text text-white">0</p>
                </div>
              </div>


              <div class="card text-white" id="casos_da_ultima_semana" >
                <div class="card-body">
                  <h5 class="card-title"> Média móvel de casos: </h5>
                  <p id="novos_casos" class="card-text text-white">0</p>
                </div>
              </div>
       
              <div  class="card text-white"  id="variacao_casos_estilo"  >
                <div class="card-body">
                  <h5 class="card-title">Variação da média móvel de casos: </h5>
                  <p id="variacao_casos" class="card-text text-white">0</p>
                </div>
              </div>
            </div>

            <div class="col-md-6">
              <div  class="card text-white bg-dark"  >
                <div class="card-body">
                  <h5 class="card-title">Total de mortos:</h5>
                  <p id="mortes" class="card-text text-white">0</p>
                </div>
              </div>

              <div  class="card text-white" id="mortes-da-ultima-semana" >
                <div class="card-body">
                  <h5 class="card-title"> Média móvel de mortes: </h5>
                  <p id="novas_mortes" class="card-text text-white">0</p>
                </div>
              </div>

              <div  class="card text-white" id="variacao_mortes_estilo" >
                <div class="card-body">
                  <h5 class="card-title">Variação da média móvel de mortes: </h5>
                  <p id="variacao_mortes" class="card-text text-white">0</p>
                </div>
              </div>

            </div>
          </div>

        <div>
        <div class="row"> 
            <div class="col-md-6">
              <div class="card mb-4 shadow-sm">
                <canvas
                  id="TotalDeCasos"
                  width="100%"
                  height="100%"
                 ></canvas>
              </div>
            </div>
            <div class="col-md-6">
              <div class="card mb-4 shadow-sm">
                <canvas
                  id="TotalDeMortes"
                  width="100%"
                  height="100%"
                  ></canvas
                >
              </div>
            </div>

          </div>
            <div class="row"> 

            <div class="col-md-6">
              <div class="card mb-4 shadow-sm">
                <canvas
                  id="CasosDiarios"
                  width="100%"
                  height="100%"
                 ></canvas
                >

              </div>
            </div>

            <div class="col-md-6">
              <div class="card mb-4 shadow-sm">
                <canvas
                  id="MortesDiarias"
                  width="100%"
                  height="100%"
                 ></canvas
                >
              </div>
            </div>

          </div>
          <div class="row"> 

            <div class="col-md-6">
              <div class="card mb-4 shadow-sm">
                <canvas
                  id="MovelCasos"
                  width="100%"
                  height="100%"
                ></canvas
                >
              </div>
            </div>

            <div class="col-md-6">
              <div class="card mb-4 shadow-sm">
                <canvas
                  id="MovelMortes"
                  width="100%"
                  height="100%"
                 ></canvas
                >
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import web3 from 'web3';
import abi from './artifacts/Ballot.json'
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';

var contract = require("@truffle/contract");
//const fs = require('fs');
const path = require('path');
//const solc = require('solc');

function SelectCandidate() {
  return (
    <div className="container">
      <div className="row">
          <div className="col-12 mx-auto">
              <form>
                  <p id="Notice" className="text-danger"></p>
                  <div className="form-group">
                      <label for="voice">Выберите кандидата</label>
                      <select className="form-control" id="voice" name="voice">
                        <option>Очень честный президент</option>
                        <option>Не очень честный президент</option>
                      </select>
                  </div>
                  <button type="submit" className="btn btn-primary enableEthereumButton">Отдать голос</button>
                </form>
          </div>
      </div>
    </div>
    );
  }
  function ImportCandidate() {
  return (
    <div className="container">
      <div className="row">
          <div className="col-12 mx-auto">
              <form>
                  <p id="Notice_candidate" className="text-danger"></p>
                  <div className="form-group">
                    <label for="name_candidate">ФИО</label>
                    <input type="text" className="form-control" id="name_candidate" placeholder="Введите ФИО" />
                    <small id="name_candidate" className="form-text text-muted">Фамилия, имя, отчество кандидата</small>
                  </div>
                  <div className="form-group">
                      <label for="city_candidate">Город</label>
                      <input type="text" className="form-control" id="city_candidate" placeholder="Введите место проживания кандидата" />
                      <small id="city_candidate" className="form-text text-muted">Место проживания кандидата</small>
                  </div>
                  <div className="form-group">
                      <label for="date_candidate">Дата рождения</label>
                      <input type="date" className="form-control" id="date_candidate" placeholder="Введите дату рождения кандидата"/>
                      <small id="date_candidate" className="form-text text-muted">Дата рождения кандидата</small>
                  </div>                                         
                  <button type="submit" class="btn btn-primary">Зарегистрировать</button>
                </form>
          </div>
      </div>
    </div> 
    );
  }
  function NoMetaMask() {
    return (
      <div className="container">
        <div className="row">
            <div className="col-12 mx-auto">
              <p>Please, Install <a href="https://chrome.google.com/webstore/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn">Metamask</a></p>
            </div>
        </div>
      </div> 
      );
    } 
if (typeof window.ethereum === 'undefined') {
  ReactDOM.render(
    <NoMetaMask />,
    document.getElementById('root')
  );  

  alert('MetaMask is not installed!');
} else { 
ReactDOM.render(
  <SelectCandidate />,
  document.getElementById('root')
);
ReactDOM.render(
  <ImportCandidate />,
  document.getElementById('root2')
);
window.web3 = new web3(window.web3.currentProvider);

const ethereumButton = document.querySelector('.enableEthereumButton');

ethereumButton.addEventListener('click', async () => {
  //Will Start the metamask extension 
  alert("123");
  const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
  const account = accounts[0];
  alert("s123");
// Compile the source code
// const input = require(path.resolve(__dirname, 'client/src/artifacts', 'Ballot.json'));
alert(1);

try {
  const newcontracter = new window.web3.eth.Contract(abi.abi, "0xbF25484776f7Df855A5a15DA7513D11072373Fd7");

// newcontracter.setProvider(new web3.providers.HttpProvider('http://127.0.0.1:9545/'));
alert(3);
alert(6);
//
console.log(newcontracter.methods)
alert(6);
console.log(newcontracter.methods)

// newcontracter.methods.vote(1).send({from : accounts[0]}).then(console.log).catch(console.log);
// alert(res)
let res = await newcontracter.methods.winningProposal().call();
alert(res);

// alert(res);

} catch(e) {
  console.log(e)
}
alert(2);
alert(2);

});
}

reportWebVitals();
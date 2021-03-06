import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import web3 from 'web3';
import abi from './artifacts/Ballot.json'
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';

const { ethers } = require('ethers');
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
                  <button type="submit" class="btn btn-primary" disabled="disabled">Зарегистрировать</button>
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

ethereumButton.addEventListener('click', async (e) => {
  e.preventDefault();
  //Will Start the metamask extension 
  // const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
  //const account = accounts[0];
  const account = window.ethereum.selectedAddress;
// Compile the source code
// const input = require(path.resolve(__dirname, 'client/src/artifacts', 'Ballot.json'));

try {
  const newcontracter = new window.web3.eth.Contract(abi.abi, "0xbF25484776f7Df855A5a15DA7513D11072373Fd7");

// newcontracter.setProvider(new web3.providers.HttpProvider('http://127.0.0.1:9545/'));
//
let failed = false;
try {
  const x1 = new ethers.utils.BigNumber(1);
  let result = await newcontracter.methods.vote("1").send({from : account});
  //alert('success');
} catch (e) {
  failed = true;
  //alert(`Error: ${e.message}`);
}
/* await newcontracter.methods.vote(1).send({from : account}).then((...args) => console.log('success', ...args)).catch((...args) => {
  failed = true;
  console.log('error', ...args);
});
alert(`x1: ${failed}`); */
if (failed) {
  //throw new Error();
}
// alert(res)
let res = await newcontracter.methods.winningProposal().call();

// alert(res);

} catch(e) {
  //console.log(e)
}

});
}

reportWebVitals();
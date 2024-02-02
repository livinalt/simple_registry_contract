import logo from './logo.svg';
import './App.css';
import {ethers} from 'ethers';
import contractABI from './abi.json';


function App() {

  const contractAddress = '0x601adBe6154A030351F02366639D21E05861B96b';

    async function requestAccount(){
      await window.ethereum.request({method:'eth_requestAccounts'});
    }

    async function updateName() {
      if (typeof window.ethereum !== 'undefined') {    
        await requestAccount(); 
          
        const provider = new ethers.BrowserProvider(window.ethereum);    
        const signer = await provider.getSigner();    
        const contract = new ethers.Contract(contractAddress, contractABI, signer);    
        const name = prompt("Enter name");
    
        try {    
          const transaction = await contract.updateName(name);    
          await transaction.wait();    
          console.log(`${name}:'Name updated'`);
    
        } catch (err) {    
          console.error('Error:', err);    
        }
    
      }
    
    }

    async function updateAge() {
      if (typeof window.ethereum !== 'undefined') {    
        await requestAccount(); 
          
        const provider = new ethers.BrowserProvider(window.ethereum);    
        const signer = await provider.getSigner();    
        const contract = new ethers.Contract(contractAddress, contractABI, signer); 
        const age = prompt("Enter age");   
    
        try {    
          const transaction = await contract.updateAge(age);    
          //await transaction.wait();    
          console.log(`${age}: Age successfully updated`);
    
        } catch (err) {    
          console.error('Error:', err);    
        }
    
      }
    
    }


    async function getEntityDetails() {
      if (typeof window.ethereum !== 'undefined') {    
        await requestAccount(); 
          
        const provider = new ethers.BrowserProvider(window.ethereum);    
        const signer = await provider.getSigner();    
        const contract = new ethers.Contract(contractAddress, contractABI, signer);    
    
        try {    
          const transaction = await contract.getEntityDetails();    
          //await transaction.wait();    
          // console.log('Details are updated');

          console.log('Name:', details[0]);
      console.log('Age:', details[1]);
    
        } catch (err) {    
          console.error('Error:', err);    
        }
    
      }
    
    }




  return (
    <div className="App">

      <button onClick = {updateName} >Update</button>
      <button onClick = {updateAge} >Get Message</button>
      <button onClick = {getEntityDetails} >Get Message</button>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;

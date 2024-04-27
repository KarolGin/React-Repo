import React from 'react';
import logo from './logo.svg';
import './App.css';
import Banner from './Components/Banner/Banner';
import Button from './Components/Button/Button';
import Link from './Components/Link/Link';
import Input from './Components/Input/Input';
import Form from './Components/Form/Form';
import EffectButton from './Components/EffectButton/EffectButton';
import SuperInput from './Components/SuperInput/SuperInput';

function App() {
  return (
 <div>
  <Banner text="Hello World" />
  <Button children='CLICK ME' />
  <Link children='Kliknij w link' href='https://www.google.pl/?hl=pl' />
  <Input />
  <Form />
  <EffectButton />
  <SuperInput/>
 </div>
  )
}

export default App;

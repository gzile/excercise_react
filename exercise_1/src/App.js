import './App.css'
// import Footer from './components/Footer';
// import Main from './components/Main';
// import Header from './components/Header';
import ChangeStateComponent from './components/changeState'
import {EventExample} from './components/eventsExample'
import { MappingArrays } from './components/mappingArrays'


export default function App() {

  const headerData = { 
    title: 'Welcome to React',
    subtitle: 'Getting started with React',
    mentor: 'Goce ',
    headerTitle: 'Header'
  }

  const mainData = {
    mainTitle: 'Prerequisite to get started  to react.js ',
    list: ['HTML', 'CSS', 'JavaScript']
  };

  const year = Date();

  return (
    // Styled div container with className / in JavaScript equivalent is word class in the html tag
    <div className='container'>
      {/* Send the header data with spread operator */}
      {/* <Header {...headerData}/> */}
      {/* <ChangeStateComponent /> */}
      <MappingArrays/>
      {/* Send the main data as properties (attributes) */}
      {/* <Main mainTitle={mainData.mainTitle} list={mainData.list}/>
      <Footer year={year}/> */}
    </div>
  );
}
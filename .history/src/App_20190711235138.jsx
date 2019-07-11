import React from 'react';
import Griddle, { plugins, RowDefinition, ColumnDefinition} from 'griddle-react';

var employeeData =  [
  {
    "id": 0,
    "name": "Sumedha verma",
    "city": "Panipat",
    "state": "Haryana",
    "country": "India",
    "company": "C1",
    "salary": "800$",
  },
  {
    "id": 1,
    "name": "Sumeet Gupta",
    "city": "Haridwar",
    "state": "UP",
    "country": "India",
    "company": "C2",
    "salary": "600$",
  },
  {
    "id": 2,
    "name": "Priya",
    "city": "Mohali",
    "state": "Punjab",
    "country": "India",
    "company": "C3",
    "salary": "700$",

  },
  {
    "id": 3,
    "name": "Tarun Chopra",
    "city": "Kota",
    "state": "Rajasthan",
    "country": "India",
    "company": "C4",
    "salary": "800$",

  },
  {
    "id": 4,
    "name": "Poonam",
    "city": "Samalkha",
    "state": "Haryana",
    "country": "India",
    "company": "C5",
    "salary": "900$",

  }
];
  
class App extends React.Component {

    render(){
        
        return (
            <div>
           <Griddle
    data={employeeData}
    plugins={[plugins.LocalPlugin]}>
    <RowDefinition>
      <ColumnDefinition id="name" title="Name" />
      <ColumnDefinition id="salary" title="Salary" order={2}/>
      <ColumnDefinition id="company" title="Organization" />
    </RowDefinition>
  </Griddle>
          </div>
        
        );
    }
}


export default App;
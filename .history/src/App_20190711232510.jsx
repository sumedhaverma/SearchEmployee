import React from 'react';
import Griddle, { plugins, RowDefinition, ColumnDefinition} from 'griddle-react';

var employeeData =  [
  {
    "id": 0,
    "name": "Mayer Leonard",
    "city": "Kapowsin",
    "state": "Hawaii",
    "country": "United Kingdom",
    "company": "Ovolo",
    "favoriteNumber": 7
  },
  {
    "id": 1,
    "name": "Koch Becker",
    "city": "Johnsonburg",
    "state": "New Jersey",
    "country": "Madagascar",
    "company": "Eventage",
    "favoriteNumber": 2
  },
  {
    "id": 2,
    "name": "Lowery Hopkins",
    "city": "Blanco",
    "state": "Arizona",
    "country": "Ukraine",
    "company": "Comtext",
    "favoriteNumber": 3
  },
  {
    "id": 3,
    "name": "Walters Mays",
    "city": "Glendale",
    "state": "Illinois",
    "country": "New Zealand",
    "company": "Corporana",
    "favoriteNumber": 6
  },
  {
    "id": 4,
    "name": "Shaw Lowe",
    "city": "Coultervillle",
    "state": "Wyoming",
    "country": "Ecuador",
    "company": "Isologica",
    "favoriteNumber": 2
  }
];
  
class App extends React.Component {

    constructor(props){
        super(props);
    }

    render(){
        
        return (
            <div>
           <Griddle
    data={data}
    plugins={[plugins.LocalPlugin]}
  >
    <RowDefinition>
      <ColumnDefinition id="name" title="Name" />
      <ColumnDefinition id="state" title="Location" order={1} width={400} />
      <ColumnDefinition id="company" title="Organization" />
    </RowDefinition>
  </Griddle>
          </div>
        
        );
    }
}


export default App;
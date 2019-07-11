import React from 'react';
import Griddle, { plugins, RowDefinition, ColumnDefinition} from 'griddle-react';



var data = [
    {
      "id": "0",
      "name": "Mayer Leonard",
      "city": "Kapowsin",
      "state": "Hawaii",
      "country": "United Kingdom",
      "company": "Ovolo",
      "favoriteNumber": 7
    },
    {
        "id": "1",
        "name": "Mayer ",
        "city": "Kapowsin",
        "state": "Hawaii",
        "country": "United Kingdom",
        "company": "Ovolo",
        "favoriteNumber": 7
      },
      
  ];
  
class App extends React.Component {

    constructor(props){
        super(props);
    }

    render(){
        
        return (
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
        
        );
    }
}


export default App;
import React from 'react';
import styled from '@emotion/styled';

import Griddle, { plugins } from 'griddle-react';


const CarouselWrapper = styled(Loader)` 
  min-height: 110px;
`;

const Card = styled('div')`
border:0.4px solid #878787;
padding:20px;
margin:10px;
`;

const SubCard = styled('div')`
display:flex;
justify-content:space-between;
margin-bottom:20px;
`;

const Carousel = styled('div')`
display:flex;
overflow:auto;
`;


var data = [
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
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
        this.state={data:{city:'',list:[]},selectedDate:[],
            options:Const.cities
        }

        //binding of methods
        this.setDate=this.setDate.bind(this);
        this.selectCity=this.selectCity.bind(this);
        this.isSelected=this.isSelected.bind(this);

    }

    componentDidMount(){
        // by default for first option
        this.getWeather(this.state.options[0]);
    }


    setDate(selectedDate){
        console.log(selectedDate);
        let defaultWeather;
        const { list } =this.state.data;

        if(list && list.length > 0)  {
            list.some(date=>{
            if(date === selectedDate){
                defaultWeather=date;
            }
            });
            this.setState({selectedDate: defaultWeather});
        }
    }

    selectCity(e){
        this.setState({data:{list:[],city:''},selectedDate:[]})
        this.getWeather(this.state.options[e.target.value]);
    }

    // async call to fetch weather data
    async getWeather(option) {
        const api_call = await fetch(`https://api.openweathermap.org/data/2.5/forecast/daily?q=${option.name},${option.country}&appid=${Const.APP_ID}&cnt=7`);
        const response = await api_call.json();
        
        let { city, list = [] } = response;
        list = list.map(day => {
            return {
                date: day.dt,
                humidity: day.humidity,
                speed: day.speed,
                temp: day.temp,
                main: {
                    icon: day.weather[0].icon,
                    description: day.weather[0].description
                }
            };
        });

        this.setState({data:{ city, list }});

      }

      isSelected(day){
            if(day.date===this.state.selectedDate.date){
                $(`#${day.date}`).css('background-color','rgb(239,230,230)');
            }
            else{
                $(`#${day.date}`).css('background-color','rgb(245, 245, 245)');
            }
      }
    
    render(){
        const {options,data:{list,city}}=this.state;
        let selectedDate= this.state.selectedDate;
        if (selectedDate.length === 0 && list.length > 0) {
                selectedDate=list[0];
        }
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
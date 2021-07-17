import React, { Component } from 'react'
import Home from './Home';
import NavBar from './NavBar';
import './MainFrame.css'
import axios from 'axios'
import Body from './Body';

class MainFrame extends Component {
    state={
        productData: [],
        selectedItem:0,
        displayingData: [],
        start: 0,
        end: 5,
        showingSlide : 1,
    }

    fetchData(){
        axios.get('https://fakestoreapi.com/products')
        .then((response) => {
            // handle success
            this.setState(
                {productData: response.data}
                , ()=> this.handleDisplay()
            );
        })
        .catch(function (error) {
            // handle error
            console.log(error);
        })

    }

    changeProduct=(st,end)=>{
        let {displayingData} = this.state;
        displayingData  = this.state.productData.slice(st,end);
        this.setState({displayingData});

    }

    handleDisplay=(move)=>{
        
        let {start, end, productData, showingSlide} = this.state;
        
        if(move === 'right'){
            showingSlide ++;
            if(start < (productData.length)-5 ){
                start = end;
                end = 5+end;   
            }
            else{
                start = 0;
                end = 5;
            }
            if(showingSlide > 4){
                showingSlide = 1;
            }
        }else if(move === 'left'){
            showingSlide --;
            if(end >5 ){
                end = start;
                start = start-5;   
            }
            else{
                start = productData.length-5;
                end = productData.length;
            }
            if(showingSlide <= 0){
                showingSlide = 4;
            }
        }
        
        this.changeProduct(start, end);
        this.setState({start,end, showingSlide});  
    }

    handleItemAdd=(toadd)=>{
        let{selectedItem,} = this.state
        if(toadd === "yes"){
            selectedItem = parseInt(selectedItem)+1;
            this.setState({selectedItem});
        }
        else if(toadd === "no" ){
            if(selectedItem === 1){
                selectedItem = 0;
            }
            else if(selectedItem > 1){
                selectedItem = selectedItem-1;
            }
            
        }
        this.setState({selectedItem});
    }

    componentDidMount(){
        this.fetchData();
    }
    render() {
        return (
            <div>
                <NavBar selectedItem={this.state.selectedItem}/>
                <Home/>
                <Body
                    showingSlide = {this.state.showingSlide}
                    totalSlide = {this.state.productData.length/5}
                    showingDate={this.state.displayingData}
                    handler={this.handleDisplay}
                    addItem={this.handleItemAdd}
                />
            </div>
        )
    }
}

export default MainFrame
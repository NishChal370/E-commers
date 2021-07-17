import React, { Component } from 'react'

class Body extends Component {

    render() {
        const Cards = this.props.showingDate.map((data, index)=>{
            return (
                <div  key={'card'+index} className="card">
                    <img className="card-img-top" src={data.image} alt="Card image cap"/>
                    <div className="card-body">
                            <p className="overlayer">{data.title}</p>
                            <div className="card-text">
                                <p >{data.category}</p>
                            </div>
                            <div className='card-img'>
                                <img src="https://img.icons8.com/color/50/000000/shopping-cart--v2.png" onClick={()=>this.props.addItem("yes")}/> 
                                <img src="https://img.icons8.com/pastel-glyph/64/000000/minus--v2.png" onClick={()=>this.props.addItem("no")}/>
                            </div>
                            
                    </div>
                </div>
            );
        });
        return (
            <div id='body' className='body-div'>
                <h1 className="body-div-title">Available products</h1>
                <div className='body-info'>
                    <p> {this.props.showingSlide} of {this.props.totalSlide}</p>
                    <p onClick={()=> this.props.handler('left')} className="previous round">&#8249;</p>
                    <p onClick={()=> this.props.handler('right')} className="next round">&#8250;</p>
                </div>                
                <div className="product-Div">
                    {Cards}
                </div>                
            </div>
        )
    }
}

export default Body
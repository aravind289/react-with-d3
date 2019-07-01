import React from 'react'
    import * as d3 from "d3"

export default class Bar extends React.Component{

    componentDidMount(){
        this.handleChart();
    }

    handleChart(){
        const data =[12,3,5,6,7,8]  
        const svg=d3.select("body").append("svg").attr("width",700).attr("height",300).style("margin-left",100);
        svg.selectAll("rect")
        .data(data)
        .enter()
        .append("rect")
        .attr("x",(d,i)=>i*80)
        .attr("y",(d,i) =>300-10*d)
        .attr("width",35)
        .attr("height",(d,i)=>d*10)
        .attr("fill","green")

        svg.selectAll("text")
        .data(data)
        .enter()
        .append("text")
        .text((d)=>d)
        .attr("x",(d,i)=>i*80)
        .attr("y",(d,i)=>300-10*d-10)
       

        
        
    }

    render (){
        return(
            <div id="ask">
                {this.props.ask}
            </div>
        )

    }
}
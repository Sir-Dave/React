import React from "react";
import { Card, CardImg, CardBody, CardText, CardTitle } from "reactstrap";
   
function RenderDish({dish}){
    if (dish != null){
        return(
        <div className="col-12 col-md-5 m-1">
            <Card>
                <CardImg width="100%" src={dish.image} alt={dish.name}/>
                <CardBody>
                    <CardTitle>{dish.name}</CardTitle>
                    <CardText>{dish.description}</CardText>
                </CardBody>
            </Card>
        </div>
        )   
    }

    else{
        return(
            <div></div>
        );
    }
}
    
function componentDidMount(){
        console.log("DishDetail Component componentDidMount method invoked")
    }
    
function componentDidUpdate(){
        console.log("DishDetail Component componentDidUpdate method invoked")
    }
    
function RenderComments({comments}){
        if (comments!= null){
            const comments_list = comments.map(comment => {
            return(        
                <li key={comment.id}>
                    <p>{comment.comment}</p>
                    <p>-- {comment.author}, 
                 {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comment.date)))}</p>
                </li>
            )
             })
            
            return(
                <div className="col-12 col-md-5 m-1">
                  <h4> Comments </h4>
                    <ul className="list-unstyled">
                        {comments_list}
                    </ul>
                </div>
            )
        }
        
        else{
            return(
                <div></div>
            );
        }

    }
    
const DishDetail = (props)=>{
        const dish = props.dish;
        /**The page returns null if this is not included*/
        if (dish == null) {    
            return (
                <div></div>
            )
        } 
    
        console.log("DishDetail Component render method invoked")
              
        
        return(
               <div className="container">
                     <div className="row">
                        <RenderDish dish= {dish}/>
                        <RenderComments comments={dish.comments}/>
                    </div>
                </div>
        )
    }
 export default DishDetail;
import React, { Component } from 'react';
import Style from './Homepage.module.css';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import axios from 'axios'
import Checkbox from '@material-ui/core/Checkbox';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import {Link} from 'react-router-dom';
export default class Section extends Component {
    constructor(props){
        super(props)
            this.state={
                ApiData:[],
                search:'',
            }
        
    }
    componentDidMount=()=>{
        axios.get("http://starlord.hackerearth.com/recipe")
            .then(responce =>
                this.setState({ApiData:responce.data}))
            .catch(err =>
                alert("Error"))
    }
    handleChange=(e)=>{
        this.setState({
            [e.target.name]:e.target.value
        })
        
    }
    render() {
        
        return (
            <div>
                <div className={Style.partisiton}>
                    <div className={Style.section_two}>
                        <div className={Style.section_two_body}>
                            <AppBar position="static">
                                <Toolbar variant="dense" className={Style.nav_icon_home}>
                                    <Link to="/Homepage" style={{textDecoration:"none", color:"white"}}>
                                        <Typography variant="h5">FoodApp</Typography>
                                    </Link>
                                    <div className={Style.arrng}>
                                        <input placeholder="Search Food By Name" type="text" name="search" className={Style.search_input} onChange={this.handleChange}></input>
                                    </div>
                                    
                                </Toolbar>
                            </AppBar>
                            <div>
                                <div className={Style.resturent}>
                                    <h2>Select your Food</h2>
                                    <div className={Style.select_resturent}>
                                        {
                                            this.state.ApiData.map((e)=>{
                                                if(this.state.search==''){
                                                return(
                                                    <Link to="/payment" style={{textDecoration:"none"}}>
                                                        <Card className={Style.card_size}>
                                                            <CardActionArea>
                                                                <CardMedia
                                                                    className={Style.img_media}
                                                                    image={e.image}
                                                                    />
                                                                <CardContent>
                                                                    <Typography gutterBottom variant="h5" component="h2">{e.name}</Typography>
                                                                    <Typography variant="body1" color="textSecondary" component="p">{e.description}</Typography>
                                                                    <Typography variant="body1" color="textSecondary" component="p">{`Price: ${e.price}`}</Typography>
                                                                </CardContent>
                                                            </CardActionArea>    
                                                        </Card>
                                                    </Link>
                                                )
                                                }
                                                else{
                                                    if(e.name==this.state.search){
                                                        return(
                                                            <Link to="/payment" style={{textDecoration:"none"}}>
                                                                <Card className={Style.card_size}>
                                                                    <CardActionArea>
                                                                        <CardMedia
                                                                            className={Style.img_media}
                                                                            image={e.image}
                                                                            />
                                                                        <CardContent>
                                                                            <Typography gutterBottom variant="h5" component="h2">{`${e.name}`}</Typography>
                                                                            <Typography variant="body2" color="textSecondary" component="p">{e.discription}</Typography>
                                                                            <Typography variant="body1" color="textSecondary" component="p">{`Style: ${e.price}`}</Typography>
                                                                        </CardContent>
                                                                    </CardActionArea>
                                                                </Card>
                                                            </Link>
                                                        )
                                                    }
                                                }
                                            })
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

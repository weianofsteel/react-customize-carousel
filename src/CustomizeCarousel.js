import React from 'react';
import Grid from '@material-ui/core/Grid';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import Button from '@material-ui/core/Button';
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';
import RadioButtonUncheckedIcon from '@material-ui/icons/RadioButtonUnchecked';
import IconButton from '@material-ui/core/IconButton';

class CustomizeCarousel extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        }

        this.handleTimer = this.handleTimer.bind(this);
        this.timer = this.timer.bind(this);
        this.handleNext = this.handleNext.bind(this);
        this.handleBack = this.handleBack.bind(this);
    }

    componentDidMount() {
        this.handleTimer();
    }

    componentWillUnmount() {
        clearInterval(this.handleTimer);
    }

    handleTimer() {
        setInterval(()=>{this.timer();},1000);
    }

    timer() {
        this.setState({count: this.state.count + 1});
    }

    handleNext() {
        if(!this.props.rotateBy) {
            this.setState({count: this.state.count + 3})
        }else {
            this.setState({count: this.state.count + this.props.rotateBy})
        }
    }

    handleBack() {
        if(!this.props.rotateBy) {
            if(this.state.count > 3) {
                this.setState({count: this.state.count - 3});
            }else {
                this.setState({count: 0});
            }
        }else {
            if(this.state.count > 3) {
                this.setState({count: this.state.count - this.props.rotateBy})
            }else {
                this.setState({count: 0});
            }
            
        }
    }

    render() {
        
        const {
            imgsrc,
            rotateBy,
            width,
            height,
            controlButton,
            navigateButton
        } = this.props;

        const list = [];

        if(!imgsrc) {
            return list
        }else {
            if(!rotateBy) {
                for(let i = 0; i <= imgsrc.length - 1; i++) {
                    list.push(
                        <React.Fragment>
                            {parseInt( this.state.count / 3) % imgsrc.length === i ?
                                <div style={{width:width?width:'600px', height:height?height:'500px'}}>
                                    <img src={imgsrc[i]} style={{margin: '0 auto', width:'100%', height:'100%'}}/>
                                </div>
                            :''}        
                        </React.Fragment>
                    )
                }
            }else {
                for(let i = 0; i <= imgsrc.length - 1; i++) {
                    list.push(
                        <React.Fragment>
                            {parseInt( this.state.count / rotateBy) % imgsrc.length === i ?
                                <div style={{width:width?width:'600px', height:height?height:'500px'}}>
                                    <img src={imgsrc[i]} style={{margin: '0 auto', width:'100%', height:'100%'}}/>
                                </div>
                            :''}        
                        </React.Fragment>
                    )
                }
            }
        }
    
        const RadioNavigation = [];

        if(!imgsrc) {
            return RadioNavigation
        }else {
            if(!rotateBy) {
                for(let i = 0; i <= imgsrc.length - 1; i++) {
                    RadioNavigation.push(
                        <React.Fragment>
                            {parseInt( this.state.count / 3) % imgsrc.length === i ?
                                <IconButton onClick={()=>{this.setState({count: 3 * i})}}>
                                    <PlayCircleFilledIcon/>
                                </IconButton>
                            :
                                <IconButton onClick={()=>{this.setState({count: 3 * i})}}>
                                    <RadioButtonUncheckedIcon/>
                                </IconButton>
                            }
                        </React.Fragment>
                    )
                }
            }else {
                for(let i = 0; i <= imgsrc.length - 1; i++) {
                    RadioNavigation.push(
                        <React.Fragment>
                            {parseInt( this.state.count / rotateBy) % imgsrc.length === i ?
                                <IconButton onClick={()=>{this.setState({count: rotateBy * i})}}>
                                    <PlayCircleFilledIcon/>
                                </IconButton>
                            :
                                <IconButton onClick={()=>{this.setState({count: rotateBy * i})}}>
                                    <RadioButtonUncheckedIcon/>
                                </IconButton>
                            }
                        </React.Fragment>
                    )
                }
            }
        }

        return(
            <React.Fragment>

                <div>{this.state.count}</div>

                <Grid container justify="center" alignItems="center">
                
                    {controlButton === true ?
                        <Button style={{margin:'auto 0'}} onClick={this.handleBack}>
                            <ArrowBackIosIcon/>
                        </Button>
                    :''}

                    {list}

                    {controlButton === true ?
                        <Button style={{margin:'auto 0'}} onClick={this.handleNext}>
                            <ArrowForwardIosIcon/>
                        </Button>
                    :''}
                
                </Grid>

                {navigateButton === true ?
                    <Grid container justify="center" alignItems="center">
                    
                        {RadioNavigation}
                    
                    </Grid>
                :''}

            </React.Fragment>
        )
    }
}

export default CustomizeCarousel;
import React, { useEffect, useState } from 'react';
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

        this.timer = this.timer.bind(this);
    }

    componentDidMount() {

    }

    componentWillUnmount() {

    }

    timer() {
        this.setState({count: count + 1});
    }

    render() {
        return(
            <React.FragmentF>

                <div></div>

            </React.FragmentF>
        )
    }
}
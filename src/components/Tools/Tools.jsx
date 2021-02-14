import React, { useContext } from "react";
import { Grid, Paper } from "@material-ui/core"
import './Tools.css'
import docker from '../../assets/images/icons/docker.png'
import bootstrap from '../../assets/images/icons/bootstrap.png'
import jquery from '../../assets/images/icons/jquery.png'
import jscsshtml from '../../assets/images/icons/jscsshtml.png'
import linux from '../../assets/images/icons/linux.png'
import marterialUi from '../../assets/images/icons/Materialui.png'
import mobx from '../../assets/images/icons/mobx.png'
import mongodb from '../../assets/images/icons/mongodb.png'
import myql from '../../assets/images/icons/sql.png'
import node from '../../assets/images/icons/node.png'
import npm from '../../assets/images/icons/npm.png'
import photoshop from '../../assets/images/icons/photoshop.png'
import puppeteer from '../../assets/images/icons/puppeteer.png'
import reactImg from '../../assets/images/icons/react.png'
import redux from '../../assets/images/icons/redux.png'
import socket from '../../assets/images/icons/socket.png'
import ts from '../../assets/images/icons/ts.png'
import wordpress from '../../assets/images/icons/wordpress.png'
import Tool from "./Tool/Tool";
import { ToolContext } from "../../App";


const Tools = () => {
    const toolRef = useContext(ToolContext)

    const icons = [
        jscsshtml,
        reactImg,
        node,
        npm,
        mongodb,
        myql,
        ts,
        jquery,
        socket,
        redux,
        mobx,
        puppeteer,
        docker,
        wordpress,
        linux,
        marterialUi,
        bootstrap,
        photoshop,
    ]

    return (
        <div className='container' ref={toolRef}>
            <h1 style={{color: 'black'}}>TOOLS</h1>
            <div className='icon-container'>
                <Grid container spacing={16} alignItems='center' alignContent='center' justify="center">
                    {icons.map(icon => <Tool icon={icon} />)}
                </Grid>
            </div>
        </div>
    )

}
export default Tools

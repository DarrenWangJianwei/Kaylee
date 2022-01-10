import React from 'react';
import NavComponent from '../components/NavComponent';
import MarkerComponent from '../components/MarkerComponent';
import project from '../css/Project.module.css'
import imageMap from '../images/hero_map.png';

const Project = () => {
    return ( 
        <div className={project.container}>
            <div className={project.logo}>

            </div>
            <div className={project.nav}>
                <NavComponent/>
            </div>
            <div className={project.map}>
                <img src={imageMap} alt="map of vancvouer" width="1100px" useMap="#map"/>
                {/* 120px 190px */}
                <MarkerComponent position={{top:'130px',left:'210px'}}/>
                {/* 415px 190px */}
                <MarkerComponent position={{top:'455px',left:'205px'}}/>
                {/* 400px 240px */}
                <MarkerComponent position={{top:'440px',left:'265px'}}/>
                {/* 360px 565px */}
                <MarkerComponent position={{top:'400px',left:'630px'}}/>
                {/* 570px 705px */}
                <MarkerComponent position={{top:'630px',left:'780px'}}/>
                {/* 625px 880px */}
                <MarkerComponent position={{top:'690px',left:'970px'}} detailShowLeft={true}/>
                {/* 435px 950px */}
                <MarkerComponent position={{top:'480px',left:'1050px'}} detailShowLeft={true}/>
                {/* <map name="map" >
                    <area shape="rect" coords="34,44,270,350" alt="Computer" href="sss" />
                    <area shape="rect" coords="290,172,333,250" alt="Phone" href="phone.htm" />
                    <area shape="circle" coords="337,300,44" alt="Cup of coffee" href="coffee.htm"/>
                </map> */}
            </div>

            <div className={project.subLogo}/>           
        </div>
    );
}
 
export default Project;
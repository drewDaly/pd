// HERO SECTION
import fam from "./../../../images/family corn.jpg"
import boys from "./../../../images/IMG_1262.jpg"
// BEEF GALLERY
import calf from "./../../../images/calf.png"
import one from "./../../../images/IMG_2542.JPG"
import four from "./../../../images/IMG_2547.JPG"
import five from "./../../../images/IMG_2548.JPG"
import six from "./../../../images/IMG_2549.JPG"
import seven from "./../../../images/IMG_2552.JPG"
import emmacalf from "./../../../images/emma calf.jpg"
import hollycalf from "./../../../images/holly calf (2).jpg"
import drewcalf from "./../../../images/November 2011 001 (1).jpg"
import whitecow from "./../../../images/white cow.JPG"
// GRAIN GALLERY
import stuff from "./../../../images/IMG_2504.jpg"
import stuff2 from "./../../../images/IMG_2519.jpg"
import fill from "./../../../images/fill.jpg"
import harvest from "./../../../images/harvest.jpg"
import loading from "./../../../images/loading.jpg"
import sprayer from "./../../../images/sprayer.jpg"
import sprayerSky from "./../../../images/sprayerSky.jpg"
import waterTank from "./../../../images/waterTank.jpg"
// ICONS
import {GrPrevious, GrNext} from "react-icons/gr"
export const homeObjOne = {
    lightBg:false,
    title: "A Family Affair",
    para: "Peterson-Daly Farms is proud to be a true family farm. At Peterson-Daly Farms, everyone chips in to work cattle, stack hay, and everything in between. Off the farm, the family is proud to Agvocate, as every family member is either a former or an active member of 4-H and FFA. Daniel and Drew currently co-own a baling business, while Holly and Emma are active members in the Seward Determination 4-H Club and the Pecatonica FFA chapter.",
    imgStart: 'back',
    img: fam,
    alt: 'Family'
}
export const homeObjTwo = {
    title: "A Generational Legacy", 
    para: "Kent Peterson began farming in 1974, three years before his eldest daughter Carrie was born. Having previously graduated from Eastern Illinois with a business degree, worked in industry, and served in the Marines as a reservist, he was eager to return to his farming roots. Over forty years later, a farming legacy started by Kent's father, Eugene, is still vibrant. Although David now manages the farm, Kent and his wife Lori still help out around the farm and own their own cow herd.",
    imgStart:'start',
    img: boys,
    alt: "dave and kent",
    lightBg: true
}
export const homeObjMast = {
    title: "Peterson-Daly Farms LLC",
    subtitle:"A Family Operated Beef and Grain Farm",
    dash: "— Pecatonica, IL | Est. 1997 —"
}
export const beefImages = [
        calf, hollycalf,emmacalf,drewcalf,whitecow, one, four, five, six, seven
];
export const grainImages = [
    harvest, sprayerSky, fill, waterTank, sprayer, loading,  stuff, stuff2, 
];
export const properties = {
    prevArrow: <button style={{background: 'none', border: '0px'}}><GrPrevious size={25}/></button>,
    nextArrow: <button style={{background: 'none', border: '0px'}}><GrNext size={25}/></button>
}
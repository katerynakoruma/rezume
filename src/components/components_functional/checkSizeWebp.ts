import checkWebp from './checkWebp';

function checkSizeWebp(){
    let isWebp = checkWebp();
    let width = window.innerWidth;
if(isWebp && width > 780){
    return "largeWebp"
}
else if(isWebp && (width < 780 && width > 560)){
    return "mediumWebp"
}
else if(isWebp && width < 560){
    return "smallWebp"
} 
else if(!isWebp && width > 780){
    return "largePng"
} 
else if(!isWebp && (width < 780 && width > 560)){
    return "mediumPng"
}
else if(!isWebp && width < 560){
    return "smallPng"
}

}
export default checkSizeWebp;
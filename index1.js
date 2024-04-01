const hero=document.getElementById("hero");
const body=document.body;

const changebackgroundcolor = (value) => {
    // console.log(hero.value)
    switch (hero.value) {
        case "akshay kumar":
            body.style.backgroundColor="red";
            break;
            case "govinda":
                body.style.backgroundColor="green";
            break;
            case "sid":
                body.style.backgroundColor="aqua";
            break;
            case "randir":
                body.style.backgroundColor="orange";
            break;
            case "sunil":
                body.style.backgroundColor="blue";
            break;
            case "dhiraj":
                body.style.backgroundColor="brown";
            break;
            case "aakash":
                body.style.backgroundColor="orange";
            break;
            case "madan":
                body.style.backgroundColor="pink";
            break;
    
        default:
            body.style.backgroundColor="green";
            break;
    }
}
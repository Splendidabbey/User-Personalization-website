require("dotenv").config();
const express = require('express');
const bodyParser = require('body-parser');
const ejs = require('ejs');
// const nodemailer = require("nodemailer");
// const multiparty = require("multiparty");


const app = express();


app.set('view engine', 'ejs');
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));


app.get("/", function(req,res){
    res.render("index")
});

app.post("/newFeed", function(req,res){
    const username = req.body.username
    const color = req.body.color
    const interest = req.body.interest
    const typeOfContent = req.body.content
    const colorScheme = req.body.colorScheme
    var font = req.body.font
    var fontSize = req.body.fontSize

    var _font = ""
    var _fontSize = ""
    var font_family = ""

    var themeColor1 = "grey"
    var themeColor2 = "grey"
    var themeColor3 = "grey"

    var slideImage1 = ""
    var slideImage2 = ""
    var slideImage3 = ""

    var slideImage4 = ""
    var slideImage5 = ""
    var slideImage6 = ""

    var slideText1 = ""
    var slideText2 = ""
    var slideText3 = ""


    if (color == "purple"){
        if(colorScheme == "singleColor"){
            themeColor1 = "#800080"
            themeColor3 = "#CF9FFF"
            themeColor2 = "#BF40BF" 
        }
        else if(colorScheme == "complementaryColors"){
            themeColor1 = "#800080"
            themeColor2 = "#CF9FFF"
            themeColor3 = "#d6d60f"

        }
        else if(colorScheme == "analogousColor"){
            themeColor1 = "#800080"
            themeColor2 = "#f802f4"
            themeColor3 = "#f93868"

        }
        else if(colorScheme == "triadicColor"){
            themeColor1 = "#800080"
            themeColor3 = "#039e03"
            themeColor2 = "#ffa500"

        }
        else if(colorScheme == "neutralColor"){
            themeColor1 = "#181818"
            themeColor3 = "#CF9FFF"
            themeColor2 = "#585252"

        }
    }

    if (color == "orange"){
        if(colorScheme == "singleColor"){
            themeColor1 = "#ffa500"
            themeColor3 = "#ffc250"
            themeColor2 = "#b37501" 
        }
        else if(colorScheme == "complementaryColors"){
            themeColor1 = "#ffa500"
            themeColor3 = "#3b3bf5"
            themeColor2 = "#b37501" 

        }
        else if(colorScheme == "analogousColor"){
            themeColor1 = "#ffa500"
            themeColor2 = "#ffa500"
            themeColor3 = "#fff200"

        }
        else if(colorScheme == "triadicColor"){
            themeColor1 = "#ffa500"
            themeColor3 = "#3c72c9"
            themeColor2 = "#5a9c5a"

        }
        else if(colorScheme == "neutralColor"){
            themeColor1 = "#181818"
            themeColor3 = "#ffc250"
            themeColor2 = "#585252"

        }
    }

    if (color == "green"){
        if(colorScheme == "singleColor"){
            themeColor1 = "#008000"
            themeColor3 = "#09d609"
            themeColor2 = "#0c7c0c" 
        }
        else if(colorScheme == "complementaryColors"){
            themeColor1 = "#21b721"
            themeColor3 = "#cd5959"
            themeColor2 = "#008000" 

        }
        else if(colorScheme == "analogousColor"){
            themeColor1 = "#3eac3e"
            themeColor2 = "#9acd32"
            themeColor3 = "#2edbdb"

        }
        else if(colorScheme == "triadicColor"){
            themeColor1 = "#3eac3e"
            themeColor2 = "#ffa500"
            themeColor3 = "#7e0242"

        }
        else if(colorScheme == "neutralColor"){
            themeColor1 = "#181818"
            themeColor3 = "#09d609"
            themeColor2 = "#585252"

        }
    }

    if (color == "blue"){
        if(colorScheme == "singleColor"){
            themeColor1 = "#6acef0"
            themeColor3 = "#FFFFFF"
            themeColor2 = "#6acef0" 
        }
        else if(colorScheme == "complementaryColors"){
            themeColor1 = "#6acef0"
            themeColor3 = "#ff3700"
            themeColor2 = "#6acef0" 

        }
        else if(colorScheme == "analogousColor"){
            themeColor1 = "#6acef0"
            themeColor3 = "#3b3bf5"
            themeColor2 = "#3eac3e"

        }
        else if(colorScheme == "triadicColor"){
            themeColor1 = "#6acef0"
            themeColor3 = "#aa7702"
            themeColor2 = "#7e0242"

        }
        else if(colorScheme == "neutralColor"){
            themeColor1 = "#181818"
            themeColor3 = "#6acef0"
            themeColor2 = "#585252"

        }
    }

    if (color == "red"){
        if(colorScheme == "singleColor"){
            themeColor1 = "#ff0000"
            themeColor3 = "#f89a9a"
            themeColor2 = "#ff0000" 
        }
        else if(colorScheme == "complementaryColors"){
            themeColor1 = "#ff0000"
            themeColor3 = "#005700"
            themeColor2 = "#005700" 

        }
        else if(colorScheme == "analogousColor"){
            themeColor1 = "#ff0000"
            themeColor2 = "#ff3700"
            themeColor3 = "#ffa500" 

        }
        else if(colorScheme == "triadicColor"){
            themeColor1 = "#ff0000"
            themeColor2 = "#07b3ed"
            themeColor3 = "#fff200" 

        }
        else if(colorScheme == "neutralColor"){
            themeColor1 = "#181818"
            themeColor3 = "#ff0000"
            themeColor2 = "#585252"

        }
    }

    if (interest == "sport"){
        slideImage1 = "images/sportImages/sportNews1.jpg"
        slideImage2 = "images/sportImages/sportNews2.jpeg"
        slideImage3 = "images/sportImages/sportNews3.jpg"

        slideImage4 = "images/sportImages/sportNews4.jpg"
        slideImage5 = "images/sportImages/sportNews5.jpg"
        slideImage6 = "images/sportImages/sportNews6.jpg"

        slideText1 = "Watford – Manchester City, Premier League Predictions 21.07.2020 | Betinum.com"
        slideText2 = "Premier League: Sergio Aguero nets twice as Manchester City beat United 4-1 on derby day"
        slideText3 = "Football: Soccer-Manchester City win Premier League title as Arsenal lose"
    }

    if (interest == "nature"){
        slideImage1 = "images/natureImages/nature1.jpg"
        slideImage2 = "images/natureImages/nature6.jpg"
        slideImage3 = "images/natureImages/nature3.jpg"


        slideImage4 = "images/natureImages/nature4.jpg"
        slideImage5 = "images/natureImages/nature5.jpg"
        slideImage6 = "images/natureImages/nature2.jpg"

        slideText1 = "Ancient Forest Discovery: Researchers Uncover Hidden Ecosystem Treasures Beneath Canopy Canopy"
        slideText2 = "Tiger Conservation Triumph: Endangered Species Population Surges with Innovative Protection Measures"
        slideText3 = "Arctic Conservation Breakthrough: Nations Join Forces to Safeguard Polar Bears through Ambitious Reforestation Campaign"
    }

    if (interest == "politics"){
        slideImage1 = "images/politicsImages/politics1.jpg"
        slideImage2 = "images/politicsImages/politics2.jpg"
        slideImage3 = "images/politicsImages/politics3.jpg"


        slideImage4 = "images/politicsImages/politics4.jpg"
        slideImage5 = "images/politicsImages/politics5.jpg"
        slideImage6 = "images/politicsImages/politics6.jpg"

        slideText1 = "Obama's Environmental Legacy Continues: Former President Advocates for Sustainable Practices in Land Conservation"
        slideText2 = "Senate Addresses Urgent Environmental Concerns in High-Stakes Meeting on Conservation Policies"
        slideText3 = "Critical Nature Announcement: Environmental Leaders Unveil Bold Initiatives in High-profile Press Conference"
    }

    if (interest == "entertainment"){
        slideImage1 = "images/entertainmentImages/entertainment1.jpg"
        slideImage2 = "images/entertainmentImages/entertainment2.jpg"
        slideImage3 = "images/entertainmentImages/entertainment3.jpg"


        slideImage4 = "images/entertainmentImages/entertainment4.jpg"
        slideImage5 = "images/entertainmentImages/entertainment5.jpg"
        slideImage6 = "images/entertainmentImages/entertainment6.jpg"

        slideText1 = "Game of Thrones Spinoff Announcement Creates Buzz as Fans Eagerly Await Return to Westeros"
        slideText2 = "Godzilla Roars Back to the Big Screen: Legendary Monster's Epic Comeback Shatters Box Office Expectations"
        slideText3 = "Peaky Blinders Season Finale Promises Intense Twists and Turns, Leaving Fans on the Edge of Their Seats"
    }

    if(font == "serif"){
        _font = ""
        font_family = "serif"

    }
    else{
        _font = ""
        font_family = "sans-serif"
    }

    if(fontSize == "small"){
        _fontSize = "small"

    }
    else if(fontSize == "medium"){
        _fontSize = "medium"
    }
    else{
        _fontSize = "large"
    }

    var carouselControlColor = `data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='%23fff' viewBox='0 0 8 8'%3E%3Cpath d='M5.25 0l-4 4 4 4 1.5-1.5-2.5-2.5 2.5-2.5-1.5-1.5z'/%3E%3C/svg%3E`
    var context = {
        username : username,
        typeOfContent: typeOfContent,
        themeColor1: themeColor1,
        themeColor2: themeColor2,
        themeColor3: themeColor3,
        slideImage1 : slideImage1,
        slideImage2 : slideImage2,
        slideImage3 : slideImage3,
        slideImage4 : slideImage4,
        slideImage5 : slideImage5,
        slideImage6 : slideImage6,
        slideText1 : slideText1,
        slideText2 : slideText2,
        slideText3 : slideText3,
        carouselControlColor: carouselControlColor,
        fontSize: _fontSize,
        font : _font,
        font_family: font_family
    }
    res.render("newFeed", context)
});
  

app.listen(process.env.PORT || 3000, function(){
    console.log("Server started on port 3000");
})

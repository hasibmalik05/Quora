
var leftData=[
    {
        image_url: "https://qph.cf2.quoracdn.net/main-thumb-t-5488-100-3xdwG0xXYXFkIQpIO4ZhoMLOHQE3ASFk.jpeg" ,
        title:"Epistemology",
    },
    {
        image_url:"	https://qph.cf2.quoracdn.net/main-thumb-t-1798-100-OymNc8d6wCXvNogdXfoxtqipKla69TTA.jpeg",
        title:"World war I",
    },
    {
        image_url:"https://qph.cf2.quoracdn.net/main-thumb-t-3620-100-yTrqVsrvziy0KXZZHKGdQGRkUk7r1iif.jpeg" ,
        title: "Morals and Morality" ,
    },
    {
        image_url:"	https://qph.cf2.quoracdn.net/main-thumb-t-3380-100-rckzkdfhbgmchbpicmnpkmjtebtgsipb.jpeg" ,
        title:"New Delhi" ,
    },
    {
        image_url:"https://qph.cf2.quoracdn.net/main-thumb-t-4391-100-3bVQhJxiE59N0ETLVArfDbzv8SddeFOa.jpeg",
        title:"Pakistan",
    },
    {
        image_url:"https://qph.cf2.quoracdn.net/main-thumb-t-1055-100-YcjXiFeYHut8R6Xu1gDIQjzcg0MyfeMZ.jpeg",
        title:"Literature",
    },
    {
        image_url:"https://qph.cf2.quoracdn.net/main-thumb-t-1943-100-nbjawgmsyqhsizvohxhfcxhnjutwpdil.jpeg",
        title:"Ethics"
    },
    {
        image_url:"https://qph.cf2.quoracdn.net/main-thumb-t-1375-100-aybrjrdmkktbagbhpqujankemexuyeti.jpeg",
        title:"India",
    },
    {
        image_url:"https://qph.cf2.quoracdn.net/main-thumb-t-1497-100-GNNZHw8iGYKcBBdqFGxoNvw85bgzRI0Z.jpeg" ,
        title:"Philosophy"
    },
    {
        image_url:"	https://qph.cf2.quoracdn.net/main-thumb-t-930-100-cbbsbwijdhpyzlpipejvqpiijhhoaday.jpeg",
        title:"History",
    },
    {
        image_url:"https://qph.cf2.quoracdn.net/main-thumb-t-813-100-mHRdyrT74CRRctkfFsF5MPHUYobecrPW.jpeg",
        title:"Celebrity Gossip",
    },
];

displayLeftSide(leftData);

function displayLeftSide(data){ 
    data.map(function(elem){
        var tr=document.createElement("tr");
       var td1=document.createElement("td");
        var td2=document.createElement("td");
        var image=document.createElement("img");
        image.setAttribute("class","leftimage");

        image.setAttribute("src",elem.image_url);
        td2.innerText=elem.title;
        td1.append(image);
        tr.append(td1,td2);
        document.querySelector("tbody").append(tr);
    })
}

feedData=[
    {
        profilepic:"https://qphs.fs.quoracdn.net/main-thumb-135629173-50-fpakbgazcwctlkzymnblmfmveuucjaub.jpeg",
        name: "Saurav Pandey",
        tag:"Lives in India Updated Apr 1",
        heading:"How bad are things for female travelers/locals in Delhi?",
        postdata:"I wanna share my personal experience.I have to go to Delhi for my exam which is nearby at the Dwarka metro station. Soon after the exam, I am in a hurry to go to the Anand Vihar terminal to return home asap.In the metro, one lady who is for sure is a Punjabi woman comes and told me to stand up and give my seat for her to sit. I told her politely that ma'am there is a lot of space as the bench was empty and occupied by three people only.She told me to leave immediately as these seats are particularly reserved for ladies only. I said ok and sit on the front bench having enough space to sit for more than 3 people.      She along with her husband and daughters were sitting comfortably on the seat. Meanwhile, her daughter taunts me…“ mom - you Removed him.Mom replied- why not I will do the same with all, because they don't have ethics.",

        img_url:"https://qphs.fs.quoracdn.net/main-qimg-b86bd503d8b27d59826b69f2268a47b6-lq",
    },
    {
        profilepic:"	https://qphs.fs.quoracdn.net/main-thumb-968857558-50-cpnralusamxccujbvkpfkgywlyrurdbe.jpeg" ,
        name:"Akanksha Mishra (akanmis149)" ,
        tag:"Studied at University of Delhi (Graduated 2020)  Updated 8m",
        heading:"What will the UPSC failures do?",
        postdata:"On the same day of the result I saw this tweet. He wrote,'Don’t know what is written in destiny'",
        img_url:"https://qphs.fs.quoracdn.net/main-qimg-fa60919c85944f0f16cc5b1d4703d17d-lq",
    },
    {
        profilepic:"https://qphs.fs.quoracdn.net/main-thumb-109432561-50-zehmqvqswlufurocmuuijinvmzmdtmlf.jpeg" ,
        name:"Sidd Sharma" ,
        tag:"2y",
        heading:"What is the shortest and cheapest operating flight in India?",
        postdata:"I present to you the one dollar flight in India. All aboard the flight to nowhere! Although the flight takes you nowhere, you get the full flight experience for a dollar :) ",
        img_url:"https://qphs.fs.quoracdn.net/main-qimg-f9ac836d463a2f510bd8837d7ce46c05-lq",
    },
    {
        profilepic:"https://qphs.fs.quoracdn.net/main-thumb-2355058-50-mffjyumnhcycpdqiqosvtgckcmeynarc.jpeg" ,
        name:"Balaji Viswanathan" ,
        tag:"Lives in Bengaluru, Karnataka, India (2016–present)",
        heading:"What if we have a golden triangle between Hyderabad, Bengaluru and Chennai? Will it be more successful than the Delhi-Mumbai industrial corridor?",
        postdata:"We have to go beyond just the HYD-BLR - CHN triangle and look to build a lot of new triangles of developments across India. I envision new development in 6 triangles. If we put a lot of emphasis on growing these triangles there will be enormous side benefits. These triangles impact the Delhi-Mumbai corridor.",
        img_url:"https://qphs.fs.quoracdn.net/main-qimg-825a45a0f9b8206f0b04b549dc589469-pjlq",
    },
    
]

displayFeed(feedData);

function displayFeed(data){
    data.map(function(elem){
        var headingDiv= document.createElement("div");
        headingDiv.setAttribute("class","postHeading");
        var profilepic=document.createElement("img");
        profilepic.setAttribute("src",elem.profilepic);

        var ppdiv=document.createElement("div");

        var namediv= document.createElement("div");
        namediv.setAttribute("class","nameDiv");

        var tagdiv=document.createElement("div");

        var ntdiv= document.createElement("div");
        ntdiv.setAttribute("class","nameandtag");
        
        var Name=document.createElement("p");
        Name.innerText=elem.name;
        Name.setAttribute("class","name");

        var follow= document.createElement("p");
        follow.innerText="Follow";
        follow.setAttribute("class","follow");

        var Tag= document.createElement("p");
        Tag.innerText=elem.tag;

        var postDiv=document.createElement("div");
        postDiv.setAttribute("class","postDivision")

        var Heading= document.createElement("h4");
        Heading.innerText=elem.heading;

        var Postdata=document.createElement("p");
        Postdata.innerText=elem.postdata;

        var postImage=document.createElement("img");
        postImage.setAttribute("src",elem.img_url);

        var postImageDiv=document.createElement("div");
        postImageDiv.append(postImage);
        postImageDiv.setAttribute("class","postimage");

        namediv.append(Name,follow);
        tagdiv.append(Tag);
        ntdiv.append(namediv,tagdiv);
        ppdiv.append(profilepic);

        headingDiv.append(ppdiv,ntdiv);
        postDiv.append(Heading,Postdata,);

        var fullPostDiv=document.createElement("div");
        fullPostDiv.setAttribute("class","post");
       fullPostDiv.append(headingDiv,postDiv,postImageDiv);
       document.getElementById("feed").append(fullPostDiv);
    })
}



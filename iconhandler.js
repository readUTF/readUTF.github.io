window.addEventListener('load', function () {

    const portfolio = document.getElementById("portfolio-img");

    if(portfolio != null) {
        portfolio.addEventListener('dblclick', function(e) {
            open("https://google.com");
        });
        portfolio.setAttribute('draggable', false);
    }

    const contact = document.getElementById("contact-img");
    if(contact != null) {
        contact.setAttribute('draggable', false);

        contact.addEventListener('dblclick', function(e) {
            window.location.replace('contact.html');
        });
    }

    const home = document.getElementById("home-img");
    if(home != null) {
        home.setAttribute('draggable', false);

        home.addEventListener('dblclick', function(e) {
            window.location.replace('index.html');
        });
    }

    const twitter = document.getElementById("twitter-img");
    if(twitter != null) {
        twitter.setAttribute('draggable', false);
        twitter.addEventListener('dblclick', function(e) {
            window.location.href = "https://twitter.com/readUTF";
        });
    }

    const github = document.getElementById("github-img");
    if(github != null) {
        github.setAttribute('draggable', false);
        github.addEventListener('dblclick', function(e) {
            window.location.href = "https://github.com/readUTF";
        });
    }

    const discord = document.getElementById("discord-img");
    if(discord != null) {
        discord.setAttribute('draggable', false);
        discord.addEventListener('dblclick', function(e) {
            window.alert("Add me on discord: UTF#0393")
        });
    }

    
});



function contactClick() {
    reset();
    document.getElementById("contact-img").style.backgroundColor = "rgba(173, 216, 230, 0.9)"
}

function portfolioClick() {
    reset();
    document.getElementById("portfolio-img").style.backgroundColor = "rgba(173, 216, 230, 0.9)"
}

function homeClick() {
    reset();
    document.getElementById("home-img").style.backgroundColor = "rgba(173, 216, 230, 0.9)"
}

function twitterClick() {
    reset();
    document.getElementById("twitter-img").style.backgroundColor = "rgba(173, 216, 230, 0.9)"
}

function githubClick() {
    reset();
    document.getElementById("github-img").style.backgroundColor = "rgba(173, 216, 230, 0.9)"
}

function discordClick() {
    reset();
    document.getElementById("discord-img").style.backgroundColor = "rgba(173, 216, 230, 0.9)"
}

function desktopClick() {
    reset();
}

function reset() {
    var contactimg = document.getElementById("contact-img");
    if(contactimg != null) {
        document.getElementById("contact-img").style.backgroundColor = "inherit"
    }
    var portfolioimg = document.getElementById("portfolio-img");
    if(portfolioimg != null) {
        document.getElementById("portfolio-img").style.backgroundColor = "inherit";
    }
    var homeImg = document.getElementById("home-img");
    if(homeImg != null) {
        homeImg.style.backgroundColor = "inherit"
    }
    var discordImg = document.getElementById("discord-img");
    if(discordImg != null) {
        discordImg.style.backgroundColor = "inherit"
    }
    
    var twitterImg = document.getElementById("twitter-img");
    if(twitterImg != null) {
        twitterImg.style.backgroundColor = "inherit"
    }
    var githubImg = document.getElementById("github-img");
    if(githubImg != null) {
        githubImg.style.backgroundColor = "inherit"
    }
}
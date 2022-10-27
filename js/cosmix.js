// Start Height Fun
const sctionsHeight = (
  sectionName,
  targeted1,
  targeted2,
  targeted3,
  targeted4
) => {
  if (window.scrollY >= sectionName.offsetTop - 300) {
    targeted1.classList.add("show");
    targeted2.classList.add("show");
    targeted3.classList.add("show");
    targeted4.classList.add("show");
  }
};

// Start Navbar and Up Btn
let upBtn = document.querySelector(".up-btn");
let navLinks = document.querySelectorAll(".navbar-nav .nav-link");
let myNavbar = document.querySelector(".navbar");
let navHeight = myNavbar.getBoundingClientRect().height;
window.addEventListener("scroll", (e) => {
  if (scrollY >= navHeight) {
    myNavbar.classList.add("fixed-nav");
    upBtn.classList.add("display");
  } else {
    myNavbar.classList.remove("fixed-nav");
    upBtn.classList.remove("display");
  }
});
upBtn.addEventListener("click", () => {
  scrollTo({ left: 0, top: 0, behavior: "smooth" });
});

navLinks.forEach((navlink) => {
  navlink.addEventListener("click", (e) => {
    e.preventDefault();
    navLinks.forEach((element) => {
      element.classList.remove("active");
    });
    e.currentTarget.classList.add("active");
    let id = e.currentTarget.getAttribute("href").slice(1),
      targetEle = document.getElementById(id),
      elePosition = targetEle.offsetTop - navHeight;
    scrollTo({ left: 0, top: elePosition, behavior: "smooth" });
  });
});

// Start Landing
let landContent = document.querySelector(".landing-content"),
  landing = document.querySelector(".landing"),
  slideRight = document.querySelector(".slide-right"),
  slideLeft = document.querySelector(".slide-left"),
  landingImgs = [
    "../images/Slider/01.jpg",
    "../images/Slider/02.jpg",
    "../images/Slider/03.jpg",
    "../images/Slider/10.jpg",
  ],
  currentSlide = 0;

slideRight.addEventListener("click", (e) => {
  currentSlide++;
  landing.style.backgroundImage = `url(${landingImgs[currentSlide]})`;
  if (currentSlide === landingImgs.length) {
    currentSlide = 0;
    landing.style.backgroundImage = `url(${landingImgs[currentSlide]})`;
  }
});
slideLeft.addEventListener("click", (e) => {
  currentSlide--;
  landing.style.backgroundImage = `url(${landingImgs[currentSlide]})`;
  if (currentSlide < 0) {
    currentSlide = landingImgs.length - 1;
    landing.style.backgroundImage = `url(${landingImgs[currentSlide]})`;
  }
});
window.addEventListener("load", () => {
  landContent.classList.add("dis");
});

// Start About
let aboutSection = document.querySelector(".about-us"),
  aboutImg = document.querySelector(".about-img");
window.addEventListener("scroll", () => {
  sctionsHeight(aboutSection, aboutImg);
});

// Start Skills
let skillsSection = document.querySelector(".skills"),
  skillProgress = document.querySelector(".skills-progress"),
  skillImg = document.querySelector(".skills-img");
window.addEventListener("scroll", () => {
  sctionsHeight(skillsSection, skillProgress, skillImg);
});

// Start Features
let featuresFilters = document.querySelectorAll(".feature-choose"),
  featTitle = document.querySelector(".feature-title"),
  featDesc = document.querySelector(".feature-description"),
  featImg = document.querySelector(".feature-img img");
const featureItems = [
  {
    id: 1,
    cateogary: "web design",
    titile: "Web Design",
    img: "../images/Features/01.jpg",
    description:
      "A web site is a set of Web pages (documents that are accessible through the Internet), such as the one that you are seeing right now. A web page is what you see on the screen when you enter a web address, click on any link, or put a query in a search engine. A web page contain various types of information, and can include text, colors, videos, graphics, animations and sounds. If you've grown up with computers or introduced to them in adulthood, it is difficult today to imagine a world that does not have the Internet. We rely on the Internet to manage our money, to search for jobs, for we represent professionally and remain in contact with the relatives in the country or even across the world. Internet and websites travel side by side. We can use the Internet to do research, to learn and to allow us to carry out projects that we do not know how to do without trying, that is to say, the instructions on the internet sites. The Internet itself is barely fifty years old, and the World Wide Web at least thirty years, but if these were to disappear, the modern enterprise would all but cease.",
  },
  {
    id: 2,
    cateogary: "graphic",
    titile: "Graphic Design",
    img: "../images/Features/02.jpg",
    description:
      "The role of the graphic designer in the communication process is that of encoder or interpreter of the message. They work on the interpretation, ordering, and presentation of visual messages. Usually, graphic design uses the aesthetics of typography and the compositional arrangement of the text, ornamentation, and imagery to convey ideas, feelings, and attitudes beyond what language alone expreses. The design work can be based on a customers demand, a demand that ends up being established linguistically, either orally or in writing, that is, that graphic design transforms a linguistic message into a graphic manifestation",
  },
  {
    id: 3,
    cateogary: "development",
    titile: "Web Development",
    img: "../images/Features/03.jpg",
    description:
      "TWeb development is the work involved in developing a website for the Internet (World Wide Web) or an intranet (a private network). Web development can range from developing a simple single static page of plain text to complex web applications, electronic businesses, and social network services. A more comprehensive list of tasks to which Web development commonly refers, may include Web engineering, Web design, Web content development, client liaison, client-side/server-side scripting, Web server and network security configuration, and e-commerce development.",
  },
  {
    id: 2,
    cateogary: "responsive",
    titile: "Responsive Design",
    img: "../images/Features/04.jpg",
    description:
      "The role of the graphic designer in the communication process is that of encoder or interpreter of the message. They work on the interpretation, ordering, and presentation of visual messages. Usually, graphic design uses the aesthetics of typography and the compositional arrangement of the text, ornamentation, and imagery to convey ideas, feelings, and attitudes beyond what language alone expreses. The design work can be based on a customers demand, a demand that ends up being established linguistically, either orally or in writing, that is, that graphic design transforms a linguistic message into a graphic manifestation",
  },
  {
    id: 2,
    cateogary: "gallery",
    titile: "Creative Gallery",
    img: "../images/Features/05.jpg",
    description:
      "Among the modern reasons art may be displayed are aesthetic enjoyment, education, historic preservation, or for marketing purposes. The term is used to refer to establishments with distinct social and economic functions, both public and private. Institutions that preserve a permanent collection may be called either gallery of art or museum of art. If the latter, the rooms where art is displayed within the museum building are called galleries. Art galleries that do not maintain a collection are either commercial enterprises for the sale of artworks, or similar spaces operated by art cooperatives or non-profit organizations. As part of the art world, art galleries play an important role in maintaining the network of connections between artists, collectors, and art experts that define fine art.",
  },
];
let currentFeat = 0;

featuresFilters.forEach((filter) => {
  filter.addEventListener("click", (e) => {
    featuresFilters.forEach((element) => {
      element.classList.remove("active");
    });
    e.currentTarget.classList.add("active");
    let clickedFeat = e.currentTarget.dataset.feat;
    if (clickedFeat === "design") {
      featuresChosen(0);
    } else if (clickedFeat === "graphic") {
      featuresChosen(1);
    } else if (clickedFeat === "development") {
      featuresChosen(2);
    } else if (clickedFeat === "responsive") {
      featuresChosen(3);
    } else if (clickedFeat === "gallery") {
      featuresChosen(4);
    }
  });
});
const featuresChosen = (currentFeat) => {
  let item = featureItems[currentFeat];
  featTitle.textContent = item.titile;
  featDesc.textContent = item.description;
  featImg.src = item.img;
};

// Start Portfolio
let portflioFilters = document.querySelectorAll(".portfolio-filter");
let myPortContainer = document.querySelector(".portfolio-content");
const portoMenu = [
  {
    id: 1,
    cateogary: "creative",
    title: "image-01",
    img: "../images/Portfolio/01.jpg",
  },
  {
    id: 2,
    cateogary: "cooperate",
    title: "image-02",
    img: "../images/Portfolio/02.jpg",
  },
  {
    id: 3,
    cateogary: "creative",
    title: "image-03",
    img: "../images/Portfolio/03.jpg",
  },
  {
    id: 4,
    cateogary: "portfolio",
    title: "image-04",
    img: "../images/Portfolio/04.jpg",
  },
  {
    id: 5,
    cateogary: "portfolio",
    title: "image-05",
    img: "../images/Portfolio/05.jpg",
  },
  {
    id: 6,
    cateogary: "cooperate",
    title: "image-06",
    img: "../images/Portfolio/06.jpg",
  },
  {
    id: 7,
    cateogary: "creative",
    title: "image-07",
    img: "../images/Portfolio/07.jpg",
  },
  {
    id: 8,
    cateogary: "portfolio",
    title: "image-08",
    img: "../images/Portfolio/08.jpg",
  },
  {
    id: 9,
    cateogary: "cooperate",
    title: "image-09",
    img: "../images/Portfolio/09.jpg",
  },
];

portflioFilters.forEach((portFilter) => {
  portFilter.addEventListener("click", (e) => {
    portflioFilters.forEach((ele) => {
      ele.classList.remove("active");
    });
    e.currentTarget.classList.add("active");
    let portCat = e.currentTarget.dataset.portfolio;
    let menuPort = portoMenu.filter((oneItme) => {
      if (portCat === oneItme.cateogary) {
        return oneItme;
      }
    });
    if (portCat === "all") {
      portfoliomenu(portoMenu);
    } else {
      portfoliomenu(menuPort);
    }
  });
});
window.addEventListener("load", () => {
  portfoliomenu(portoMenu);
});
const portfoliomenu = (porotItems) => {
  let menuItems = porotItems
    .map((items) => {
      return `<div class="col-lg-4 col-sm-6 mb-4">
        <div class="port-image">
          <img class="img-fluid" src=${items.img} alt="portfolio">
          <div class="port-more d-flex flex-column justify-content-center align-items-center">
            <span class="show-img text-center mb-2 text-light"><i class="fa-solid fa-plus fs-5"></i></span>
            <h6 class="img-title">${items.title}</h6>
            <p>Hope you like it</p>
          </div>
        </div>
      </div>`;
    })
    .join("");
  myPortContainer.innerHTML = menuItems;
  let portImgs = document.querySelectorAll(".port-image img"),
    showSpans = document.querySelectorAll(".port-more .show-img");

  showSpans.forEach((span) => {
    span.addEventListener("click", (e) => {
      let myOverlay = document.createElement("div");
      myOverlay.className = "port-overlay";
      let myImgBox = document.createElement("div");
      myImgBox.className = "img-box";
      let myImg = document.createElement("img");
      myImg.className = "popImg";
      myImg.src = portImgs[3].src;
      myImgBox.appendChild(myImg);
      myOverlay.appendChild(myImgBox);
      let closePop = document.createElement("button");
      closePop.textContent = "X";
      closePop.className = "close-pop";
      myImgBox.appendChild(closePop);
      document.body.appendChild(myOverlay);
      closePop.onclick = function () {
        myOverlay.remove();
      };
    });
  });
};

// Start Pricing
let priceSection = document.querySelector(".pricing"),
  priceBox = document.querySelectorAll(".price-box");
window.addEventListener("scroll", () => {
  sctionsHeight(
    priceSection,
    priceBox[0],
    priceBox[1],
    priceBox[2],
    priceBox[3]
  );
});

// Start Our-Team
const testiMenu = [
  {
    id: 1,
    name: "Sam Deen",
    job: "Ceo & Founder",
    desc: "I just wanted to share a quick note and let you know that you guys do a really good job. Im glad I decided to work with you. Its really great how easy your websites are to update and manage. I never have any problem at all.",
    img: "../images/Testimonials/02.jpg",
  },
  {
    id: 2,
    name: "John Leo",
    job: "Web Developer",
    desc: "You made it so simple. My new site is so much faster and easier to work with than my old site. I just choose the page, make the change and click save. Thanks, guys!",
    img: "../images/Testimonials/03.jpg",
  },
  {
    id: 3,
    name: "Ema Johnson",
    job: "Graphic Desinger",
    desc: "Now its almost like having a designer right here with me. I just choose the page, make the change and click save. Its so simple. Thanks, guys!.",
    img: "../images/Testimonials/04.jpg",
  },
];
let testiFilters = document.querySelectorAll(".testi-select"),
  testiImg = document.querySelector(".testi-img"),
  testiDesc = document.querySelector(".testi-desc"),
  testiName = document.querySelector(".testi-name"),
  testiJob = document.querySelector(".testi-job"),
  currentTesti = 0;

testiFilters.forEach((li) => {
  li.addEventListener("click", (e) => {
    testiFilters.forEach((ele) => {
      ele.classList.remove("active");
    });
    e.currentTarget.classList.add("active");
    let testiChosen = e.currentTarget.dataset.testi;
    if (testiChosen === "one") {
      testimonials(0);
    } else if (testiChosen === "two") {
      testimonials(1);
    } else if (testiChosen === "three") {
      testimonials(2);
    }
  });
});
const testimonials = (currentTesti) => {
  let myTesti = testiMenu[currentTesti];
  testiImg.src = myTesti.img;
  testiDesc.textContent = myTesti.desc;
  testiName.textContent = myTesti.name;
  testiJob.textContent = myTesti.job;
};

// Start Statics
let statsSection = document.querySelector(".our-statics");
let statsSpans = document.querySelectorAll(".our-statics .stats");
let startedStat = false;

window.addEventListener("scroll", (e) => {
  if (window.scrollY >= statsSection.offsetTop - 250) {
    if (!startedStat) {
      statsSpans.forEach((stat) => {
        let goal = stat.dataset.stats;
        let statCount = setInterval(() => {
          stat.textContent++;
          if (stat.textContent === goal) {
            clearInterval(statCount);
          }
        }, 2000 / goal);
      });
    }
    startedStat = true;
  }
});

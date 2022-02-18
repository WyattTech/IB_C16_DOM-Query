document.addEventListener("DOMContentLoaded", function () {
  document.body.onload = function () {
    const btn1 = document.createElement("button");
    const btnText = document.createTextNode("Click!");
    btn1.appendChild(btnText);
    document.body.appendChild(btn1);

    let container = document.getElementById("container");
    container.appendChild(btn1);

    btn1.onclick = btnActions;
    function btnActions() {
      alert("Keep Your Eyes on the Prize!");
    }

    let randomBgc = document.getElementById("div1");
    randomBgc.addEventListener("mouseover", function (e) {
      e.target.style.backgroundColor = randomColor();
    });

    let returnBgc = document.getElementById("div1");
    returnBgc.addEventListener("mouseout", function (e) {
      e.target.style.backgroundColor = "black";
    });

    function randomColor() {
      let letters = "0123456789ABCDEF";
      let color = "#";
      for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
      }
      return color;
    }
    const newDiv = document.createElement("div");
    const para = document.createElement("p");
    const paraText = document.createTextNode(
      " 'A day without sunshine is like, you know, night' ~ Steve Martin"
    );
    para.appendChild(paraText);
    newDiv.appendChild(para);
    document.body.appendChild(newDiv);

    para.addEventListener("click", paraColor);
    function paraColor(e) {
      //e.target.style.color = "red";
      e.target.style.color = randomColor();
    }

    const btn2 = document.createElement("button");
    const btnText2 = document.createTextNode("Hit!");
    const newDiv3 = document.createElement("div");
    btn2.appendChild(btnText2);
    document.body.appendChild(newDiv3);
    document.body.appendChild(btn2);
    container.appendChild(btn2);
    container.appendChild(newDiv3);
    container.appendChild(newDiv);

    btn2.addEventListener("click", function () {
      const span = document.createElement("span");
      const spanText = document.createTextNode("April!");
      span.appendChild(spanText);
      newDiv3.appendChild(span);
    });
  
  
    const punchBtn = document.getElementById("btn3");

    punchBtn.addEventListener("click", function() {
      const friends = ["Charlie", "Sally", "Linus", "Pig-Pen", "Lucy", "Peppermint Patty", "Snoopy", "Snoopy", "Woodstock", "Franklin", "Marcie" ];
      for(let i = 0; i < friends.length; i++) {
       let name = friends[i];
       const newLi = document.createElement("Li");
       newLi.innerText = name;
       document.body.appendChild(newLi);
      }

    });  
};
});

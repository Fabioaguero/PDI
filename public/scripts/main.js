const openModal1 = document.querySelector("#open-modal1");
const openModal2 = document.querySelector("#open-modal2");
const openModal3 = document.querySelector("#open-modal3");
const openModal4 = document.querySelector("#open-modal4");
const openModal5 = document.querySelector("#open-modal5");
const openModal6 = document.querySelector("#open-modal6");
const openModal7 = document.querySelector("#open-modal7");
const openModal8 = document.querySelector("#open-modal8");
const openModal9 = document.querySelector("#open-modal9");
const openModal10 = document.querySelector("#open-modal10");
const openModal11 = document.querySelector("#open-modal11");
const openModal12 = document.querySelector("#open-modal12");
const openModal13 = document.querySelector("#open-modal13");
const openModal14 = document.querySelector("#open-modal14");
const openModal15 = document.querySelector("#open-modal15");
const openModal16 = document.querySelector("#open-modal16");
const openModal17 = document.querySelector("#open-modal17");
const openModal18 = document.querySelector("#open-modal18");
const openModal19 = document.querySelector("#open-modal19");
const openModal20 = document.querySelector("#open-modal20");
const openModal21 = document.querySelector("#open-modal21");
const modal1 = document.querySelector(".modal1");
const modal2 = document.querySelector(".modal2");
const modal3 = document.querySelector(".modal3");
const modal4 = document.querySelector(".modal4");
const modal5 = document.querySelector(".modal5");
const modal6 = document.querySelector(".modal6");
const modal7 = document.querySelector(".modal7");
const modal8 = document.querySelector(".modal8");
const modal9 = document.querySelector(".modal9");
const modal10 = document.querySelector(".modal10");
const modal11 = document.querySelector(".modal11");
const modal12 = document.querySelector(".modal12");
const modal13 = document.querySelector(".modal13");
const modal14 = document.querySelector(".modal14");
const modal15 = document.querySelector(".modal15");
const modal16 = document.querySelector(".modal16");
const modal17 = document.querySelector(".modal17");
const modal18 = document.querySelector(".modal18");
const modal19 = document.querySelector(".modal19");
const modal20 = document.querySelector(".modal20");
const modal21 = document.querySelector(".modal21");
const closeModalButton = document.querySelector("#close-modal");
const fate = document.querySelector("#fate");


const toggleModal = () => {
//  modal1.classList.toggle("hide");
//  modal2.classList.toggle("hide");
//  modal3.classList.toggle("hide");
//  modal4.classList.toggle("hide");
//  modal5.classList.toggle("hide");
//  modal6.classList.toggle("hide");
//  modal7.classList.toggle("hide");
//  modal8.classList.toggle("hide");
// modal9.classList.toggle("hide");
//  modal10.classList.toggle("hide");
//  modal11.classList.toggle("hide");
//  modal12.classList.toggle("hide");
//  modal13.classList.toggle("hide");
//  modal14.classList.toggle("hide");
//  modal15.classList.toggle("hide");
//  modal16.classList.toggle("hide");
// modal17.classList.toggle("hide");
//  modal18.classList.toggle("hide");
//  modal19.classList.toggle("hide");
//  modal20.classList.toggle("hide");
//  modal21.classList.toggle("hide");
 fate.classList.remove("hide");
 closeModalButton.remove("hide");
};

[openModal1].forEach((el) => {
  el.addEventListener("click", () => toggleModal(modal1.classList.toggle("hide")),
  )
});

[openModal2 ].forEach((el2) => {
  el2.addEventListener("click", () => toggleModal(modal2.classList.toggle("hide")));
})



function papo (tipo) {
  switch (tipo) {
    case 'modal1':modal1.classList.toggle("hide");  break;
    case 'modal2':modal2.classList.toggle("hide");  break;
    case 'modal3':modal3.classList.toggle("hide");  break;
    case 'modal4':modal4.classList.toggle("hide");  break;
    case 'modal5':modal5.classList.toggle("hide");  break;
    case 'modal6':modal6.classList.toggle("hide");  break;
    case 'modal7':modal7.classList.toggle("hide");  break;
    case 'modal8':modal8.classList.toggle("hide");  break;
    case 'modal9':modal9.classList.toggle("hide");  break;
    case 'modal10':modal10.classList.toggle("hide");  break;
    case 'modal11':modal11.classList.toggle("hide");  break;
    case 'modal12':modal12.classList.toggle("hide");  break;
    case 'modal13':modal13.classList.toggle("hide");  break;
    case 'modal14':modal14.classList.toggle("hide");  break;
    case 'modal15':modal15.classList.toggle("hide");  break;
    case 'modal16':modal16.classList.toggle("hide");  break;
    case 'modal17':modal17.classList.toggle("hide");  break;
    case 'modal18':modal18.classList.toggle("hide");  break;
    case 'modal19':modal19.classList.toggle("hide");  break;
    case 'modal10':modal20.classList.toggle("hide");  break;  
    case 'modal21':modal21.classList.toggle("hide");  break;
  }
}
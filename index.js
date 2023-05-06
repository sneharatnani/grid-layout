let imgArr = [
  {
    url: "https://plus.unsplash.com/premium_photo-1664202526602-08cbc96c4b3c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxM3x8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=60",
    orientation: "landscape",
  },
  {
    url: "https://images.unsplash.com/photo-1682605402249-eaf94bcc430b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw3fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60",
    orientation: "portrait",
  },

  {
    url: "https://images.unsplash.com/photo-1683321524139-a47fd146ddcb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMnx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=60",
    orientation: "portrait",
  },
  {
    url: "https://images.unsplash.com/photo-1683309807616-b308d251cfd1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyOXx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=60",
    orientation: "landscape",
  },
  {
    url: "https://images.unsplash.com/photo-1681938329910-a95c4c96e5ba?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxNXx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=60",
    orientation: "portrait",
  },
  {
    url: "https://plus.unsplash.com/premium_photo-1664528916941-9aef0dd6ba78?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxOHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=60",
    orientation: "landscape",
  },

  {
    url: "https://images.unsplash.com/photo-1683319521824-dce955eefcdb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzNXx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=60",
    orientation: "portrait",
  },
  {
    url: "https://images.unsplash.com/photo-1683362050151-b1e79a676ece?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyN3x8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=60",
    orientation: "landscape",
  },
];

window.addEventListener("DOMContentLoaded", () => {
  const container = document.querySelector(".container");
  for (let i = 0; i < imgArr.length; i++) {
    const imgContainer = document.createElement("div");
    imgContainer.setAttribute("class", imgArr[i].orientation);
    const gridImg = document.createElement("img");
    gridImg.src = imgArr[i].url;
    imgContainer.appendChild(gridImg);
    container.appendChild(imgContainer);
  }
});

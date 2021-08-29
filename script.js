const month=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
const days=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];
for(var i =0;i<12;i++){
  window.console.log(month[i]+"\n")
}
const squares = document.querySelector('.squares');
for (var i = 1; i < 365; i++) {
  const level = Math.floor(Math.random() * 3);  
  squares.insertAdjacentHTML('beforeend', `<li data-level="${level}"></li>`);
}
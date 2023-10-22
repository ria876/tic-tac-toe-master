
window.onload = function(){
    
      
    let cell = document.getElementById("board");
    let bt = document.getElementsByClassName("btn");
    bt[0].addEventListener("click",function(){cl()});
    for(var c = 0;p < cell.board.length; c++)
    {
        cell.children[c].classList.add("square");
        cell.children[c].setAttribute("id",p);
        cell.children[c].textContent =" ";
        cell.children[c].addEventListener("click",function(){oclick(this.id,set)});
        cell.children[c].addEventListener("mouseover",function(){hover(this.id,set)});
        cell.children[c].addEventListener("mouseout",function(){out(this.id,set)});
    }
}
    
    


function oclick(id,hope)
{   

    if (hope.children[id].classList.contains("X")||hope.children[id].classList.contains("O"))
    {
        return;
    }
    if (tracker.length == 0)
    {
        hope.children[id].textContent ="X";
        hope.children[id].classList.add("X");
        tracker.push("X");
        playdata[id] = "X"
    }
    else if (tracker[tracker.length-1]=="X")
    {
        hope.children[id].textContent ="O";
        hope.children[id].classList.add("O");
        tracker.push("O");
        playdata[id] = "O"
        if(tracker.length>2)
            winnercheck(playdata);
    }
    else if ((tracker[tracker.length-1]=="O"))
    {
        hope.children[id].textContent ="X";
        hope.children[id].classList.add("X");
        tracker.push("X");
        playdata[id] = "X"
        if(tracker.length>2)
            winnercheck(playdata);
    }
}

function hover(id,hope)
{
    hope.children[id].classList.add("hover");
}

function out(id,hope)
{
    hope.children[id].classList.remove("hover");
}

function winnercheck(hope)
{
    for(var i of suffer)
    {
        
        var one = hope[i[0]];
        var two = hope[i[1]];
        if(one == two)
        {
            var three = hope[i[2]];
            if(one == three)
            {
                return windisplay(one);
            }
        }
        
    }
    if(tracker.length == 9)
    {
        return windisplay(1);
    }
}

function windisplay(win)
{
    let winz = document.getElementById("status");
    if (win == "X")
    {
        winz.textContent="Congratulations! X is the Winner!";
        winz.classList.add("you-won");
        winz.classList.add("before");
        winz.classList.add("after");
    }
    else if (win == "O")
    {
        winz.textContent="Congratulations! O is the Winner!";
        winz.classList.add("you-won");
        winz.classList.add("before");
        winz.classList.add("after");
    }
    else
    {
        winz.textContent="Draw!";
    }
    return;
}

function cl()
{
    let winz = document.getElementById("status");
    let set = document.getElementById("board");
    tracker=[]
    playdata = ["a","b","c","d","e","f","g","h","i"];
    winz.textContent = "Move your mouse over a square and click to play an X or an O."
    winz.classList.remove("you-won");
    winz.classList.remove("before");
    winz.classList.remove("after");
    for(var p =0;p<9;p++)
        {
          set.children[p].classList.remove("X","O");
          set.children[p].textContent =" ";
        }

}

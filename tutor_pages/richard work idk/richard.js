function remove(cardNum)
{
    cards = document.getElementsByClassName("card")[1];
    if (cards.style.display == "none")
    {
        cards.style.display = "inline-block";
    }

    else{

        cards.style.display = "none";
    }
       
}
card1 = document.getElementsByClassName("card")[0];
card2 = document.getElementsByClassName("card")[1];
card3 = document.getElementsByClassName("card")[2];

card1.addEventListener("click", card1, remove)
card2.addEventListener("click", card2, remove)
card3.addEventListener("click", card3, remove)
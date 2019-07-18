"use strict";
// alert("Hello! I am an alert box!!");

//defining an array for the quotes
const quotes = [
  {
    quoteText:
      '"Many of you appear concerned that we are wasting valuable lesson time, but I assure you we will go back to school the moment you start listening to science and give us a future."',
    quoteAuthor: "Greta Thunberg"
  },
  {
    quoteText:
      '"I was fortunate to be born in a time and place where everyone told us to dream big. I could become whatever I wanted to. I could live wherever I wanted to. People like me had everything we needed and more. Things our grandparents could not even dream of. We had everything we could ever wish for and yet now we may have nothing. Now we probably don’t even have a future any more."',
    quoteAuthor: "Greta Thunberg"
  },
  {
    quoteText:
      '"That future was sold so that a small number of people could make unimaginable amounts of money. It was stolen from us every time you said that the sky was the limit, and that you only live once. You lied to us. You gave us false hope. You told us that the future was something to look forward to."',
    quoteAuthor: "Greta Thunberg"
  },
  {
    quoteText:
      "\"But perhaps the most dangerous misconception about the climate crisis is that we have to 'lower' our emissions. Because that is far from enough. ... The fact that we are speaking of 'lowering' instead of 'stopping' emissions is perhaps the greatest force behind the continuing business as usual.\"",
    quoteAuthor: "Greta Thunberg"
  },
  {
    quoteText:
      "\"We should no longer only ask: 'Have we got enough money to go through with this?' but also: 'Have we got enough of the carbon budget to spare to go through with this?' That should and must become the centre of our new currency.\"",
    quoteAuthor: "Greta Thunberg"
  },
  {
    quoteText:
      '"This ongoing irresponsible behavior will no doubt be remembered in history as one of the greatest failures of humankind."',
    quoteAuthor: "Greta Thunberg"
  },
  {
    quoteText:
      '"You don’t listen to the science because you are only interested in solutions that will enable you to carry on like before. Like now. And those answers don’t exist any more. Because you did not act in time."',
    quoteAuthor: "Greta Thunberg"
  },
  {
    quoteText:
      '"Sometimes we just simply have to find a way. The moment we decide to fulfill something, we can do anything. And I’m sure that the moment we start behaving as if we were in an emergency, we can avoid climate and ecological catastrophe. Humans are very adaptable: we can still fix this. But the opportunity to do so will not last for long. We must start today. We have no more excuses."',
    quoteAuthor: "Greta Thunberg"
  },
  {
    quoteText:
      '"We children are doing this to wake the adults up. We children are doing this for you to put your differences aside and start acting as you would in a crisis. We children are doing this because we want our hopes and dreams back."',
    quoteAuthor: "Greta Thunberg"
  },
  {
    quoteText:
      '"Until you start focusing on what needs to be done rather than what is politically possible, there is no hope. We can’t solve a crisis without treating it as a crisis. We need to keep the fossil fuels in the ground, and we need to focus on equity. And if solutions within the system are so impossible to find, maybe we should change the system itself"',
    quoteAuthor: "Greta Thunberg"
  },
  {
    quoteText:
      'Our house is falling apart and our leaders need to start acting accordingly because at the moment they are not. If our house was falling apart our leaders wouldn’t go on like we do today. If our house was falling apart, you wouldn’t hold three emergency Brexit summits and no emergency summit regarding the breakdown of the climate and the environment"',
    quoteAuthor: "Greta Thunberg"
  },
  {
    quoteText:
      '"If you still say that we are wasting valuable lesson time, then let me remind you that our political leaders have wasted decades through denial and inaction"',
    quoteAuthor: "Greta Thunberg"
  },
  {
    quoteText:
      '"Some people, some companies, some decision-makers in particular, have known exactly what priceless values they have been sacrificing to continue making unimaginable amounts of money. And I think many of you here today belong to that group of people"',
    quoteAuthor: "Greta Thunberg"
  },
  {
    quoteText:
      '"It is still not too late to act. It will take a far-reaching vision, it will take courage, it will take fierce, fierce determination to act now, to lay the foundations where we may not know all the details about how to shape the ceiling. In other words, it will take cathedral thinking. I ask you to please wake up and make changes required possible',
    quoteAuthor: "Greta Thunberg"
  },
  {
    quoteText:
      '"Either we choose to go on as a civilisation or we don\'t ... There are no grey areas when it comes to survival."',
    quoteAuthor: "Greta Thunberg"
  },
  {
    quoteText: '"I don\'t want you to be hopeful, I want you to panic"',
    quoteAuthor: "Greta Thunberg"
  },
  {
    quoteText:
      '"Our house is on fire. I am here to say, our house is on fire."',
    quoteAuthor: "Greta Thunberg"
  },
  {
    quoteText:
      '"I don’t want your hope. I don’t want you to be hopeful. I want you to panic. I want you to feel the fear I feel every day. And then I want you to act."',
    quoteAuthor: "Greta Thunberg"
  },
  {
    quoteText:
      '"I want you to act as you would in a crisis. I want you to act as if our house is on fire. Because it is."',
    quoteAuthor: "Greta Thunberg"
  }
];

//function to access random quote from array and inject it together with author on HTML
function injectQuote() {
  //access random quote from quote array
  let randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
  //inject random quote on HTML
  document.getElementById("text").innerHTML = randomQuote.quoteText;
  let quoteTextElem = randomQuote.quoteText;
  //inject author on HTML
  document.getElementById("author").innerHTML = "- " + randomQuote.quoteAuthor;
  let quoteAuthorElem = " - " + randomQuote.quoteAuthor;
  const lineBreak = "%0a";
  const related = "&related=celue";
  const via = "&via=morsewall";
  const addOnHandle = " @celue";
  //truncating quote text in case full tweet gets to be over 280 characters
  let contentQuote =
    quoteTextElem + quoteAuthorElem + lineBreak + via + addOnHandle;
  if (contentQuote.length > 280) {
    let charCountAuthor = quoteAuthorElem.length;
    let viaCharCount = via.length;
    let addOnHandleCharCount = addOnHandle.length;
    const extraStylingChar = "..." + '"';
    const extraCharCount = extraStylingChar.length;
    const tweetAdjustmentChar = "  ";
    const tweetAdjustmentCharCount = tweetAdjustmentChar.length;
    let subString =
      quoteTextElem.substring(
        0,
        280 -
          extraCharCount -
          charCountAuthor -
          viaCharCount -
          addOnHandleCharCount -
          tweetAdjustmentCharCount
      ) +
      extraStylingChar +
      quoteAuthorElem +
      lineBreak +
      via +
      addOnHandle +
      related;
    //generate url available for Twitter intent and inject url on HTML
    document.getElementById("tweet-quote").href =
      "https://twitter.com/intent/tweet?text=" + subString;
  } else {
    //generate url available for Twitter intent and inject url on HTML
    document.getElementById("tweet-quote").href =
      "https://twitter.com/intent/tweet?text=" + contentQuote + related;
  }
}

// inject a quote on screen when app loads
injectQuote();

//inject a quote on screen when "Get New Quote" button is clicked
document.getElementById("new-quote").addEventListener("click", function() {
  injectQuote();
});

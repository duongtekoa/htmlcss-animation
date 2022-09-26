function anh1(){
    var  anh1=document.getElementById("anh");
      anh1.src= "anh1.jpg"
  }

  function anh2(){
    var  anh2=document.getElementById("anh");
      anh2.src= "anh2.jpg"
  }
  function anh3(){
    var  anh3=document.getElementById("anh");
      anh3.src= "anh3.jpg"
  }
  function anh4(){
    var  anh4=document.getElementById("anh");
      anh4.src= "anh4.jpg"
  }

  

  var index = 1;

  function next(){
    var  imgs = ["anh1.jpg","anh2.jpg","anh3.jpg","anh4.jpg"]

    document.getElementById("anh").src=imgs[index];
    index++;
    if(index==4){
        index=0;
    }
  }

  function back(){
    var  imgs = ["anh4.jpg","anh3.jpg","anh2.jpg","anh1.jpg"]

    document.getElementById("anh").src=imgs[index];
    index++;
    if(index==4){
     index=0;
}
    }
    setInterval(next,5000)

    function prev1() {
        var myimg = document.getElementById("diving");
        var child = myimg.children[0];

        myimg.removeChild(child);
        myimg.appendChild(child);
    }

    function next1() {
        var myimg = document.getElementById("diving");
        var child = myimg.children[0];

        myimg.removeChild(child);
        myimg.appendChild(child);
    }
    

    
    function mo(){
        document.getElementById("st_form").style.display = "block";
    }
    function dong(){
        document.getElementById("st_form").style.display = "none";
    }

    function one() {
       document.getElementById("show").src = "p1.jpg";
       document.getElementById("h11").innerHTML = "Pepsi Nitro"
       document.getElementById("doanvan").innerHTML = "PURCHASE, N.Y., Feb. 23, 2022 /PRNewswire/ -- The cola category has been around for over a century. While it's had its share of flavor and packaging innovation, one thing has remained the same since the category's inception – the bubbles. Pepsi is taking on its most ambitious feat yet, reimagining the cola experience with a massive innovation - Nitro Pepsi. Nitro Pepsi is the first-ever nitrogen-infused cola that's actually softer than a soft drink – it's creamy, smooth and has a mesmerizing cascade of tiny bubbles topped off by a frothy foam head."
       document.getElementById("st1").style.display = "block"
     
      
      }

    function two() {
      document.getElementById("show").src = "p2.jpg";
      document.getElementById("h11").innerHTML = "Pepsi Coffee"
      document.getElementById("doanvan").innerHTML = "The Pepsi Café line comes in two flavors—Original and Vanilla—and gets its coffee flavor from arabica bean extract. It's not meant to taste like coffee fully, but rather a mashup of coffee and Pepsi, meaning it's, yes, a carbonated beverage intended to be served cold. (Considering that Starbucks admits over half of its sales are cold beverages, it's sure to pique the interest of some cold brew fans.) As for a caffeine kick, Pepsi Café sports about twice the amount you'd find in a 12-ounce can or bottle of regular soda (which is 37.6 mg), and with a typical eight-ounce cup of coffee coming in at 95 mg, the new product land somewhere in between."
      document.getElementById("st1").style.display = "block"
      
    }

   function three() {
    document.getElementById("show").src = "p3.jpg";
    document.getElementById("h11").innerHTML = "Pepsi Juice"
    document.getElementById("doanvan").innerHTML = "This unique twist on cola creates an unbelievably delightful taste profile that is unparalleled in the marketplace, creating a refreshing way for people to cool off in the warm weather. <br> Available until 14 June, the three flavours will be sold in 12oz cans in 12-packs at retailers across the US. They will be released later in 12 oz sleek cans in an eight-pack at Walmart and Target stores"
    document.getElementById("st1").style.display = "block"
       
  }

 function four() {
  document.getElementById("show").src = "p4.jpg";
  document.getElementById("h11").innerHTML = "Pepsi True"
  document.getElementById("doanvan").innerHTML = "Here's a little food-related rage for your Friday. We were offered free samples of Pepsi True, a new stevia-sweetened soda from PepsiCo that purports to have Real Cola Taste. True Pepsi Fun. Its made without artificial sweeteners and high fructose corn syrup, and it has only 16 grams of sugar. And guess what—its disgusting."
  document.getElementById("st1").style.display = "block"
  
}

function five() {
  document.getElementById("show").src = "p5.jpg";
  document.getElementById("h11").innerHTML = "Pepsi Soda"
  document.getElementById("doanvan").innerHTML = "To kick off this product launch, Pepsi enlisted the popular singer Doja Cat. Given that it is the 50th anniversary of Grease, Doja Cat is bringing her twist to the classic song,Doja Cat commented on this surreal experience and said:It’s such an iconic song and brand, so to have the creative license to put my own spin on it for the launch of Pepsi-Cola Soda Shop was a once-in-a-lifetime opportunity; I had to be a part of it."
  document.getElementById("st1").style.display = "block"
      
}

function six() {
  document.getElementById("show").src = "p6.jpg";
  document.getElementById("h11").innerHTML = "Pepsi Coke Diet"
  document.getElementById("doanvan").innerHTML = "In what appears to be a truly classic case of false advertising, Coca-Cola and PepsiCo call their artificially sweetened colas Diet Coke and Diet Pepsi. Why false advertising?It turns out that in recent years, many scientific studies link artificial sweeteners to weight gain, not weight loss.That’s right. Artificial sweeteners are linked to weight gain, type 2 diabetes, increased appetite, metabolic disorders, obesity, and other conditions that are the opposite of the meaning of the term “diet.”"
  document.getElementById("st1").style.display = "block"
       
}

function seven() {
  document.getElementById("show").src = "p7.jpg";
  document.getElementById("h11").innerHTML = "Pepsi Bubly"
  document.getElementById("doanvan").innerHTML = "PURCHASE, N.Y. (Feb. 8, 2018) – PepsiCo (NASDAQ: PEP) today announced the launch of bubly, a new sparkling water that combines refreshing and delicious flavors with an upbeat and playful sense of humor to shake up the sparkling water category while keeping it real with no artificial flavors, no sweeteners, and no calories.Available across the U.S. beginning February 2018, bubly is available in eight crisp flavors that are as fun to say as they are to drink: limebubly, grapefruitbubly, strawberrybubly, lemonbubly, orangebubly, applebubly, mangobubly and cherrybubly. Each bubly flavor features bright, bold packaging, unique smiles for every flavor, and comes with its own witty greeting on the tab (like “Hey u,” “hiii,” and “yo”) and personal messages on the can (such as “I feel like I can be open around u,” “hold cans with me,” and “love at first phssst”), for maximum enjoyment and smiles. To meet a variety of ready-to-drink packaging options, bubly will be available in 12oz. cans (eight and 12 packs), as well as 20oz. single-serve bottles – perfect for every consumer lifestyle and occasion."
  document.getElementById("st1").style.display = "block"

} 

function eight() {
  document.getElementById("show").src = "p8.jpg";
  document.getElementById("h11").innerHTML = "Pepsi Real Sugar"
  document.getElementById("doanvan").innerHTML = "To kick off this product launch, Pepsi enlisted the popular singer Doja Cat. Given that it is the 50th anniversary of Grease, Doja Cat is bringing her twist to the classic song,Doja Cat commented on this surreal experience and said:It’s such an iconic song and brand, so to have the creative license to put my own spin on it for the launch of Pepsi-Cola Soda Shop was a once-in-a-lifetime opportunity; I had to be a part of it."
  document.getElementById("st1").style.display = "block"
      
}

function nine() {
  document.getElementById("show").src = "p9.jpg";
  document.getElementById("h11").innerHTML = "Pepsi Cocoa"
  document.getElementById("doanvan").innerHTML = "The attribute-sounding Cacoa Cola beverage was created at the request of Pepsi aficionados after the brand posted a tweet: What's sweeter than saying goodbye  with the worst ever? Pepsi Cacoa Cola, the ultimate version of the concept from Pepsi Test Kitchen."
  document.getElementById("st1").style.display = "block"
       
}

function ten() {
  document.getElementById("show").src = "p10.jpg";
  document.getElementById("h11").innerHTML = "Pepsi Max"
  document.getElementById("doanvan").innerHTML = "Saccharin is often used together with aspartame in diet carbonated soft fizzy drinks, so that some sweetness remains should the fountain syrup be stored beyond aspartame's relatively short shelf-life. Saccharin is believed to be an important discovery, especially for diabetics, as it goes directly through the human digestive system without being digested. Although saccharin has no food energy, it can trigger the release of insulin in humans and rats, presumably as a result of its taste, as can other sweeteners like aspartame."
  document.getElementById("st1").style.display = "block"
       
}

function cls() {
      document.getElementById("st1").style.display = "none"
       
}
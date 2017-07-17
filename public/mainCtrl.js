
angular.module('app')

.controller('mainCtrl', function($scope, mainServ) {

const quotes = [
    {
        "quote": "Learn what is to be taken seriously and laugh at the rest.",
        "author": "Hermann Hesse"
    },
    
    {
        "quote": "Pain and suffering are always inevitable for a large intelligence and a deep heart. The really great men must, I think, have great sadness on earth.",
        "author": "Fyodor Dostoyevsky"
    },

    {
        "quote": "Never close your lips to those whom you have already opened your heart.",
        "author": "Charles Dickens"
    },


    {
        "quote": "I am against religion because it teaches us to be satisfied with not understanding the world.",
        "author": "Richard Dawkins"
    },

    {
        "quote": "Be thankful that you have a life, and forsake your vain and presumptuous desire for a second one.",
        "author": "Richard Dawkins"
    },

    {
        "quote": "The philosophers have only interpreted the world, in various ways. The point, however, is to change it.",
        "author": "Karl Marx"
    },

    {
        "quote": "The last capitalist we hang shall be the one who sold us the rope.",
        "author": "Karl Marx"
    },


    {
        "quote": "Hegel remarks somewhere that all great, world-historical facts and personages occur, as it were, twice. He has forgotten to add: the first time as tragedy, the second as farce.",
        "author": "Karl Marx"
    },


    {
        "quote": "I am nothing but I must be everything.",
        "author": "Karl Marx"
    },
    
    {
        "quote": "Reason has always existed, but not always in a reasonable form.",
        "author": "Karl Marx"
    },    
    
    {
        "quote": "There is never a point in showing your hand before you have to; that is just a way to ensure giving the game away.",
        "author": "Bruce Bueno De Mesquita"
    },

    {
        "quote": "It’s always better for a ruler to determine who eats than it is to have a larger pie from which the people can feed themselves.",
        "author": "Bruce Bueno De Mesquita"
    },


    {
        "quote": "There is more scholarly work on the life-habits of the dung fly than on existential risks [to humanity].",
        "author": "Nick Bostrom"
    },


    {
        "quote": "On one estimate, the adult human brain stores about one billion bits—a couple of orders of magnitude less than a low-end smartphone.",
        "author": "Nick Bostrom"
    },
    
    {
        "quote": "Once you're using sides and sauces you're on the right track and you're also following the general principles about how to eat well in the United States.",
        "author": "Tyler Cowen"
    },

    {
        "quote": "The fourth and final step is that the human isn’t needed much at all because the program on its own is so strong.",
        "author": "Daniel Kahneman"
    },

    {
        "quote": "Money does not buy you happiness, but lack of money certainly buys you misery.",
        "author": "Daniel Kahneman"
    },
    
    {
        "quote": "The idea that the future is unpredictable is undermined every day by the ease with which the past is explained.",
        "author": "Daniel Kahneman"
    },

    {
        "quote": "There is nothing I would not do for those who are really my friends. I have no notion of loving people by halves, it is not my nature.",
        "author": "Jane Austen"
    },

    {
        "quote": "I could easily forgive his pride, if he had not mortified mine.",
        "author": "Daniel Kahneman"
    },

    {
        "quote": "Money does not buy you happiness, but lack of money certainly buys you misery.",
        "author": "Daniel Kahneman"
    },
    
    {
        "quote": "The idea that the future is unpredictable is undermined every day by the ease with which the past is explained.",
        "author": "Daniel Kahneman"
    },
    
    {
        "quote": "Never complain of that of which it is at all times in your power to rid yourself.",
        "author": "Adam Smith"
    },
    
    {
        "quote": "No society can surely be flourishing and happy of which by far the greater part of the numbers are poor and miserable. ",
        "author": "Adam Smith"
    },

    {
        "quote": "Perhaps our greatest distinction as a species is our capacity, unique among animals, to make counter-evolutionary choices.",
        "author": "Jared Diamond"
    },
    
    {
        "quote": "The past was still a Golden Age, of ignorance, while the present is an Iron Age of willful bliss.",
        "author": "Jared Diamond"
    },
    
    
]


$scope.quoteFade = function(){
  console.log('quoter now')

//   function quoter(index){
//     console.log(quotes[index].quote)
//   }

//   while(true){
  
//     for(var i = 0; i < quotes.length; i++){
//       setTimeout(quoter(i), 10000);
//     }
//   }
}

    
  
  $scope.submitMessage = (message) => {
    // var obj = {message: message}
    mainServ.postMessage(message)
    // .then(function(response) {
    //   getMessages()
    // })
  }

  $scope.submitSignup = function(signup){

    mainServ.postNewUser(signup)

    console.log(("button works"))
    $("body").addClass("animated hinge");
        

  }

})








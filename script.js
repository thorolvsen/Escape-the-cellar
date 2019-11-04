const textElement = document.getElementById('text')
const optionButtonsElement = document.getElementById('options')

let state = {}

var input
var kod

function startGame() {
    state = {}
    showTextNode(100)
}

function showTextNode(textNodeIndex) {
    const textNode = textNodes.find(textNode => textNode.id === textNodeIndex)
    textElement.innerText = textNode.text
    while (optionButtonsElement.firstChild) {
        optionButtonsElement.removeChild(optionButtonsElement.firstChild)
    }
    if (textNode.id===7) {
        input = document.createElement('input')
        input.classList.add('input')
        optionButtonsElement.appendChild(input)
        
        return  
    }    

    textNode.options.forEach(option => {
        if (showOption(option)) {
            const button = document.createElement('button')
            button.innerText = option.text
            button.classList.add('button')
            button.addEventListener('click', () => selectOption(option))
            optionButtonsElement.appendChild(button)
        }

    })
}

window.addEventListener('keyup', function(event) {
  if (event.keyCode === 13) {
   event.preventDefault();
   kod = input.value;
   if (kod==312){
       showTextNode(8)
   }
  }
});

function showOption(option) {
    return option
}

function selectOption(option) {
    const nextTextNodeId = option.nextText
    showTextNode(nextTextNodeId)
}

const textNodes = [
    {
        id: 100,
        text: 'Hej och välkommen till din värsta mardröm!\n\nDu har blivit kidnappad av en seriemördare som i väntan på ”rätt tillfälle” att göra slut på ditt lidande nu håller dig fången i sin källare. För att överleva måste du fatta en rad beslut som antingen kommer att leda dig till frihet eller till död.',
        options: [
            {
                text: 'Starta spelet',
                nextText: 1,
            }
        ]
    },
    {
        id: 1,
        text: 'Du vaknar upp i ett kallt mörkt rum utan någon som helst aning om vart du är. Till din stora fasa inser du att du sitter fastkedjad i väggen med din ena hand. Allt känns som i en skräckfilm. I takt med att paniken kryper sig på inser du att du har två alternativ; du kan antingen slita dig loss och riskera att du skadar dig, eller ropa efter hjälp i hopp om att någon skall höra dig. Vad gör du? ',
        options: [
            {
                text: 'Slit dig loss',
                nextText: 2,
                            
            },
            {
                text: 'Ropa på hjälp',
                nextText: 3,
            }
        ]
    },
    {
        id: 2,
        text: 'Du sliter och drar. Det är tillsynes omöjligt att komma loss, men du hör att något knakar till i handen och så är du fri. Trots den otroliga smärtan kan du nu röra dig fritt i källaren. Utan någon typ av ljuskälla känns din nyvunna frihet meningslös, därför bestämmer du dig att söka efter något som kan bryta det kompakta mörkret. Vart skall du leta?',
        options: [
            {
                text: 'Längst med golvet',
                nextText: 4,
            },
            {
                text: 'Längst med väggarna',
                nextText: 5,
            }  
        ]
    },
    {
        id: 3, 
        text: 'Dina desperata rop på hjälp når inte långt utanför källarväggarna, du svär tyst för dig själv och börjar inställt slita och dra i dina kedjor. Du inser snabbt att det är försent när du till din stora fasa hör tunga steg närma sig… Mördaren hörde dig och han kommer nu för att göra slut på ditt lidande snabbare än någon av er hade hoppats.',
        options: [
            {
                text: 'Bli mördad',
                nextText: 99, 
            }
        ]
    }, 
    {
        id: 4, 
        text: 'Försiktigt känner du dig fram med din oskadda hand längst med det kalla, smutsiga golvet. Efter att ha hittat dammråttor, metallskräp och plastbitar känner du dig äntligen fram till något som verkar vara en ficklampa.',
        options: [
            {
                text: 'Tänd ficklampan och se dig omkring', 
                nextText: 6,
            }
        ]
    },
    {
        id: 5, 
        text: 'Du känner dig längst med de kala väggarna och inser snabbt att det är meningslöst. Du kommer inte hitta en lampa här. Golvet kanske var ett bättre alternativ ändå.',
        options: [
            {
                text: 'Leta på golvet istället',
                nextText: 4,
            }
        ]
    },
    {
        id: 6,
        text: 'Du sveper ficklampan längst med väggar och tak. Källaren är tom från hyllor, bänkar och annan inredning... men när du riktar lampan mot ett av rummets bortrehörn skymtar du något i den svaga ljusstrålen. Det är en ask av något slag. När du kommer närmre inser du att den är låst med ett kodlås. Hur skall du kunna öppna lådan?',
        options: [
            {
                text: 'Försök slita upp lådan',
                nextText: 9,
            },
            {
                text: 'Se dig om efter någon typ av ledtråd',
                nextText: 7,
            }
        ]
    },
    {
        id: 7, 
        text: 'Åter igen söker du i mörkret med hjälp av ficklampan. Denna gång vet du vad du letar efter; någon typ av kod… Tro det eller ej men mycket av väggarna är täckta med tecken och bilder, det är nästan som om det vistats någon stackar här i källaren förut. Oavsett så gör klottret så att det är svårt att urskilja vad som kan vara till din hjälp. När du lyfter blicken ser du något som sticker ut; i en av takbjälkarna står det ”12+3x100”. Kanske kan detta vara koden till låset?\n\nSkriv in koden och klicka på enter. Om koden är rätt kommer du att kunna öppna lådan, annars händer det ingenting.',
        input:[
            {
            }
        ]
    },
    {
        id: 8,
        text: 'Koden var rätt! Du ber en tyst bön för att tacka alla lärare som tragglat matte och ekvationer med dig, vem hade kunnat ana att det faktisk skulle kunna rädda liv?\n\nI lådan ligger din telefon. Med endast några få batteriprocent kvar och minimal täckning lyckas du nå fram till larmcentralen. Inom endast några minuter hör du sirener, följt av ett tumult på våningen över. Du är äntligen fri.', 
        options: [
            {
                text: 'Börja om',
                nextText: 1,
            }
        ]
    },
    {
        id: 9,
        text: 'Du skakar och skakar men det enda du får ut av det är ett otroligt oljud. I desperation och frustration kastar du asken i väggen, den landar på golvet och med ett brak går den itu. Ut faller en telefon, din telefon. Du skall precis skynda fram för att ringa 112 när du till ditt stora förtret inser att mördaren hört dina oväsen och nu kommer nu för att göra slut på ditt lidande, snabbare än någon av er hade hoppats.',
        options: [
            {
                text: 'Bli mördad',
                nextText: 99,
            }
        ]
    },

    {
        id: 99, //game over
        text: 'Du har förlorat. Försök igen',
        options: [  
            {
                text: 'Starta om',
                nextText: 1,
            }
        ]
    }
]

startGame()
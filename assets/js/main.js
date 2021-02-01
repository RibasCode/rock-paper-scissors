'use strict'

//D'aquesta forma no tindrem variables globals
const game = () => {

    var pScore = 0
    var cScore = 0



    
    const startGame = () => {
        const playBtn = document.querySelector('.intro button')
        const introScreen = document.querySelector('.intro')
        const match = document.querySelector('.match')
        const winner = document.querySelector('.winner')



        playBtn.addEventListener('click', () => {
            introScreen.classList.remove("fadeIn")
            introScreen.classList.add("fadeOut")
            match.classList.remove("fadeOut")
            match.classList.add("fadeIn")
            
            const playerHand = document.querySelector('.player-hand')
            const computerHand = document.querySelector('.computer-hand')

            winner.textContent = "Chose an option";

            playerHand.src = `assets/img/rock.png`
            computerHand.src = `assets/img/rock.png`
            pScore = 0
            cScore = 0
            
            updateScore()
        })

    }



    const playMatch = () => {
        const options = document.querySelectorAll('.options button')
        const playerHand = document.querySelector('.player-hand')
        const computerHand = document.querySelector('.computer-hand')

        const hands = document.querySelectorAll('.hands img')

        

        hands.forEach(hand => {
            hand.addEventListener('animationend', function(){
                this.style.animation = ''

            })
        })


        const computerOptions = ['rock', 'paper', 'scissors']


        
        options.forEach(option => {
            // coloquem una funció normal perque volem fer servir la paraula this, si fos arrow la paraula this no faria referencia a option
            option.addEventListener('click', function(){

                playerHand.src = `assets/img/rock.png`
                computerHand.src = `assets/img/rock.png`

                const computerNumber = Math.floor(Math.random() * 3)
                const computerChoise = computerOptions[computerNumber]

                // console.log(computerNumber)
                // console.log(computerChoise)
                // console.log(this)
                // console.log(this.textContent)

                setTimeout(() => {
                    compareHands(this.classList.value, computerChoise)
                    // console.log(this.classList.value)
                    // Actualitzar Imgs
                    playerHand.src = `assets/img/${this.classList}.png`
                    computerHand.src = `assets/img/${computerChoise}.png`
                    
                }, 1250)


                playerHand.style.animation = 'shakePlayer 1.5s ease'
                computerHand.style.animation = 'shakeComputer 1.5s ease'
            })
        })
    
    }

    // s'ha de actualitzar el resultat cada cop que algu guanya, sino, es farà pero no es veura
    const updateScore = () => {
        const playerScore = document.querySelector('.player-score p')
        const computerScore = document.querySelector('.computer-score p')

        playerScore.textContent = pScore
        computerScore.textContent = cScore

        endGame(pScore, cScore)
    }


    //playerChoise, computerChoise son parametres que estan a la espera per que li pasem
    const compareHands = (playerChoise, computerChoise) => {

        

        const winner = document.querySelector('.winner')

        if(playerChoise === computerChoise){
            winner.textContent = "It's a tie";
            // return per finalitzar la funció
            return
        }

        if(playerChoise === 'rock'){
            if(computerChoise === 'scissors'){
                winner.textContent = 'You win'
                pScore++
                updateScore()
                // return per finalitzar la funció
                return
            }else{
                winner.textContent = 'You lose'
                cScore++
                updateScore()
                // return per finalitzar la funció
                return
            }
        }

        if(playerChoise === 'paper'){
            if(computerChoise === 'scissors'){
                winner.textContent = 'You lose'
                cScore++
                updateScore()
                // return per finalitzar la funció
                return
            }else{
                winner.textContent = 'You win'
                pScore++
                updateScore()
                // return per finalitzar la funció
                return
            }
        }

        if(playerChoise === 'scissors'){
            if(computerChoise === 'rock'){
                winner.textContent = 'You lose'
                cScore++
                updateScore()
                return
            }else{
                winner.textContent = 'You win'
                pScore++
                updateScore()
                return
            }
        }

    }

    const endGame = (pScore, cScore) => {
        
        if(pScore === 3){
            const introScreen = document.querySelector('.intro')
            const match = document.querySelector('.match')
            const title = document.querySelector('h1')
            const introButton = document.querySelector('.intro button')
            
            match.classList.remove("fadeIn")
            match.classList.add("fadeOut")

            setTimeout(() => {
                introScreen.classList.remove("fadeOut")
                introScreen.classList.add("fadeIn")
            }, 1250)

            title.innerHTML = `You have won! <br><span style="font-size: 36px;"> ${pScore} to ${cScore}</span>`
            introButton.textContent = "Play again"

            return

        }else if(cScore === 3){
            const introScreen = document.querySelector('.intro')
            const match = document.querySelector('.match')
            const title = document.querySelector('h1')
            const introButton = document.querySelector('.intro button')
            
            match.classList.remove("fadeIn")
            match.classList.add("fadeOut")

            setTimeout(() => {
                introScreen.classList.remove("fadeOut")
                introScreen.classList.add("fadeIn")
            }, 1250)

            title.innerHTML = `You have lost! <br><span style="font-size: 36px;"> ${pScore} to ${cScore}</span>`
            introButton.textContent = "Try again"

            return

        }
    }

    
    startGame()
    playMatch()

}

game();

// hem apres que es important a on sexecuta la funcio i com li pasem els parametres exemple endGame() dins de updateScore()
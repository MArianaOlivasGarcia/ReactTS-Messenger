
import { animateScroll } from 'react-scroll'


export const scrollToButtom = ( containerId: string ) => {

    // Movimiento sin animación
    animateScroll.scrollToBottom({
        containerId,
        duration: 0 //ms
    })


}



export const scrollToButtomAnimated = ( containerId: string ) => {

    // Movimiento sin animación
    animateScroll.scrollToBottom({
        containerId,
        duration: 250 //ms
    })


}
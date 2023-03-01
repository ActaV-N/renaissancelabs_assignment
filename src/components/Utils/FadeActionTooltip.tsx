import gsap from 'gsap';
import React, { useEffect, useRef, useState } from 'react';
import { twMerge } from 'tailwind-merge';

interface Props{
    open: boolean,
    children: React.ReactNode,
    tails?: string,
    handleSubmit?: Function,
    handleClose?: Function
}

/**
 * Utility tooltip container
 * call `handleSubmit` function when it's closed
 */
const FadeContainer:React.FC<Props> = ({open, children, tails, handleSubmit, handleClose}) => {
    // Submit state
    const [isSubmitOccured, setIsSubmitOccured] = useState<boolean>(false);
    // Open state
    const [isOpen, setIsOpen] = useState<boolean>(open);

    useEffect(() => {
        setIsOpen(open);
    }, [open])

    // Container ref
    const containerRef = useRef<HTMLFormElement>(null);

    // handleSubmit
    const _handleSubmit:React.FormEventHandler = (event) => {
        event.preventDefault();
        setIsSubmitOccured(true);
    }

    // call handleSubmit props when it is closed
    useEffect(() => {
        if(!isOpen){
            // Close animation
            gsap.context(() => {
                const tl = gsap.timeline({
                    onComplete(){
                        if(isSubmitOccured){
                            handleSubmit && handleSubmit();
                            setIsSubmitOccured(false);
                        }
                    }
                })

                tl.to(containerRef.current, {
                    autoAlpha:0,
                    duration:0.2,
                    ease:'power1.inOut'
                })
            }, containerRef)
        } else{
            // Open animation
            gsap.context(() => {
                const tl = gsap.timeline({})

                tl.to(containerRef.current, {
                    autoAlpha:1,
                    duration:0.2,
                    ease:'power1.inOut'
                })
            }, containerRef)
        }
    }, [isOpen, containerRef, isSubmitOccured, handleSubmit])

    useEffect(() => {
        // Fade out when outside of the container clicked clicked
        const handleOutsideClick = (event: MouseEvent) => {
            if(containerRef.current){
                const container = containerRef.current;
                const el = event.target as HTMLElement;
                const closest = el.closest('.area');
                const clickedArea = closest ? closest : el;
                
                if(isOpen && !container.contains(clickedArea)){
                    setIsOpen(false);
                    handleClose && handleClose();
                }
            }
        }

        // Enroll event
        document.addEventListener('click', handleOutsideClick);

        // Remove event
        return () => {
            document.removeEventListener('click', handleOutsideClick);
        }
    }, [containerRef, isOpen, handleClose])

    return <form className={
        twMerge('opacity-0 invisible', tails)}
        ref={containerRef}
        onSubmit={_handleSubmit}
    >
        {children}
    </form>
}

export default FadeContainer
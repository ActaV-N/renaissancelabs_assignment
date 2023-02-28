import Button from "@/components/Inputs/Button";
import React from "react";

interface Props{
    handleClose: React.MouseEventHandler
}

const BeforeLogin:React.FC<Props> = ({handleClose}) => {
    return <>
        <div className='font-bold mb-4'>
            Connect
        </div>
        <Button
            label="Connect Wallet"
            onClick={handleClose}
            type='submit'
        />
    </>
}

export default BeforeLogin;
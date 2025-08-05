import React from 'react'
import Register from '../../component/Register'
import { Users } from 'lucide-react'

const RegisterPage = () => {
    return (
        <div>
            <Register
                icon={Users}
                systemName="Campus ERP Portal"
                Institute="University of ABC"
                supportEmail="support@example.com"
                google="https://accounts.google.com/"
                facebook="https://facebook.com/your-page"
                whatsapp="https://wa.me/94771234567"
                createnew={true}
                subtext="Login using your university credentials. If you face any issues, contact the ERP support team."
            />
        </div>
    )
}

export default RegisterPage
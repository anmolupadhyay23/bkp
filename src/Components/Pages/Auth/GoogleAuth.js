import axios from "axios";
import React, { useEffect } from "react";
import { useAuth } from "../../../Context/authContext";
import { useNavigate } from "react-router-dom";
import { Box, Button, IconButton } from "@mui/material";

const GoogleAuth = () => {

    const [auth,setAuth] = useAuth();
    const navigate = useNavigate();

    const handleGoogle = async (response) => {
        try {
            const res = await axios.post(
                "http://localhost:8000/google-login",
                {
                    idToken: response.credential
                },
                {
                    headers: {
                        'Content-Type': 'application/json; charset=utf-8',
                    },
                }
            );

            console.log(`res.data.idToken: ${res.data.idToken}`)

            console.log(`res.data.name: ${res.data.userDetails.name}`);

            console.log(`res.data.email: ${res.data.userDetails.email}`);

            // No user is logged in
            setAuth({
                ...auth,
                userId: res.data.userDetails._id,
                token: res.data.idToken,
                name: res.data.userDetails.name,
                email: res.data.userDetails.email,
                address: res.data.userDetails.address,
                phone: res.data.userDetails.phone
            })

            localStorage.setItem('auth',JSON.stringify(res.data.userDetails));
            console.log(res.data.userDetails);

            console.log(`token: ${res.data.userDetails.idToken}`);

            navigate('/');

            alert('Logged In');

        } catch (e) {
            console.error(e);
            alert('teri ma ki chut');
        }
    };

    useEffect(() => {
        if (window?.google?.accounts?.id) {
            window.google.accounts.id.initialize({
                client_id: '751807066798-8nqklbu57e90otir3qm0uh8i2nrjkpho.apps.googleusercontent.com',
                callback: handleGoogle,
            });

            const parent = document.getElementById("googlePop-up");
            window.google.accounts.id.renderButton(parent, {
                

                
                
            });
            
        }
    }, []);

    return (
        <Box >
            <Box id="googlePop-up" style={{ width: '100%', height: '100%' }}></Box>
         </Box>
            
        
    );
};

export default GoogleAuth;
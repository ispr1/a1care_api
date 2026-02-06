import axios from "axios";
import dotenv from 'dotenv';
dotenv.config();

const sendMessage = async (mobileNumber: number | string, otp: number | string) => {
    try {
        const authKey = process.env.MSG91_AUTH_KEY;
        const templateId = process.env.MSG91_TEMPLATE_ID;

        if (!authKey || !templateId) {
            console.error("MSG91 Credentials missing");
            return;
        }

        const url = "https://control.msg91.com/api/v5/otp";

        const params = {
            template_id: templateId,
            mobile: "91" + mobileNumber, // Assuming India +91, adjusting based on input
            authkey: authKey,
            otp: otp
        };

        const response = await axios.get(url, { params });

        console.log("MSG91 Response:", response.data);
    } catch (error) {
        console.error('Error in sending MSG91 message', error);
    }
}

export default sendMessage;

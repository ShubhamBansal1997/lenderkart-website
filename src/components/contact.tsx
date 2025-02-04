import { useState, ChangeEvent, FormEvent } from 'react';
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

interface FormData {
    name: string;
    email: string;
    message: string;
}

const Contact: React.FC = () => {
    const [formData, setFormData] = useState<FormData>({ name: '', email: '', message: '' });
    const [responseMessage, setResponseMessage] = useState<string>('');

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const response = await fetch('../api/contact.tsx', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(formData),
        });
        const data = await response.json();
        setResponseMessage(data.message);
    };

    return (
        <div>
            <form onSubmit={handleSubmit}  className="flex flex-col gap-2 text-background w-full">
                <div>
                <Label>Name</Label>
                <Input type="text" name="name" placeholder="Name" onChange={handleChange} required />
                </div>
                <div>
                <Label>Email</Label>
                <Input type="email" name="email" placeholder="Email" onChange={handleChange} required />
                </div>
                <div>
                <Label>Message</Label>
                <Textarea name="message" placeholder="Message" onChange={handleChange} required />
                </div>
                <Button variant="secondary" className="mt-2" type="submit">Send</Button>
            </form>
            <p>{responseMessage}</p>
        </div>
    );
};

export default Contact;

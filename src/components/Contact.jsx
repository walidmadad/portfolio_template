import React, { useRef, useState } from 'react';

const Contact = () => {
    const formRef = useRef();
    const [status, setStatus] = useState({ message: '', isError: false });
    const [errors, setErrors] = useState({ user_name: '', user_email: '', message: '' });

    const validateField = (name, value) => {
        switch (name) {
            case 'user_name':
                return value.trim() ? '' : 'Veuillez entrer votre nom.';
            case 'user_email':
                return /\S+@\S+\.\S+/.test(value) ? '' : 'Veuillez entrer une adresse email valide.';
            case 'message':
                return value.trim() ? '' : 'Veuillez entrer votre message.';
            default:
                return '';
        }
    };

    const handleBlur = (e) => {
        const { name, value } = e.target;
        setErrors((prevErrors) => ({
            ...prevErrors,
            [name]: validateField(name, value),
        }));
    };

    const handleInput = (e) => {
        const { name, value } = e.target;
        if (errors[name]) {
            setErrors((prevErrors) => ({
                ...prevErrors,
                [name]: validateField(name, value),
            }));
        }
    };

    const sendEmail = async (e) => {
        e.preventDefault();

        const formData = new FormData(formRef.current);
        const newErrors = {
            user_name: validateField('user_name', formData.get('user_name')),
            user_email: validateField('user_email', formData.get('user_email')),
            message: validateField('message', formData.get('message')),
        };

        setErrors(newErrors);

        if (Object.values(newErrors).some((error) => error)) return;

        try {
            const response = await fetch('https://walid-madad.com/sendEmail.php', {
                method: 'POST',
                body: formData,
            });
            const result = await response.json();
            if (result.status === 'success') {
                setStatus({ message: 'Message envoyé avec succès !', isError: false });
                setErrors({ user_name: '', user_email: '', message: '' });
                formRef.current.reset();
            } else {
                setStatus({ message: 'Erreur lors de l\'envoi du message : ' + result.message, isError: true });
            }
        } catch (error) {
            console.error('Error:', error);
            setStatus({ message: 'Erreur lors de l\'envoi du message.', isError: true });
        }
    };

    return (
        <section id="contact" className="container mx-auto px-4 py-20">
            <h2 className="text-3xl font-bold text-center">Contactez-moi</h2>
            <form ref={formRef} onSubmit={sendEmail} className="mt-8 max-w-lg mx-auto">
                <div className="mb-4">
                    <input
                        type="text"
                        name="user_name"
                        placeholder="Nom"
                        className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                        onBlur={handleBlur}
                        onInput={handleInput}
                    />
                    {errors.user_name && <p className="text-red-500 text-sm mt-1">{errors.user_name}</p>}
                </div>
                <div className="mb-4">
                    <input
                        type="email"
                        name="user_email"
                        placeholder="Email"
                        className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                        onBlur={handleBlur}
                        onInput={handleInput}
                    />
                    {errors.user_email && <p className="text-red-500 text-sm mt-1">{errors.user_email}</p>}
                </div>
                <div className="mb-4">
                    <textarea
                        name="message"
                        placeholder="Message"
                        className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                        rows="5"
                        onBlur={handleBlur}
                        onInput={handleInput}
                    ></textarea>
                    {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
                </div>
                <button
                    type="submit"
                    className="w-full bg-blue-500 text-white p-3 rounded-lg hover:bg-blue-600 transition duration-200"
                >
                    Envoyer le message
                </button>
                {status.message && (
                    <p className={`text-center mt-4 ${status.isError ? 'text-red-500' : 'text-green-500'}`}>
                        {status.message}
                    </p>
                )}
            </form>
        </section>
    );
};

export default Contact;

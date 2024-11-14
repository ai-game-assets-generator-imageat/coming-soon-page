"use client";

import React, { useState } from 'react'
import { collection, addDoc, query, where, getDocs, serverTimestamp } from 'firebase/firestore';
import { db } from '@/lib/firebase';
import data from "../../../data/data";

function SubscribeForm() {
    const { newsletterheading, hideSubscribeForm } = data;
    const [email, setEmail] = useState('');
    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
    const [message, setMessage] = useState('');

    const isEmailValid = (email: string) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('loading');

        try {
            // Debug için log
            console.log('Submitting with data:', {
                email: email.toLowerCase().trim(),
                timestamp: serverTimestamp(),
                subscribed: true
            });

            const subscribersRef = collection(db, 'subscribers');
            await addDoc(subscribersRef, {
                email: email.toLowerCase().trim(),
                timestamp: serverTimestamp(),
                subscribed: true
            });

            setStatus('success');
            setMessage('Thank you for subscribing!');
            setEmail('');
        } catch (error) {
            // Detaylı hata logu
            console.error('Firebase Error:', error);
            
            setStatus('error');
            setMessage('Unable to subscribe at this time. Please try again later.');
        }
    };

    return (
        <>
            {hideSubscribeForm === false ? (
                <section className="text-center lg:m-7 mt-10 w-80 p-3">
                    <form className="space-y-6" onSubmit={handleSubmit}>
                        <div>
                            <label htmlFor="email" className="block text-slate-800 dark:text-slate-100 font-light text-sm leading-6">
                                {newsletterheading}
                            </label>
                            <div className="mt-2 flex-col flex lg:flex md:flex-row">
                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="Email address"
                                    autoComplete="email"
                                    required
                                    className="block w-full placeholder:text-gray-500 pl-[10px] focus:outline-none border-0 text-slate-800 dark:text-slate-100 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 mr-0 rounded-none p-2 bg-white dark:bg-slate-800"
                                />
                                <button 
                                    type="submit"
                                    disabled={status === 'loading'}
                                    className="ml-0 bg-slate-900 sm:w-auto border-slate-800 dark:border-slate-100 rounded-none mt-2 md:mt-0 p-2 border-2 text-white hover:bg-slate-950 disabled:opacity-50"
                                >
                                    {status === 'loading' ? 'Subscribing...' : 'Subscribe'}
                                </button>
                            </div>
                            {message && (
                                <p className={`mt-2 text-sm ${status === 'success' ? 'text-green-600' : 'text-red-600'}`}>
                                    {message}
                                </p>
                            )}
                        </div>
                    </form>
                </section>
            ) : null}
        </>
    );
}

export default SubscribeForm
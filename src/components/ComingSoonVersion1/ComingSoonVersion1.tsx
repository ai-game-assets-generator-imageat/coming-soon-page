import React from 'react'
import CountDown from '../CountDown/Countdown'
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import SubscribeForm from '../SubscribeForm/SubscribeForm';
import { ThemeSwitcher } from '../ThemeSwitcher';

function ComingSoonVersion1() {
    const specificEndDate = new Date('2025-02-15T23:59:59');

  return (
    <>
        <ThemeSwitcher />
        <section className="flex min-h-screen flex-col w-full items-center justify-between p-5 lg:p-12">
            <Header />
            <CountDown endDate={specificEndDate} />
            <SubscribeForm />
            <Footer />
        </section>
    </>
  )
}

export default ComingSoonVersion1